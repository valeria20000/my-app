import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { ClaseComponent } from './components/clase/clase.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ComponentsComponent } from './components/components.component';
import { PersonaPipe } from './pipes/persona.pipe';
 
//Pipes
import { VideojuegoPipe } from './pipes/videojuego.pipe';
import { EjercicioFrutaComponent } from './components/ejercicio-fruta/ejercicio-fruta.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';

//Providers o servicios

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    ClaseComponent,
    FlujoInformacionComponent,
    HomeComponent,
    Page404Component,
    VideojuegoDetalleComponent,
    PipeComponent,
    ComponentsComponent,
    VideojuegoPipe,
    PersonaPipe,
    EjercicioFrutaComponent,
    FrutaCardComponent,
    ComparadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
