import { Component, OnInit } from '@angular/core';
import { IPelis } from '../pelis.interface';
import { PelisServiceService } from '../pelis-service.service';

@Component({
  selector: 'app-pelis-list',
  templateUrl: './pelis-list.component.html',
  styleUrls: ['./pelis-list.component.scss']
})
export class PelisListComponent implements OnInit {

  movie: Array<IPelis> = []
  constructor(private movies: PelisServiceService) { }

  ngOnInit() {
    this.movie = this.movies.showMovies()
  }

}
