import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadService } from '../../../services/actividad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-actividad',
  standalone: false,
  templateUrl: './actualizar-actividad.component.html',
  styleUrl: './actualizar-actividad.component.css'
})
export class ActualizarActividadComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private actividadService:ActividadService,
    private router:Router) { }

  id = 0;
  actividad:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.actividadService.obtenerActividad(this.id).subscribe(
      (data) => {
        this.actividad = data;
        console.log(this.actividad);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public actualizarDatos(){
    this.actividadService.actualizarActividad(this.actividad, this.id).subscribe(
      (data) => {
        Swal.fire('Actividad actualizada','La actividad ha sido actualizada con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/actividades']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar la actividad','error');
        console.log(error);
      }
    )
  }

}
