import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DialogLocalizacaoComponent } from './header/dialog-localizacao/dialog-localizacao.component';
import { LoginComponent } from './pages/login/login.component';
import { InformeEmailComponent } from './pages/login/informe-email/informe-email.component';
import { InformeCelularComponent } from './pages/login/informe-celular/informe-celular.component';

const routes: Routes = [

{ path: 'home', component: HomeComponent },
{ path: 'dialog-localizacao', component: DialogLocalizacaoComponent},
{ path: 'app-login', component: LoginComponent},
{path: 'informar-email', component: InformeEmailComponent},
{path: 'informar-celular', component: InformeCelularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
