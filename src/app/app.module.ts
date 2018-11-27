import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { ClaseComponent } from './components/clase/clase.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    ClaseComponent,
    FlujoInformacionComponent,
    HomeComponent,
    Page404Component
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
