import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date = Date();
  name = "Ola k ase "
 searchText = "Narra"
  books = [
	  {
		  author: "Dan Brown",
		  title: "El código Da Vinci",
		  sinposis : "La mayor conspiración de los últimos 2000 años está a punto de ser desvelada.Robert Langdon recibe una llamada en mitad de la noche: el conservador del museo del Louvre ha sido asesinado en extrañas circunstancias y junto a su cadáver ha aparecido un desconcertante mensaje cifrado.",
		  year: 2000
	  },
	  {
		author: "H.G Wells",
		title: "La guerra de los mundos",
		sinposis : "Publicado en 1898. La Guerra de los Mundos es una de las piezas fundacionales de la ciencia ficción, en donde se crea el arquetipo por excelencia de este género: la visita de seres de otros mundos con intenciones hostiles, armados con pistolas de rayos y montados en estructuras biomecánicas. H. G. Wells describe en esta novela la invasión de un ejército de marcianos y los vanos esfuerzos desplegados por los humanos para impedirla. La humanidad, con toda su soberbia y falsa seguridad se ve obligada a replantearse el lugar en el universo.",
		year: 1898
	},
	{
		author: "Miguel Unamuno",
		title: "Niebla",
		sinposis : "Niebla fue publicada en 1914 por Miguel de Unamuno, quizás el más destacado de los escritores españoles del s. XX y el principal referente de la llamada generación del 98. Con Niebla nace un nuevo género, la novela existencial. Augusto Pérez, el protagonista, se rebela frente a su autor, violando la frontera que separaba la realidad de la ficción, poniendo en crisis su antiguo y venerado origen.",
		year: 1974
	},
	{
		author: "HF Fitzgerald",
		title: "El gran Gatsby",
		sinposis : "El gran Gatsby, considerada por la crítica como la gran novela norteamericana del siglo XX, se sumerge en lo más profundo de los locos años 20, época marcada por la recuperación económica tras la Primera Guerra Mundial y la Ley Seca. Jay Gatsby, un enigmático millonario que se ha hecho a sí mismo, icono del sueño americano, construye en torno a su figura un mundo frívolo y lujoso, a través del cual pretende recuperar un amor perdido. Pero el vértigo de aquellos años, el vano resplandor de sus apariencias, acabará muy pronto...",
		year: 1945
	}
  ]

}
