import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { ICurso } from './cursos.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'appHttp';
  ICursos : ICurso[] = []

  constructor(private cursos: ConfigService){}

  ngOnInit(){
    this.cursos.list()
    .subscribe(
      (data:ICurso[]) => this.ICursos = data
    )
  }
}
