//Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './components/page404/page404.component';
import { ComponentsComponent } from './components/components.component';
import { CrudFrutaComponent } from './components/crud-fruta/crud-fruta.component';
import { DetalleFrutaComponent } from './components/detalle-fruta/detalle-fruta.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { LoginComponent } from './components/login/login.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';

//Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { FilterOfertaPipe } from './pipes/filter-oferta.pipe';

//Service
import { FrutaService } from './providers/fruta.service';
import { LoginService } from './providers/login.service';

//Guards
import { BackofficeGuard } from './guards/backoffice.guard';

//Directivas del proyecto
import { DestacarDirective } from './directives/destacar.directive';


//Providers o servicios

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    ComponentsComponent,
    FrutaCardComponent,
    ComparadorComponent,
    CrudFrutaComponent,
    DetalleFrutaComponent,
    LoginComponent,
    BackofficeComponent,
    FilterPipe,
    FilterOfertaPipe,
    DestacarDirective

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
