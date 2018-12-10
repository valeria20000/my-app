import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes propios
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrudFrutaComponent } from './components/crud-fruta/crud-fruta.component';
import { DetalleFrutaComponent } from './components/detalle-fruta/detalle-fruta.component';
import { LoginComponent } from './components/login/login.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';
import { BackofficeGuard } from './guards/backoffice.guard';


const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'formulario', component: FormularioComponent},
{ path: 'crud', component: CrudFrutaComponent},
{ path: 'detalle/:id', component: DetalleFrutaComponent},
{ path: 'login', component: LoginComponent},
{ path: 'privado', component: BackofficeComponent, canActivate: [BackofficeGuard]},
{ path: 'comparador', component: ComparadorComponent},
{ path: '', redirectTo: '/comparador', pathMatch: 'full'},

{ path: '**', component: Page404Component}
//login


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
