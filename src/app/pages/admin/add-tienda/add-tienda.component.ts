import { Component } from '@angular/core';
import { TiendaService } from '../../../services/tienda.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tienda',
  standalone: false,
  templateUrl: './add-tienda.component.html',
  styleUrl: './add-tienda.component.css'
})
export class AddTiendaComponent {

  tiendaData = {
    nombre:'',
    descripcion:'',
    lugar:''
  }

  constructor(
    private tiendaService:TiendaService,
    private snack:MatSnackBar,
    private router:Router) { }

    guardarTienda(){
      console.log(this.tiendaData);
      if(this.tiendaData.nombre.trim() == '' || this.tiendaData.nombre == null){
        this.snack.open('El título es requerido','',{
          duration:3000
        });
        return ;
      }
  
      this.tiendaService.agregarTienda(this.tiendaData).subscribe(
        (data) => {
          console.log(data);
          Swal.fire('Tienda guardada','La tienda ha sido guardada con éxito','success');
          this.tiendaData = {
            nombre : '',
            descripcion : '',
            lugar: ''
          }
          this.router.navigate(['/admin/tiendas']);
        },
        (error) => {
          Swal.fire('Error','Error al guardar la tienda','error');
        }
      )
    }
}
