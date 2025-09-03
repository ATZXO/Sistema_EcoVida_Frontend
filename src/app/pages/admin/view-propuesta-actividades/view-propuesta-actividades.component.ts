import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActividadService } from '../../../services/actividad.service';

@Component({
  selector: 'app-view-propuesta-actividades',
  standalone: false,
  templateUrl: './view-propuesta-actividades.component.html',
  styleUrl: './view-propuesta-actividades.component.css'
})
export class ViewPropuestaActividadesComponent implements OnInit {

  actividades : any = [
  
    ]
  
    constructor(private actividadService:ActividadService) { }
  
    ngOnInit(): void {
      this.actividadService.listarActividadesPorEstado('INACTIVO').subscribe(
        (dato:any) => {
          this.actividades = dato;
          console.log(this.actividades);
        },
        (error) => {
          console.log(error);
          Swal.fire('Error','Error al cargar las actividades','error');
        }
      )
    }
  
    eliminarActividad(id:any){
      Swal.fire({
        title:'Eliminar actividad',
        text:'¿Estás seguro de eliminar la actividad?',
        icon:'warning',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText:'Eliminar',
        cancelButtonText:'Cancelar'
      }).then((result) => {
        if(result.isConfirmed){
          this.actividadService.eliminarActividad(id).subscribe(
            (data) => {
              this.actividades = this.actividades.filter((actividades:any) => actividades.id != id);
              Swal.fire('Actividad eliminada','La actividad ha sido eliminada','success');
            },
            (error) => {
              Swal.fire('Error','Error al eliminar la actividad','error');
            }
          )
        }
      })
    }
}
