import { Injectable } from '@angular/core';
import { IPelis } from './pelis.interface';

@Injectable({
  providedIn: 'root'
})
export class PelisServiceService {

  constructor() { }
  // Importante asignarele valor a movies
  private movies: Array<IPelis> = []

  addMovie(pelis: IPelis) {
    this.movies.push(pelis)
    console.log(pelis)
    console.log(this.movies)

  }

  showMovies() {
    return this.movies
  }
}