import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes, listAll } from '@angular/fire/storage';


@Injectable({
	providedIn: 'root'
})
export class StorageService {

	constructor(private storage: Storage) { }

	async subirImagen(imagen: File, path: string) {
		const imgRef = ref(this.storage, `images/${path}`);
		let url: string | undefined;

		await uploadBytes(imgRef, imagen)
		.then(async () => {
			url = await getDownloadURL(imgRef);
		})
		.catch((err) => {
			console.log(err);
			return null;
		});

		return url;
	}

	traerImagenes(path: string) {
		let urlArray: Array<string> = [];
		const imgRef = ref(this.storage, `images/${path}`);
		listAll(imgRef)
			.then(async (res) => {
				for (let item of res.items) {
					const url = await getDownloadURL(item);
					urlArray.push(url);
				}
			});

		return urlArray;
	}
}
