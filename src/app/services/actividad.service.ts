import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http:HttpClient) { }

  public listarActividades(){
    return this.http.get(`${baserUrl}/actividad/find/all`);
  }

  public listarActividadesPorEstado(estado: string) {
    return this.http.get(`${baserUrl}/actividad/find/all/estado`, {
      params: { estado: estado }
    });
  }

  public agregarActividad(actividad:any){
    return this.http.post(`${baserUrl}/actividad/save`,actividad);
  }

  public eliminarActividad(actividadID:any){
    return this.http.delete(`${baserUrl}/actividad/delete/${actividadID}`);
  }

  public obtenerActividad(id:any){
    return this.http.get(`${baserUrl}/actividad/find/${id}`);
  }

  public actualizarActividad(actividad:any, id:any){
    return this.http.put(`${baserUrl}/actividad/update/${id}`,actividad);
  }

  public actualizarEstadoActividad(id:any){
    return this.http.put(`${baserUrl}/actividad/update/estado/${id}`, {});
  }

  public listarFavoritos(idUsuario:any){
    return this.http.get(`${baserUrl}/actividad/find/actividades/favorito/${idUsuario}`);
  }

  public agregarFavorito(idUsuario:any, idActividad:any){
    return this.http.post(`${baserUrl}/actividad/save/favorito/${idUsuario}/${idActividad}`, {});
  }

  public eliminarFavorito(idUsuario:any, idActividad:any){
    return this.http.delete(`${baserUrl}/actividad/delete/favorito/${idUsuario}/${idActividad}`);
  }

  esFavorito(idUsuario:any, idActividad:any): Observable<boolean> {
    return this.http.get<boolean>(`${baserUrl}/actividad/find/actividad/favorito/${idUsuario}/${idActividad}`);
  }
  
  public listarComentarios(idActividad:any, pagina: number, tamanio: number){
    return this.http.get(`${baserUrl}/actividad/find/comentarios/${idActividad}?pagina=${pagina}&tamanio=${tamanio}`);
  }

  public agregarComentario(idActividad:any, idUsuario:any, contenido:String){
    return this.http.post(`${baserUrl}/actividad/save/comentario/${idActividad}/${idUsuario}`, {contenido: contenido});
  }

  public eliminarComentario(idComentario:any){
    return this.http.delete(`${baserUrl}/actividad/delete/comentario/${idComentario}`);
  }

  public actualizarComentario(contenido:any, idComentario:any){
    return this.http.put(`${baserUrl}/actividad/update/comentario/${idComentario}`,contenido);
  }

  public listarAsistentes(idActividad:any){
    return this.http.get(`${baserUrl}/actividad/find/asistentes/${idActividad}`);
  }
}
