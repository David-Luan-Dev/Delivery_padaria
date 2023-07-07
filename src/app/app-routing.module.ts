import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DialogLocalizacaoComponent } from './header/dialog-localizacao/dialog-localizacao.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'dialog-localizacao',
  component: DialogLocalizacaoComponent,
},
{
  path: 'app-login',
  component: LoginComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
