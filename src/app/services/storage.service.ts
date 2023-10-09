import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';


@Injectable({
	providedIn: 'root'
})
export class StorageService {

	constructor(private storage: Storage) { }

	subirImagen(imagen: File, path: string) {
		const imgRef = ref(this.storage, `images/${path}`);

		uploadBytes(imgRef, imagen)
			.catch(() => { return false });

		return true;
	}
}
