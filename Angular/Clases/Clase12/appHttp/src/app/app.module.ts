import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import { AppInterceptor } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    //aca se va a agregar el interceptor
    // pero para el intercpetor le vasmos a poner un alias
    // este alias se llama provide y sera simulado con htt_interceptors
    {provide : HTTP_INTERCEPTORS, useClass : AppInterceptor, multi : true }
    //en este seugnod parmetro le vamos a decir que suplante el http interceptor con nuestra clase

    //ademas existe un tercerpametro que no es obligatorio

    // se llama multi:true
    // est emulti habilita que se puedan agregar mucho mas interceptores

    // y cada interceptor debe tener multi:true


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
