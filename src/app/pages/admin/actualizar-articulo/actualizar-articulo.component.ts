import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from '../../../services/articulo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-articulo',
  standalone: false,
  templateUrl: './actualizar-articulo.component.html',
  styleUrl: './actualizar-articulo.component.css'
})
export class ActualizarArticuloComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private articuloService:ArticuloService,
    private router:Router) { }

  id = 0;
  articulo:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.articuloService.obtenerArticulo(this.id).subscribe(
      (data) => {
        this.articulo = data;
        console.log(this.articulo);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public actualizarDatos(){
    this.articuloService.actualizarActiculo(this.articulo, this.id).subscribe(
      (data) => {
        Swal.fire('Articulo actualizado','El articulo ha sido actualizada con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/articulos']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el articulo','error');
        console.log(error);
      }
    )
  }

}
