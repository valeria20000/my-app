//Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrudFrutaComponent } from './components/crud-fruta/crud-fruta.component';
import { DetalleFrutaComponent } from './components/detalle-fruta/detalle-fruta.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';
import { LoginComponent } from './components/login/login.component';
 
//Pipes
import { VideojuegoPipe } from './pipes/videojuego.pipe';
import { EjercicioFrutaComponent } from './components/ejercicio-fruta/ejercicio-fruta.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { TareasPipe } from './pipes/tareas.pipe';

//Service
import { FrutaService } from './providers/fruta.service';
import { TareaService } from './providers/tarea.service';
import { LoginService } from './providers/login.service';


//Guards
import { BackofficeGuard } from './guards/backoffice.guard';





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
    TareaComponent,
    TareasPipe,
    FormularioComponent,
    CrudFrutaComponent,
    DetalleFrutaComponent,
    BackofficeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, //formularios reactivos
    HttpClientModule//peticiones Http
  
  ],
  providers: [
    FrutaService,
    TareaService,
    LoginService,
    BackofficeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
