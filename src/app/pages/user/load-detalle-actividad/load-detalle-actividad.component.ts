import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadService } from '../../../services/actividad.service';
import { LoginService } from '../../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-detalle-actividad',
  standalone: false,
  templateUrl: './load-detalle-actividad.component.html',
  styleUrl: './load-detalle-actividad.component.css'
})
export class LoadDetalleActividadComponent implements OnInit{

  constructor(private route:ActivatedRoute, private actividadService:ActividadService, private router:Router, private loginService:LoginService) { }

  id = 0;
  actividad:any;
  esFavorito: boolean = false;
  user:any = null;
  comentarios: any[] = [];
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
      },
      (error) => {
        console.log(error);
      }
    )
    this.user = this.loginService.getUser();
    this.verificarSiEsFavorito();
  }

  verificarSiEsFavorito(): void {
    this.actividadService.esFavorito(this.user.id, this.id).subscribe(
      resultado => {
        this.esFavorito = resultado;
      }
    );
  }

  toggleFavorito(): void {

    if (this.esFavorito) {
      this.actividadService.eliminarFavorito(this.user.id, this.id).subscribe(
        () => {
          this.esFavorito = false;
          Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Asistencia Anulada',
                      showConfirmButton: false,
                      timer: 1500
                    });
        }
      );
    } else {
      this.actividadService.agregarFavorito(this.user.id, this.id).subscribe(
        () => {
          this.esFavorito = true;
          Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Asistencia Confirmada',
                      showConfirmButton: false,
                      timer: 1500
                    });
        }
      );
    }
  }

  volverALista(): void {
    this.router.navigate(['/user-dashboard/actividades-user']);
  }

  cargarComentarios(): void {
      this.actividadService.listarComentarios(this.id, this.paginaActual, this.tamanioPagina).subscribe(
        (data:any) => {
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
