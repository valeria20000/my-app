//Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';

import { ComponentsComponent } from './components/components.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrudFrutaComponent } from './components/crud-fruta/crud-fruta.component';
import { DetalleFrutaComponent } from './components/detalle-fruta/detalle-fruta.component';

//Pipes
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';


//Service
import { FrutaService } from './providers/fruta.service';
import { LoginComponent } from './components/login/login.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';

//Guards
import { BackofficeGuard } from './guards/backoffice.guard';
import { LoginService } from './providers/login.service';










//Providers o servicios

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    ComponentsComponent,
    FrutaCardComponent,
    ComparadorComponent,
    FormularioComponent,
    CrudFrutaComponent,
    DetalleFrutaComponent,
    LoginComponent,
    BackofficeComponent

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
    LoginService,
    BackofficeGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
