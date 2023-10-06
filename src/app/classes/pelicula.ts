export type genero = 'terror' | 'comedia' | 'amor' | 'otro';
export class Pelicula {
	id: string;
	nombre: string;
	tipo: genero;
	estreno: number;
	audiencia: number;
	fotoSrc: string;

	constructor(id: string, nombre: string, tipo: genero, estreno: number, audiencia: number, fotoSrc: string) {
		this.id = id;
		this.nombre = nombre;
		this.tipo = tipo;
		this.estreno = estreno;
		this.audiencia = audiencia;
		this.fotoSrc = fotoSrc;
	}

	
}
