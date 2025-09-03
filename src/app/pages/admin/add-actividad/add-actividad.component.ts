import { Component } from '@angular/core';
import { ActividadService } from '../../../services/actividad.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-actividad',
  standalone: false,
  templateUrl: './add-actividad.component.html',
  styleUrl: './add-actividad.component.css'
})
export class AddActividadComponent {

  articuloData = {
    titulo:'',
    descripcion:'',
    distrito:'',
    fecha:''
  }

  constructor(
    private actividadService:ActividadService,
    private snack:MatSnackBar,
    private router:Router) { }

    guardarActividad(){
      console.log(this.articuloData);
      if(this.articuloData.titulo.trim() == '' || this.articuloData.titulo == null){
        this.snack.open('El título es requerido','',{
          duration:3000
        });
        return ;
      }
  
      this.actividadService.agregarActividad(this.articuloData).subscribe(
        (data) => {
          console.log(data);
          Swal.fire('Actividad guardada','La actividad ha sido guardada con éxito','success');
          this.articuloData = {
            titulo : '',
            descripcion : '',
            distrito: '',
            fecha: ''
          }
          this.router.navigate(['/admin/propuesta-actividad']);
        },
        (error) => {
          Swal.fire('Error','Error al guardar la actividad','error');
        }
      )
    }
}
