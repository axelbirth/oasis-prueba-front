import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OasisModel } from '../models/oasis.model';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class OasisService {

  constructor(private http: HttpClient) { }

  // Obtener todos los oasis
  getOasis(): Observable<any> {
    return this.http.get(`${AppSettings.API_ENDPOINT}`).pipe(map((res: any) => {
      return res;
    }));
  }

  //Obtener oasis destacados
  getOasisDestacados(): Observable<any> {
    return this.http.get(`${AppSettings.API_ENDPOINT}destacados/${true}`).pipe(map((res: any) => {
      return res;
    }));
  }

  //Añadir Oasis
  saveOasis(oasis: OasisModel): Observable<OasisModel> {
    return this.http.post(`${AppSettings.API_ENDPOINT}`, oasis).pipe(map((res: any) => {
      return res;
    }));
  }

  //Obtener oasis por agua
  getOasisByAgua(agua: number): Observable<any> {
    return this.http.get(`${AppSettings.API_ENDPOINT}agua/${agua}`).pipe(map((res: any) => {
      return res;
    }));
  }

  //Obtener oasis por latitud y longitud
  getOasisByLatLong(latitud: number, longitud: number): Observable<any> {
    return this.http.get(`${AppSettings.API_ENDPOINT}lat/${latitud}/long/${longitud}`).pipe(map((res: any) => {
      return res;
    }));
  }

}
