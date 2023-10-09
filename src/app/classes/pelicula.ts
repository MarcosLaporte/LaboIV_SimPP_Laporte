import { Actor } from "./actor";

export const generos: { [key: string]: string } = {
	["AC"]: "acción",
	["AV"]: "aventura",
	["BE"]: "bélico",
	["CA"]: "catástrofe",
	["CF"]: "ciencia ficción",
	["CO"]: "comedia",
	["DO"]: "documental",
	["DR"]: "drama",
	["FA"]: "fantasía",
	["MU"]: "musical",
	["SU"]: "suspenso",
	["TE"]: "terror",
	["OT"]: "otro"
};

export class Pelicula {
	id: string;
	titulo: string;
	genero: string;
	estreno: number;
	audiencia: number;
	elenco: Array<Actor>;
	fotoSrc: string;

	constructor(id: string, titulo: string, genero: string, estreno: number, audiencia: number, elenco: Array<Actor>, fotoSrc: string) {
		this.id = id;
		this.titulo = titulo;
		this.genero = genero;
		this.estreno = estreno;
		this.audiencia = audiencia;
		this.elenco = elenco;
		this.fotoSrc = fotoSrc;
	}


}
