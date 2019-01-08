import { Injectable } from '@angular/core';
import { PelasIMisPelas } from './pelas-imis-pelas';
import { Resolve } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class PelasAuthService implements Resolve<any> {
	
	constructor() { }

	resolve() {
		const pelasList = new Promise( 
			(res, rej) => {
				setTimeout(()=>{
					res({
						status : 200,
						results : [
							{
								title : "La naranja mecánica",
								year : "1965",
								diretor : "Stanley Kubrick",
								genre : "Thriller, pyschological, cult"
		
							},
							{
								title : "Rambo IV",
								year : "1976",
								diretor : "Silvestre Stalone",
								genre : "Drama, sports, box"
		
							},
							{
								title : "Volver al futuro",
								year : "1985",
								diretor : "Un Director",
								genre : "Thriller, pyschological, cult"
		
							}
						]

					})
				}, 2999)
			})
		const pelasLocales = new Promise(
			(res, rej) => {

				setTimeout(()=>{

					res({
						status : 200,
						results : [
							{
								district : "Los olivos"
							},
							{
								district : "Surco"
							},
							{
								district : "La Marina"
							}
						]

					})
				}, 3000)
			}
		)

		return Promise.all([pelasList, pelasLocales])
	}

	login(): Promise<any> {
		const login = new Promise(
			(res, rej) => {
				setTimeout(
					() => {
						res({
							status: 200,
							results: {
								name: "Angular",
								auth: "BASNDASDASDASDBAB123B1I23B",
								refreshAuth: "asdasdoim120d123123"

							}
						})
					}
					, 2000)
			}
		)

		return login
	}


}
