import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  standalone: false,
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  sidebarCollapsed = false; 

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
