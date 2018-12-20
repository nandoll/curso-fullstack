import { Component, OnInit } from '@angular/core';
import { IPelis } from '../pelis.interface';
import { PelisServiceService } from '../pelis-service.service';

@Component({
  selector: 'app-pelis-form',
  templateUrl: './pelis-form.component.html',
  styleUrls: ['./pelis-form.component.scss']
})
export class PelisFormComponent implements OnInit {

  constructor(private movies: PelisServiceService) { }

  movie: Array<IPelis> = []

  addMovie(movie) {
    this.movies.addMovie(movie)
  }

  ngOnInit() {
  }

}
