import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  standalone: false,
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnInit {

  id = 0;
  userDetalles = {
    "nombre" : '',
    "apellido" : '',
    "telefono" : ''
  }
  user:any;

  constructor(private loginService: LoginService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    this.id = this.user.id;
    this.userDetalles.nombre = this.user.nombre;
    this.userDetalles.apellido = this.user.apellido;
    this.userDetalles.telefono = this.user.telefono;
  }

  actualizarDatos() {
    this.userService.actualizarDetallesUsuario(this.userDetalles, this.id).subscribe(
      (data) => {
        Swal.fire('Datos actualizados', 'Los datos han sido actualizados con éxito', 'success').then(
          (e) => {
            this.user.nombre = this.userDetalles.nombre;
            this.user.apellido = this.userDetalles.apellido;
            this.user.telefono = this.userDetalles.telefono;
            this.loginService.setUser(this.user);
            if (this.loginService.getUserRole() == 'ADMIN') {
              this.router.navigate(['admin/profile']);
            }
            else if (this.loginService.getUserRole() == 'NORMAL') {
              this.router.navigate(['user-dashboard/profile-user']);
            }
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema', 'No se ha podido actualizar', 'error');
        console.log(error);
      }
    )
  }
}
