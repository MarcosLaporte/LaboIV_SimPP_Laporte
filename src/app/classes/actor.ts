export class Actor {
	id: string;
	nombre: string;
	apellido: string;
	email: string;
	pais: string;

	constructor(id: string, nombre: string, apellido: string, email: string, pais: string) {
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.pais = pais;
	}
}
