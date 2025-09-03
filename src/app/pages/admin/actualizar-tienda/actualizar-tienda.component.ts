import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from '../../../services/tienda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-tienda',
  standalone: false,
  templateUrl: './actualizar-tienda.component.html',
  styleUrl: './actualizar-tienda.component.css'
})
export class ActualizarTiendaComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private tiendaService:TiendaService,
    private router:Router) { }

  id = 0;
  tienda:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tiendaService.obtenerTienda(this.id).subscribe(
      (data) => {
        this.tienda = data;
        console.log(this.tienda);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public actualizarDatos(){
    this.tiendaService.actualizarTienda(this.tienda, this.id).subscribe(
      (data) => {
        Swal.fire('Tienda actualizada','La tienda ha sido actualizada con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/tiendas']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar la tienda','error');
        console.log(error);
      }
    )
  }

}
