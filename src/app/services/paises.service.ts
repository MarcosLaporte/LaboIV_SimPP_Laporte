import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
	rutaInicial: string = 'https://restcountries.com/v3.1/';
  constructor(private http: HttpClient) { }

	traerPaises() {
		return this.http.get(this.rutaInicial + 'all');
	}
	
	traerPais(codigo: string) {
		return this.http.get(this.rutaInicial + 'alpha/' + codigo);
	}
}
