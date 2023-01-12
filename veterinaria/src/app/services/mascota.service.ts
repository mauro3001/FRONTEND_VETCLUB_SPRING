import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { mostrarMascota } from '../models/mostrar-mascota';
import { Mascota } from '../models/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  formMascota : Mascota;

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/api/mascota";

  //metodo para llamar la informacion de las mascotas conectandose a la bd y usando la interfaz
  obtenerMascotas():Observable<mostrarMascota[]>{
    let ruta = this.url+'s'
    return this.http.get<mostrarMascota[]>(ruta);
  }

  extraerMascota(id_mascota:any):Observable<mostrarMascota>{
    let ruta1 = this.url+'/'+id_mascota;
    return this.http.get<mostrarMascota>(ruta1)
  }

  //poner informacion de la mascota
  putMascota(form:mostrarMascota, id:any):Observable<mostrarMascota>{
    let ruta2 = this.url+'/'+id;
    return this.http.put<mostrarMascota>(ruta2, form)
  }

  //metodo para agregar una nueva mascota
  agregarMasco(form:Mascota):Observable<Mascota>{
    let way = this.url+'/agregar';
    return this.http.post<any>(way,this.formMascota)
  } 

  //metodo para eliminar una mascota
  eliminarMasco(id_mascota:number):Observable<mostrarMascota>{
    let ruta2 = this.url+'/eliminar/'+id_mascota;

    return this.http.get<mostrarMascota>(ruta2, {
      headers: new HttpHeaders({ 'Content-Type': 'aplication/json'})
    })

  }

}
