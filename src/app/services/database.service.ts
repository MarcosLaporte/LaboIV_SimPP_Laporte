import { Injectable } from '@angular/core';
import { DocumentData, DocumentReference, Firestore, collection, collectionData, doc, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Actor } from '../classes/actor';
import { Pelicula } from '../classes/pelicula';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {
	constructor(private firestore: Firestore) { }

	async traerDatos<T>(dbPath: string): Promise<Array<T>> {
		const col = collection(this.firestore, dbPath);

		const querySnapshot = await getDocs(col);
		const arrAux: Array<T> = [];

		querySnapshot.forEach((doc) => {
			arrAux.push(doc.data() as T);
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

	agregarPelicula(titulo: string, genero: string, estreno: Date, audiencia: number, actor: Actor) {
		const col = collection(this.firestore, 'pelis');
		const nuevoDoc = doc(col);
		const actorDoc = doc(this.firestore, 'actores', actor.id);

		try {
			setDoc(nuevoDoc, {
				id: nuevoDoc.id,
				titulo: titulo,
				genero: genero,
				estreno: estreno,
				audiencia: audiencia,
				actor: actorDoc,
			});
		} catch (error) {
			console.log(error);
			return null;
		}

		return nuevoDoc;
	}

	agregarFotoUrl(docRef: DocumentReference, imgUrl: string) {
		try {
			updateDoc(docRef, {
				fotoUrl: imgUrl
			});
		} catch (error) {
			console.log(error);
			return false;
		}

		return true;
	}

	async traerObjPorRef<T>(docRef: DocumentReference<DocumentData>) {
		const docSnap = await getDoc(docRef);
		return docSnap.data() as T;
	}
}
