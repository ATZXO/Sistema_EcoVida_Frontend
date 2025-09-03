import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../../services/actividad.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-view-detalle-actividad',
  standalone: false,
  templateUrl: './view-detalle-actividad.component.html',
  styleUrl: './view-detalle-actividad.component.css'
})
export class ViewDetalleActividadComponent implements OnInit {

  constructor(private route: ActivatedRoute, private actividadService: ActividadService, private router: Router, private loginService: LoginService) { }

  id = 0;
  actividad: any;
  user: any = null;
  comentarios: any[] = [];
  asistentes: any[] = [];
  nuevoComentario: string = '';
  paginaActual: number = 0;
  tamanioPagina: number = 5;
  totalComentarios: number = 0;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.actividadService.obtenerActividad(this.id).subscribe(
      (data) => {
        this.actividad = data;
        console.log(this.actividad);
        this.cargarComentarios();
        this.cargarAsistentes();
      },
      (error) => {
        console.log(error);
      }
    )
    this.user = this.loginService.getUser();
  }

  eliminarActividad(id: any) {
    Swal.fire({
      title: 'Eliminar actividad',
      text: '¿Estás seguro de eliminar la actividad?',
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
            Swal.fire('Actividad eliminada', 'La actividad ha sido eliminada', 'success');
            this.router.navigate(['/admin/actividades']);
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar la actividad', 'error');
          }
        )
      }
    })
  }

  volverALista(): void {
    this.router.navigate(['/admin/actividades']);
  }

  cargarAsistentes(): void{
    this.actividadService.listarAsistentes(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.asistentes = data.content || data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error al cargar los comentarios', 'error');
      }
    );
  }

  cargarComentarios(): void {
    this.actividadService.listarComentarios(this.id, this.paginaActual, this.tamanioPagina).subscribe(
      (data: any) => {
        this.comentarios = data.content;
        this.totalComentarios = data.totalElements;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error al cargar los comentarios', 'error');
      }
    );
  }

  agregarComentario(): void {
    if (!this.nuevoComentario?.trim()) return;

    this.actividadService.agregarComentario(this.id, this.user.id, this.nuevoComentario).subscribe(
      () => {
        this.nuevoComentario = '';
        this.cargarComentarios();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Comentario publicado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error) => {
        console.error(error);
        Swal.fire('Error', 'No se pudo publicar el comentario', 'error');
      }
    );
  }

  verificarAcciones(comentario: any): boolean {
    return this.user && (comentario.usuario?.id === this.user.id || this.loginService.getUserRole() === 'ADMIN');
  }

  editarComentario(comentario: any): void {
    Swal.fire({
      title: 'Editar comentario',
      input: 'textarea',
      inputValue: comentario.contenido,
      inputPlaceholder: 'Escribe tu comentario aquí...',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value || !value.trim()) {
          return 'Debes escribir un comentario';
        }
        return null;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.actividadService.actualizarComentario(result.value, comentario.id).subscribe(
          () => {
            this.cargarComentarios();
            Swal.fire('Actualizado', 'Comentario actualizado correctamente', 'success');
          },
          (error) => {
            console.error(error);
            Swal.fire('Error', 'No se pudo actualizar el comentario', 'error');
          }
        );
      }
    });
  }

  eliminarComentario(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.actividadService.eliminarComentario(id).subscribe(
          () => {
            this.comentarios = this.comentarios.filter(c => c.id !== id);
            Swal.fire(
              '¡Eliminado!',
              'El comentario ha sido eliminado.',
              'success'
            );
          },
          (error) => {
            console.error(error);
            Swal.fire('Error', 'No se pudo eliminar el comentario', 'error');
          }
        );
      }
    });
  }

  cambiarPagina(event: any): void {
    this.paginaActual = event.pageIndex;
    this.tamanioPagina = event.pageSize;
    this.cargarComentarios();
  }
}
