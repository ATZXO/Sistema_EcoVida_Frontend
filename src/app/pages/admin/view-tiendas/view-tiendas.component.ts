import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../../services/tienda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-tiendas',
  standalone: false,
  templateUrl: './view-tiendas.component.html',
  styleUrl: './view-tiendas.component.css'
})
export class ViewTiendasComponent implements OnInit {

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
  
    eliminarTienda(id:any){
        Swal.fire({
          title:'Eliminar tienda',
          text:'¿Estás seguro de eliminar la tienda?',
          icon:'warning',
          showCancelButton:true,
          confirmButtonColor:'#3085d6',
          cancelButtonColor:'#d33',
          confirmButtonText:'Eliminar',
          cancelButtonText:'Cancelar'
        }).then((result) => {
          if(result.isConfirmed){
            this.tiendaService.eliminarTienda(id).subscribe(
              (data) => {
                this.tiendas = this.tiendas.filter((actividades:any) => actividades.id != id);
                Swal.fire('Tienda eliminada','La tienda ha sido eliminada','success');
              },
              (error) => {
                Swal.fire('Error','Error al eliminar la tienda','error');
              }
            )
          }
        })
      }
}
