import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../../services/tienda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-tiendas',
  standalone: false,
  templateUrl: './load-tiendas.component.html',
  styleUrl: './load-tiendas.component.css'
})
export class LoadTiendasComponent implements OnInit {

  tiendas:any = [
    
    ]
    
      constructor(private tiendaService:TiendaService) { }
    
      ngOnInit(): void {
        this.tiendaService.listarTiendas().subscribe(
          (dato:any) => {
            this.tiendas = dato;
            console.log(this.tiendas);
          },
          (error) => {
            console.log(error);
            Swal.fire('Error !!','Error al cargar las categorías','error');
          }
        )
      }

}
