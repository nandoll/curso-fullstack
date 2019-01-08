import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelas-listado',
  templateUrl: './pelas-listado.component.html',
  styleUrls: ['./pelas-listado.component.scss']
})
export class PelasListadoComponent implements OnInit {

  constructor(private activatedRouter : ActivatedRoute) { }

  ngOnInit() {
	  console.log(this.activatedRouter.snapshot.data.datosPelas)
  }

}
