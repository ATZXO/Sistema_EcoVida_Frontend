import { Component } from '@angular/core';
import { ArticuloService } from '../../../services/articulo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-propuesta-articulos',
  standalone: false,
  templateUrl: './view-propuesta-articulos.component.html',
  styleUrl: './view-propuesta-articulos.component.css'
})
export class ViewPropuestaArticulosComponent {

  articulos: any = [

  ]

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.articuloService.listarArticulosPorEstado('INACTIVO').subscribe(
      (dato: any) => {
        this.articulos = dato;
        console.log(this.articulos);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar las categorías', 'error');
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
            this.articulos = this.articulos.filter((actividades: any) => actividades.id != id);
            Swal.fire('Articulo eliminado', 'El articulo ha sido eliminado', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar el articulo', 'error');
          }
        )
      }
    })
  }

}
