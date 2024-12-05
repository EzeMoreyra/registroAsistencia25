import { Routes } from '@angular/router';
import { LoginComponent } from './autenticacion/login/login.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { FormularioComponent } from './registro-clases/formulario/formulario.component';
import { ListadoComponent } from './registro-clases/listado/listado.component';
import { GestionUsuariosComponent } from './administrador/gestion-usuarios/gestion-usuarios.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'autenticacion/login', component: LoginComponent },
  { path: 'autenticacion/registro', component: RegistroComponent },
  { path: 'registro-clases/formulario', component: FormularioComponent },
  { path: 'registro-clases/listado', component: ListadoComponent },
  { path: 'administrador/gestion-usuarios', component: GestionUsuariosComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'autenticacion/login', pathMatch: 'full' }, // Redirección inicial
  { path: '**', redirectTo: 'autenticacion/login' } // Ruta por defecto
];
