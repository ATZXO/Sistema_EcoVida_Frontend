import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewArticulosComponent } from './pages/admin/view-articulos/view-articulos.component';
import { AddArticuloComponent } from './pages/admin/add-articulo/add-articulo.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewActividadesComponent } from './pages/admin/view-actividades/view-actividades.component';
import { AddActividadComponent } from './pages/admin/add-actividad/add-actividad.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { ActualizarActividadComponent } from './pages/admin/actualizar-actividad/actualizar-actividad.component';
import { ViewDetalleActividadComponent } from './pages/admin/view-detalle-actividad/view-detalle-actividad.component';
import { ViewDetalleArticuloComponent } from './pages/admin/view-detalle-articulo/view-detalle-articulo.component';
import { ActualizarArticuloComponent } from './pages/admin/actualizar-articulo/actualizar-articulo.component';
import { ViewPropuestaArticulosComponent } from './pages/admin/view-propuesta-articulos/view-propuesta-articulos.component';
import { ViewVerificarArticuloComponent } from './pages/admin/view-verificar-articulo/view-verificar-articulo.component';
import { ViewTiendasComponent } from './pages/admin/view-tiendas/view-tiendas.component';
import { ViewDetalleTiendaComponent } from './pages/admin/view-detalle-tienda/view-detalle-tienda.component';
import { AddTiendaComponent } from './pages/admin/add-tienda/add-tienda.component';
import { ActualizarTiendaComponent } from './pages/admin/actualizar-tienda/actualizar-tienda.component';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { LoadArticulosComponent } from './pages/user/load-articulos/load-articulos.component';
import { LoadActividadesComponent } from './pages/user/load-actividades/load-actividades.component';
import { LoadTiendasComponent } from './pages/user/load-tiendas/load-tiendas.component';
import { LoadDetalleArticuloComponent } from './pages/user/load-detalle-articulo/load-detalle-articulo.component';
import { LoadFavoritosArticulosComponent } from './pages/user/load-favoritos-articulos/load-favoritos-articulos.component';
import { LoadDetalleFavoritoArticuloComponent } from './pages/user/load-detalle-favorito-articulo/load-detalle-favorito-articulo.component';
import { LoadDetalleActividadComponent } from './pages/user/load-detalle-actividad/load-detalle-actividad.component';
import { LoadDetalleTiendaComponent } from './pages/user/load-detalle-tienda/load-detalle-tienda.component';
import { LoadDetalleFavoritoActividadComponent } from './pages/user/load-detalle-favorito-actividad/load-detalle-favorito-actividad.component';
import { LoadDetalleFavoritoTiendaComponent } from './pages/user/load-detalle-favorito-tienda/load-detalle-favorito-tienda.component';
import { LoadFavoritosActividadesComponent } from './pages/user/load-favoritos-actividades/load-favoritos-actividades.component';
import { LoadFavoritosTiendasComponent } from './pages/user/load-favoritos-tiendas/load-favoritos-tiendas.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddPropuestaArticuloComponent } from './pages/user/add-propuesta-articulo/add-propuesta-articulo.component';
import { MatTableModule } from '@angular/material/table';
import { ViewPropuestaActividadesComponent } from './pages/admin/view-propuesta-actividades/view-propuesta-actividades.component';
import { ViewVerificarActividadComponent } from './pages/admin/view-verificar-actividad/view-verificar-actividad.component';
import { AddPropuestaActividadComponent } from './pages/user/add-propuesta-actividad/add-propuesta-actividad.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { VerificarPasswordComponent } from './pages/verificar-password/verificar-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewArticulosComponent,
    AddArticuloComponent,
    ViewActividadesComponent,
    AddActividadComponent,
    ActualizarActividadComponent,
    ViewDetalleActividadComponent,
    ViewDetalleArticuloComponent,
    ActualizarArticuloComponent,
    ViewPropuestaArticulosComponent,
    ViewVerificarArticuloComponent,
    ViewTiendasComponent,
    ViewDetalleTiendaComponent,
    AddTiendaComponent,
    ActualizarTiendaComponent,
    UserSidebar,
    WelcomeUserComponent,
    LoadArticulosComponent,
    LoadActividadesComponent,
    LoadTiendasComponent,
    LoadDetalleArticuloComponent,
    LoadFavoritosArticulosComponent,
    LoadDetalleFavoritoArticuloComponent,
    LoadDetalleActividadComponent,
    LoadDetalleTiendaComponent,
    LoadDetalleFavoritoActividadComponent,
    LoadDetalleFavoritoTiendaComponent,
    LoadFavoritosActividadesComponent,
    LoadFavoritosTiendasComponent,
    AddPropuestaArticuloComponent,
    ViewPropuestaActividadesComponent,
    ViewVerificarActividadComponent,
    AddPropuestaActividadComponent,
    UpdateProfileComponent,
    UpdatePasswordComponent,
    VerificarPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [authInterceptorProviders, { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
