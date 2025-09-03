import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../../services/actividad.service';
import { LoginService } from '../../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-favoritos-actividades',
  standalone: false,
  templateUrl: './load-favoritos-actividades.component.html',
  styleUrl: './load-favoritos-actividades.component.css'
})
export class LoadFavoritosActividadesComponent implements OnInit {

  actividades:any = [
      
    ]
  
    user:any = null;
      
        constructor(private actividadService:ActividadService, private loginService:LoginService) { }
      
        ngOnInit(): void {
          this.user = this.loginService.getUser();
          this.actividadService.listarFavoritos(this.user.id).subscribe(
            (dato:any) => {
              this.actividades = dato;
              console.log(this.actividades);
            },
            (error) => { 
              console.log(error);
              Swal.fire('Error !!','Error al cargar las categorías','error');
            }
          )
        }

}
