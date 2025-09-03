import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user:any = null;

  @ViewChild('adminDrawer') adminDrawer!: MatDrawer; 
  @ViewChild('userDrawer') userDrawer!: MatDrawer;    
  isAdmin: boolean = false;
  isUsuarioNormal: boolean = false;

  constructor(public login:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.login.loginStatus$.subscribe((loggedIn: boolean) => {
    this.isLoggedIn = loggedIn;

    if (loggedIn) {
      this.user = this.login.getUser();
      const role = this.login.getUserRole();
      this.isAdmin = role === 'ADMIN';
      this.isUsuarioNormal = role === 'NORMAL';
    } else {
      this.user = null;
      this.isAdmin = false;
      this.isUsuarioNormal = false;
      }
    });

    // Tambien ejecutar esto al cargar por primera vez
    this.isLoggedIn = this.login.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.login.getUser();
      const role = this.login.getUserRole();
      this.isAdmin = role === 'ADMIN';
      this.isUsuarioNormal = role === 'NORMAL';
    }
  }

  toggleDrawer() {
  if (this.isAdmin && this.adminDrawer) {
    this.adminDrawer.toggle();
  } else if (this.userDrawer) {
    this.userDrawer.toggle();
  }
}

  public logout(){
    this.login.logout();
    this.isAdmin = false;
    this.isUsuarioNormal = false;
    this.router.navigate(['/login']);
  }
}
