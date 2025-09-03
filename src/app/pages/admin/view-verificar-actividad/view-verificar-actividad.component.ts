import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadService } from '../../../services/actividad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-verificar-actividad',
  standalone: false,
  templateUrl: './view-verificar-actividad.component.html',
  styleUrl: './view-verificar-actividad.component.css'
})
export class ViewVerificarActividadComponent implements OnInit {

  constructor(private route: ActivatedRoute, private actividadService:ActividadService, private router: Router) { }

  id = 0;
  actividad: any;

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

  eliminarActividad(id: any) {
    Swal.fire({
      title: 'Eliminar evento',
      text: '¿Estás seguro de eliminar el evento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.actividadService.eliminarActividad(id).subscribe(
          (data) => {
            Swal.fire('Evento eliminado', 'El evento ha sido eliminado', 'success');
            this.router.navigate(['/admin/propuesta-actividad']);
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar el evento', 'error');
          }
        )
      }
    })
  }

  verificarActividad(id: any) {
    Swal.fire({
      title: 'Verificar evento',
      text: '¿Estás seguro de Verificar el evento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Verificar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.actividadService.actualizarEstadoActividad(id).subscribe(
          (data) => {
            Swal.fire('Evento verificado', 'El evento ha sido verificado', 'success');
            this.router.navigate(['/admin/propuesta-actividad']);
          },
          (error) => {
            Swal.fire('Error', 'Error al verificar el evento', 'error');
          }
        )
      }
    })
  }

  volverALista(): void {
    this.router.navigate(['/admin/propuesta-actividad']);
  }


}
