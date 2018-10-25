import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.inerfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;


  equipo: InfoEquipo = [];
  
  constructor( private http: HttpClient ) {
    console.log('Servicio de infoPagina listo');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
      //console.log( resp['twitter'] );
    });
  }

  private cargarEquipo() {
    // Leer el archivo JSON
    this.http.get('https://angular-html-dd2d9.firebaseio.com/equipo.json')
    .subscribe( (resp: InfoEquipo) => {
      this.cargada = true;
      this.equipo = resp;
      console.log(resp);
      //console.log( resp['twitter'] );
    });
  }
}
