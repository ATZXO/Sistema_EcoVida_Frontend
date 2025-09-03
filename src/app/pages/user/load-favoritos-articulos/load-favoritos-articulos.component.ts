import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../../services/articulo.service';
import Swal from 'sweetalert2';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-load-favoritos-articulos',
  standalone: false,
  templateUrl: './load-favoritos-articulos.component.html',
  styleUrl: './load-favoritos-articulos.component.css'
})
export class LoadFavoritosArticulosComponent implements OnInit{

  articulos:any = [
    
  ]

  user:any = null;
    
      constructor(private articuloService: ArticuloService, private loginService:LoginService) { }
    
      ngOnInit(): void {
        this.user = this.loginService.getUser();
        this.articuloService.listarFavoritos(this.user.id).subscribe(
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
