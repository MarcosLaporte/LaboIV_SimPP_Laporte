import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
	ruta: string = 'https://restcountries.com/v3.1/all';
  constructor(private http: HttpClient) { }

	traerPaises() {
		return this.http.get(this.ruta);
	}
	
}
