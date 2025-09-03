import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../../services/tienda.service';
import { LoginService } from '../../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-favoritos-tiendas',
  standalone: false,
  templateUrl: './load-favoritos-tiendas.component.html',
  styleUrl: './load-favoritos-tiendas.component.css'
})
export class LoadFavoritosTiendasComponent implements OnInit{

  tiendas:any = [
        
      ]
    
      user:any = null;
        
          constructor(private tiendaService:TiendaService, private loginService:LoginService) { }
        
          ngOnInit(): void {
            this.user = this.loginService.getUser();
            this.tiendaService.listarFavoritos(this.user.id).subscribe(
              (dato:any) => {
                this.tiendas = dato;
                console.log(this.tiendas);
              },
              (error) => {
                console.log(error);
                Swal.fire('Error !!','Error al cargar las categorías','error');
              }
            )
          }
  

}
