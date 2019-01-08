import { IReceta } from "./receta.interface";
import { LogService } from "./log.service";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { resolve } from "url";

@Injectable({
	"providedIn": "root"
})
export class RecetaService implements Resolve<IReceta[]> {
	private recetas: Array<IReceta> = []

	//se ncesita definir un método resolve para Resolve

	resolve() : IReceta[] | Promise<IReceta[]>{
		const promesaIReceta : Promise<IReceta[]> = new Promise((res, rej)=>{
			setTimeout(()=>{
				res([
					{titulo: "comida1",
					preparacion: "preparacion 2",
					ingredientes: "ingredientes",
					tiempo: 123}
				])
			},2000)

			})

			return promesaIReceta
	}
//este resolve se conecta con la data de la ruta en app module linea 19
	constructor(private logService: LogService) { }

	agregarReceta(receta: IReceta) {
		this.recetas.push(receta)
		this.logService.escribir("nueva receta", "info")
	}

	listarRecetas() {
		this.logService.escribir("listar recetas", "error")
		return this.recetas
	}
}