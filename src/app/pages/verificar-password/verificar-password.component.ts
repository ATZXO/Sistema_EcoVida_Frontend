import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verificar-password',
  standalone: false,
  templateUrl: './verificar-password.component.html',
  styleUrl: './verificar-password.component.css'
})
export class VerificarPasswordComponent {
  verificarForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private loginService: LoginService
  ) {
    this.verificarForm = this.fb.group({
      password: ['', [Validators.required]]
    });
  }

  verificarPassword() {
    this.userService.verificarPasswordUsuario(this.verificarForm.value).subscribe({
      next: (res: any) => {
        if (res.valid) {
          if (this.loginService.getUserRole() == 'ADMIN') {
            this.router.navigate(['admin/update-password']);
          }
          else if (this.loginService.getUserRole() == 'NORMAL') {
            this.router.navigate(['user-dashboard/update-password-user']);
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña no es correcta. Intenta nuevamente.',
            confirmButtonColor: '#d33'
          });
        }
      },
      error: (err) => {
        console.error('Error al intentar verificar contraseña', err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al intentar verificar contraseña. Intenta nuevamente.',
          confirmButtonColor: '#d33'
        });
      }
    });
  }

}
