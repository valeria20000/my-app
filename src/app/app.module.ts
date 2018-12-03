//Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { ClaseComponent } from './components/clase/clase.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
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
import { TareaComponent } from './components/tarea/tarea.component';

//Service
import { FrutaService } from './providers/fruta.service';
import { TareaService } from './providers/tarea.service';


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
    ComparadorComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule //peticiones Http
  ],
  providers: [
    FrutaService,
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
