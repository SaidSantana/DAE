import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './pages/inicio/inicio.component';
import {EducacionComponent} from './pages/educacion/educacion.component';
import {ContactoComponent} from './pages/contacto/contacto.component'
import {ProyectosComponent} from './pages/proyectos/proyectos.component';
import {HabilidadesComponent} from './pages/habilidades/habilidades.component'
import {NotfoundComponent} from './pages/notfound/notfound.component'

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
