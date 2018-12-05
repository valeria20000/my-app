import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes propios
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ClaseComponent } from './components/clase/clase.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { EjercicioFrutaComponent } from './components/ejercicio-fruta/ejercicio-fruta.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrudFrutaComponent } from './components/crud-fruta/crud-fruta.component';
import { DetalleFrutaComponent } from './components/detalle-fruta/detalle-fruta.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'fruta', component: FrutaComponent},
{ path: 'clase', component: ClaseComponent},
{ path: 'pipe', component: PipeComponent},
{ path: 'tareas', component: TareaComponent},
{ path: 'formulario', component: FormularioComponent},
{ path: 'crud', component: CrudFrutaComponent},
{ path: 'detalle/:id', component: DetalleFrutaComponent},
{ path: 'comparador', component: ComparadorComponent},
{ path: 'array', component: EjercicioFrutaComponent},
{ path: 'videojuego-detalle', component: VideojuegoDetalleComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'flujo', component: FlujoInformacionComponent},
{ path: '**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
