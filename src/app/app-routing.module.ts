import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { normalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewArticulosComponent } from './pages/admin/view-articulos/view-articulos.component';
import { AddArticuloComponent } from './pages/admin/add-articulo/add-articulo.component';
import { ViewActividadesComponent } from './pages/admin/view-actividades/view-actividades.component';
import { AddActividadComponent } from './pages/admin/add-actividad/add-actividad.component';
import { ActualizarActividadComponent } from './pages/admin/actualizar-actividad/actualizar-actividad.component';
import { ViewDetalleActividadComponent } from './pages/admin/view-detalle-actividad/view-detalle-actividad.component';
import { ActualizarArticuloComponent } from './pages/admin/actualizar-articulo/actualizar-articulo.component';
import { ViewDetalleArticuloComponent } from './pages/admin/view-detalle-articulo/view-detalle-articulo.component';
import { ViewPropuestaArticulosComponent } from './pages/admin/view-propuesta-articulos/view-propuesta-articulos.component';
import { ViewVerificarArticuloComponent } from './pages/admin/view-verificar-articulo/view-verificar-articulo.component';
import { ViewTiendasComponent } from './pages/admin/view-tiendas/view-tiendas.component';
import { ActualizarTiendaComponent } from './pages/admin/actualizar-tienda/actualizar-tienda.component';
import { ViewDetalleTiendaComponent } from './pages/admin/view-detalle-tienda/view-detalle-tienda.component';
import { AddTiendaComponent } from './pages/admin/add-tienda/add-tienda.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { LoadArticulosComponent } from './pages/user/load-articulos/load-articulos.component';
import { LoadActividadesComponent } from './pages/user/load-actividades/load-actividades.component';
import { LoadTiendasComponent } from './pages/user/load-tiendas/load-tiendas.component';
import { LoadDetalleArticuloComponent } from './pages/user/load-detalle-articulo/load-detalle-articulo.component';
import { LoadFavoritosArticulosComponent } from './pages/user/load-favoritos-articulos/load-favoritos-articulos.component';
import { LoadDetalleFavoritoArticuloComponent } from './pages/user/load-detalle-favorito-articulo/load-detalle-favorito-articulo.component';
import { LoadDetalleActividadComponent } from './pages/user/load-detalle-actividad/load-detalle-actividad.component';
import { LoadDetalleTiendaComponent } from './pages/user/load-detalle-tienda/load-detalle-tienda.component';
import { LoadFavoritosActividadesComponent } from './pages/user/load-favoritos-actividades/load-favoritos-actividades.component';
import { LoadDetalleFavoritoActividadComponent } from './pages/user/load-detalle-favorito-actividad/load-detalle-favorito-actividad.component';
import { LoadFavoritosTiendasComponent } from './pages/user/load-favoritos-tiendas/load-favoritos-tiendas.component';
import { LoadDetalleFavoritoTiendaComponent } from './pages/user/load-detalle-favorito-tienda/load-detalle-favorito-tienda.component';
import { AddPropuestaArticuloComponent } from './pages/user/add-propuesta-articulo/add-propuesta-articulo.component';
import { ViewPropuestaActividadesComponent } from './pages/admin/view-propuesta-actividades/view-propuesta-actividades.component';
import { ViewVerificarActividadComponent } from './pages/admin/view-verificar-actividad/view-verificar-actividad.component';
import { AddPropuestaActividadComponent } from './pages/user/add-propuesta-actividad/add-propuesta-actividad.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { VerificarPasswordComponent } from './pages/verificar-password/verificar-password.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[adminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'update-profile',
        component:UpdateProfileComponent
      },
      {
        path:'verificar-password',
        component:VerificarPasswordComponent
      },
      {
        path:'update-password',
        component:UpdatePasswordComponent
      },
      {
        path : '',
        component : WelcomeComponent
      },
      {
        path:'articulos',
        component:ViewArticulosComponent
      },
      {
        path:'add-articulo',
        component:AddArticuloComponent
      },
      {
        path:'articulo/:id',
        component:ActualizarArticuloComponent
      },
      {
        path:'ver-articulo/:id',
        component:ViewDetalleArticuloComponent
      },
      {
        path:'propuesta-articulo',
        component:ViewPropuestaArticulosComponent
      },
      {
        path:'ver-articulo-verificacion/:id',
        component:ViewVerificarArticuloComponent
      },
      {
        path:'actividades',
        component:ViewActividadesComponent
      },
      {
        path:'add-actividad',
        component:AddActividadComponent
      },
      {
        path:'actividad/:id',
        component:ActualizarActividadComponent
      },
      {
        path:'ver-actividad/:id',
        component:ViewDetalleActividadComponent
      },
      {
        path:'propuesta-actividad',
        component:ViewPropuestaActividadesComponent
      },
      {
        path:'ver-actividad-verificacion/:id',
        component:ViewVerificarActividadComponent
      },
      {
        path:'tiendas',
        component:ViewTiendasComponent
      },
      {
        path:'add-tienda',
        component:AddTiendaComponent
      },
      {
        path:'tienda/:id',
        component:ActualizarTiendaComponent
      },
      {
        path:'ver-tienda/:id',
        component:ViewDetalleTiendaComponent
      }
    ]  
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[normalGuard],
    children: [
      {
        path:'profile-user',
        component:ProfileComponent
      },
      {
        path:'update-profile-user',
        component:UpdateProfileComponent
      },
      {
        path:'verificar-password-user',
        component:VerificarPasswordComponent
      },
      {
        path:'update-password-user',
        component:UpdatePasswordComponent
      },
      {
        path : '',
        component : WelcomeUserComponent
      },
      {
        path:'articulos-user',
        component:LoadArticulosComponent
      },
      {
        path:'add-propuesta-articulo',
        component:AddPropuestaArticuloComponent
      },
      {
        path:'ver-articulo-user/:id',
        component:LoadDetalleArticuloComponent
      },
      {
        path:'articulos-favorito-user',
        component:LoadFavoritosArticulosComponent
      },
      {
        path:'ver-articulo-favorito-user/:id',
        component:LoadDetalleFavoritoArticuloComponent
      },
      {
        path:'actividades-user',
        component:LoadActividadesComponent
      },
      {
        path:'add-propuesta-actividad',
        component:AddPropuestaActividadComponent
      },
      {
        path:'ver-actividad-user/:id',
        component:LoadDetalleActividadComponent
      },
      {
        path:'actividades-favorito-user',
        component:LoadFavoritosActividadesComponent
      },
      {
        path:'ver-actividad-favorito-user/:id',
        component:LoadDetalleFavoritoActividadComponent
      },
      {
        path:'tiendas-user',
        component:LoadTiendasComponent
      },
      {
        path:'ver-tienda-user/:id',
        component:LoadDetalleTiendaComponent
      },
      {
        path:'tiendas-favorito-user',
        component:LoadFavoritosTiendasComponent
      },
      {
        path:'ver-tienda-favorito-user/:id',
        component:LoadDetalleFavoritoTiendaComponent
      }     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
