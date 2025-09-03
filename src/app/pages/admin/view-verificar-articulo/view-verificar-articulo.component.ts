import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from '../../../services/articulo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-verificar-articulo',
  standalone: false,
  templateUrl: './view-verificar-articulo.component.html',
  styleUrl: './view-verificar-articulo.component.css'
})
export class ViewVerificarArticuloComponent implements OnInit {

  constructor(private route: ActivatedRoute, private articuloService: ArticuloService, private router: Router) { }

  id = 0;
  articulo: any;

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

  eliminarArticulo(id: any) {
    Swal.fire({
      title: 'Eliminar articulo',
      text: '¿Estás seguro de eliminar el articulo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.articuloService.eliminarArticulo(id).subscribe(
          (data) => {
            Swal.fire('Articulo eliminado', 'El articulo ha sido eliminado', 'success');
            this.router.navigate(['/admin/propuesta-articulo']);
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar el articulo', 'error');
          }
        )
      }
    })
  }

  verificarArticulo(id: any) {
    Swal.fire({
      title: 'Verificar articulo',
      text: '¿Estás seguro de Verificar el articulo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Verificar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.articuloService.actualizarEstadoActiculo(id).subscribe(
          (data) => {
            Swal.fire('Articulo verificado', 'El articulo ha sido verificado', 'success');
            this.router.navigate(['/admin/propuesta-articulo']);
          },
          (error) => {
            Swal.fire('Error', 'Error al verificar el articulo', 'error');
          }
        )
      }
    })
  }

  volverALista(): void {
    this.router.navigate(['/admin/propuesta-articulo']);
  }

  verPdf() {
    window.open(this.articulo.rutaPdf, '_blank');
  }
  
}
