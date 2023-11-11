import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OasisModel } from '../models/oasis.model';

@Injectable({
  providedIn: 'root'
})
export class OasisService {
  URL = 'https://oasis-prueba-backend.onrender.com/api/v1/oasis/';

  constructor(private http: HttpClient) { }

  // Obtener todos los oasis
  getOasis(): Observable<any> {
    return this.http.get(this.URL).pipe(map((res: any) => {
      return res;
    }));
  }

  //Obtener oasis destacados
  getOasisDestacados(): Observable<any> {
    return this.http.get(this.URL + 'destacados/' + true).pipe(map((res: any) => {
      return res;
    }));
  }

  //Añadir Oasis
  saveOasis(oasis: OasisModel): Observable<OasisModel> {
    return this.http.post(this.URL, oasis).pipe(map((res: any) => {
      return res;
    }));
  }

  //Obtener oasis por agua
  getOasisByAgua(agua: number): Observable<any> {
    return this.http.get(this.URL + 'agua/' + agua).pipe(map((res: any) => {
      return res;
    }));
  }

  //Obtener oasis por latitud y longitud
  getOasisByLatLong(latitud: number, longitud: number): Observable<any> {
    return this.http.get(this.URL + 'lat/' + latitud + '/long/' + longitud).pipe(map((res: any) => {
      return res;
    }));
  }

}
