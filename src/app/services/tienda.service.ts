import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http:HttpClient) { }

  public listarTiendas(){
    return this.http.get(`${baserUrl}/tienda/find/all`);
  }

  public agregarTienda(tienda:any){
    return this.http.post(`${baserUrl}/tienda/save`,tienda);
  }

  public eliminarTienda(tiendaID:any){
    return this.http.delete(`${baserUrl}/tienda/delete/${tiendaID}`);
  }

  public obtenerTienda(id:any){
    return this.http.get(`${baserUrl}/tienda/find/${id}`);
  }

  public actualizarTienda(tienda:any, id:any){
    return this.http.put(`${baserUrl}/tienda/update/${id}`,tienda);
  }

  public listarFavoritos(idUsuario:any){
    return this.http.get(`${baserUrl}/tienda/find/tiendas/favorito/${idUsuario}`);
  }

  public agregarFavorito(idUsuario:any, idTienda:any){
    return this.http.post(`${baserUrl}/tienda/save/favorito/${idUsuario}/${idTienda}`, {});
  }

  public eliminarFavorito(idUsuario:any, idTienda:any){
    return this.http.delete(`${baserUrl}/tienda/delete/favorito/${idUsuario}/${idTienda}`);
  }

  esFavorito(idUsuario:any, idTienda:any): Observable<boolean> {
    return this.http.get<boolean>(`${baserUrl}/tienda/find/tienda/favorito/${idUsuario}/${idTienda}`);
  }

  public listarComentarios(idTienda:any, pagina: number, tamanio: number){
    return this.http.get(`${baserUrl}/tienda/find/comentarios/${idTienda}?pagina=${pagina}&tamanio=${tamanio}`);
  }

  public agregarComentario(idTienda:any, idUsuario:any, contenido:String){
    return this.http.post(`${baserUrl}/tienda/save/comentario/${idTienda}/${idUsuario}`, {contenido: contenido});
  }

  public eliminarComentario(idComentario:any){
    return this.http.delete(`${baserUrl}/tienda/delete/comentario/${idComentario}`);
  }

  public actualizarComentario(contenido:any, idComentario:any){
    return this.http.put(`${baserUrl}/tienda/update/comentario/${idComentario}`,contenido);
  }
}
