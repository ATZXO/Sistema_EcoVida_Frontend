import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http:HttpClient) { }

  public listarArticulosPorEstado(estado: string) {
    return this.http.get(`${baserUrl}/articulo/find/all/estado`, {
      params: { estado: estado }
    });
  }

  public agregarArticulo(actividad:any): Observable<any>{
    return this.http.post(`${baserUrl}/articulo/save`,actividad);
  }

  public eliminarArticulo(articuloID:any){
    return this.http.delete(`${baserUrl}/articulo/delete/${articuloID}`);
  }

  public obtenerArticulo(id:any){
    return this.http.get(`${baserUrl}/articulo/find/${id}`);
  }

  public actualizarActiculo(articulo:any, id:any){
    return this.http.put(`${baserUrl}/articulo/update/${id}`,articulo);
  }

  public actualizarEstadoActiculo(id:any){
    return this.http.put(`${baserUrl}/articulo/update/estado/${id}`, {});
  }

  public listarFavoritos(idUsuario:any){
    return this.http.get(`${baserUrl}/articulo/find/articulos/favorito/${idUsuario}`);
  }

  public agregarFavorito(idUsuario:any, idArticulo:any){
    return this.http.post(`${baserUrl}/articulo/save/favorito/${idUsuario}/${idArticulo}`, {});
  }

  public eliminarFavorito(idUsuario:any, idArticulo:any){
    return this.http.delete(`${baserUrl}/articulo/delete/favorito/${idUsuario}/${idArticulo}`);
  }

  esFavorito(idUsuario:any, idArticulo:any): Observable<boolean> {
    return this.http.get<boolean>(`${baserUrl}/articulo/find/articulo/favorito/${idUsuario}/${idArticulo}`);
  }
  
  public listarComentarios(idArticulo:any, pagina: number, tamanio: number){
    return this.http.get(`${baserUrl}/articulo/find/comentarios/${idArticulo}?pagina=${pagina}&tamanio=${tamanio}`);
  }

  public agregarComentario(idArticulo:any, idUsuario:any, contenido:String){
    return this.http.post(`${baserUrl}/articulo/save/comentario/${idArticulo}/${idUsuario}`, {contenido: contenido});
  }

  public eliminarComentario(idComentario:any){
    return this.http.delete(`${baserUrl}/articulo/delete/comentario/${idComentario}`);
  }

  public actualizarComentario(contenido:any, idComentario:any){
    return this.http.put(`${baserUrl}/articulo/update/comentario/${idComentario}`,contenido);
  }
}
