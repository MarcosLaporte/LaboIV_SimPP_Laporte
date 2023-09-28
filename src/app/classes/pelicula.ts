export type genero = 'terror' | 'comedia' | 'amor' | 'otros';
export class Pelicula {
	protected id: number;
	protected nombre: string;
	protected tipo: genero;
	protected estreno: string;
	protected audiencia: number;
	protected fotoSrc: string;

	constructor(id: number, nombre: string, tipo: genero, estreno: string, audiencia: number, fotoSrc: string) {
		this.id = id;
		this.nombre = nombre;
		this.tipo = tipo;
		this.estreno = estreno;
		this.audiencia = audiencia;
		this.fotoSrc = fotoSrc;
	}

	
}
