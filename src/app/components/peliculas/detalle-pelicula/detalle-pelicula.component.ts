import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css'],
	providers: [DatePipe]
})
export class DetallePeliculaComponent {
	@Input() pelicula: Pelicula | undefined;
}
