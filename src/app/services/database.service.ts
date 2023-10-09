import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Actor } from '../classes/actor';
import { Pelicula } from '../classes/pelicula';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private firestore: Firestore) {}

	traerDatos(dbPath: string): Array<any> {
		const col = collection(this.firestore, dbPath);
		let arrAux: Array<any> = [];
		const obs = collectionData(col);

		obs.subscribe((res) => {
			res.forEach((data) => {
				arrAux.push(data);
			});
		});

		return arrAux;
	}

	agregarActor(actor: Actor): boolean {
		const col = collection(this.firestore, 'actores');
		const nuevoDoc = doc(col);

		try {
			setDoc(nuevoDoc, {
				id: nuevoDoc.id,
				nombre: actor.nombre,
				apellido: actor.apellido,
				email: actor.email,
				pais: actor.pais
			});
		} catch (error) {
			console.log(error);
			return false;
		}

		return true;
	}
	
	agregarPelicula(titulo: string, genero: string, estreno: number, audiencia: number, elenco: Array<Actor>, fotoSrc: string) {
		const col = collection(this.firestore, 'pelis');
		const nuevoDoc = doc(col);

		try {
			setDoc(nuevoDoc, {
				id: nuevoDoc.id,
				titulo: titulo,
				genero: genero,
				estreno: estreno,
				audiencia: audiencia,
				elenco: elenco,
				fotoSrc: fotoSrc,
			});
		} catch (error) {
			console.log(error);
			return null;
		}

		return nuevoDoc.id;
	}

	
}
