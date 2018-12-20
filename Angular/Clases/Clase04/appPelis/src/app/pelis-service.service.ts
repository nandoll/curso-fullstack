import { Injectable } from '@angular/core';
import { IPelis } from './pelis.interface';

@Injectable({
  providedIn: 'root'
})
export class PelisServiceService {

  constructor() { }

  private movies: Array<IPelis>

  addMovie(movie: IPelis) {
    this.movies.push(movie)
  }

  showMovies() {
    return this.movies
  }

}
