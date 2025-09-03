import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  user: any = null;

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    /*this.loginService.getCurrentUser().subscribe(
      (user:any) => {
        this.user = user;
      },
      (error) => {
        alert("error");
      }
    )*/
  }

  actualizarDetalles(): void {
    if (this.loginService.getUserRole() == 'ADMIN') {
      this.router.navigate(['admin/update-profile']);
    }
    else if (this.loginService.getUserRole() == 'NORMAL') {
      this.router.navigate(['user-dashboard/update-profile-user']);
    }
  }

  actualizarPassword(): void{
    if(this.loginService.getUserRole() == 'ADMIN') {
      this.router.navigate(['admin/verificar-password']);
    }
    else if (this.loginService.getUserRole() == 'NORMAL') {
      this.router.navigate(['user-dashboard/verificar-password-user']);
    }
  }

}
