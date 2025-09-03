import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

    public añadirUsuario(user:any){
      return this.httpClient.post(`${baserUrl}/usuarios/`, user);
    }

    public actualizarDetallesUsuario(userDetalles: any, id:any){
      return this.httpClient.patch(`${baserUrl}/usuarios/update/${id}`, userDetalles);
    }

    public actualizarPasswordUsuario(userPassword:any, id:any){
      return this.httpClient.patch(`${baserUrl}/usuarios/update/password/${id}`, userPassword);
    }

    public verificarPasswordUsuario(userPassword:any){
      return this.httpClient.post(`${baserUrl}/usuarios/verificar/password`, userPassword);
    }
}
