import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-password',
  standalone: false,
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent {
  passwordForm: FormGroup;
  cargando = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private loginService: LoginService
  ) {
    this.passwordForm = this.fb.group({
      nuevaPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', [Validators.required]]
    }, { validator: this.passwordsCoincidenValidator });
  }

  passwordsCoincidenValidator(formGroup: FormGroup) {
    const nueva = formGroup.get('nuevaPassword')?.value;
    const confirmar = formGroup.get('confirmarPassword')?.value;

    if (!nueva || !confirmar) return null;

    return nueva === confirmar ? null : { noCoinciden: true };
  }

  actualizarPassword() {
    if (this.passwordForm.invalid) return;

    this.cargando = true;
    const nuevaPassword = this.passwordForm.get('nuevaPassword')?.value;
    const id = this.loginService.getUser().id;

    this.userService.actualizarPasswordUsuario({ password: nuevaPassword }, id).subscribe({
      next: () => {
        this.cargando = false;
        Swal.fire({
        icon: 'success',
        title: '¡Contraseña actualizada!',
        text: 'Tu contraseña fue cambiada correctamente.',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3085d6',
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
          popup: 'swal2-popup-animado'
        }
      }).then(() => {
        this.loginService.logout();
        window.location.reload();
      });
      },
      error: (err) => {
        this.cargando = false;
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo actualizar la contraseña. Intenta nuevamente.',
        confirmButtonColor: '#d33'
        });
        console.error(err);
      }
    });
  }

}
