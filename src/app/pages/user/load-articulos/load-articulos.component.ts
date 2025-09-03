import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../../services/articulo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-articulos',
  standalone: false,
  templateUrl: './load-articulos.component.html',
  styleUrl: './load-articulos.component.css'
})
export class LoadArticulosComponent implements OnInit {

  articulos:any = [
  
  ]
  
    constructor(private articuloService: ArticuloService) { }
  
    ngOnInit(): void {
      this.articuloService.listarArticulosPorEstado('ACTIVO').subscribe(
        (dato:any) => {
          this.articulos = dato;
          console.log(this.articulos);
        },
        (error) => {
          console.log(error);
          Swal.fire('Error !!','Error al cargar las categorías','error');
        }
      )
    }

}
