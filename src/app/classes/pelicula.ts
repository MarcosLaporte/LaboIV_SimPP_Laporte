import { Timestamp } from "@angular/fire/firestore";
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
	estreno: Date;
	audiencia: number;
	actor: Actor;
	fotoUrl: string;

	constructor(id: string, titulo: string, genero: string, estreno: Date | Timestamp, audiencia: number, actor: Actor, fotoUrl: string) {
		this.id = id;
		this.titulo = titulo;
		this.genero = genero;
		this.estreno = estreno instanceof Timestamp ? estreno.toDate() : estreno;
		this.audiencia = audiencia;
		this.actor = actor;
		this.fotoUrl = fotoUrl;
	}


}
