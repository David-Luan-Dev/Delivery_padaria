import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DialogLocalizacaoComponent } from './header/dialog-localizacao/dialog-localizacao.component';
import { LoginComponent } from './pages/login/login.component';
import { InformeEmailComponent } from './pages/login-pai/login-tela-um/informe-email/informe-email.component';
import { InformeCelularComponent } from './pages/login-pai/login-tela-um/informe-celular/informe-celular.component';
import { LoginPaiComponent } from './pages/login-pai/login-pai.component';

const routes: Routes = [

{ path: 'home', component: HomeComponent },
{ path: 'dialog-localizacao', component: DialogLocalizacaoComponent},
{ path: 'app-login', component: LoginPaiComponent},
{path: 'informar-email', component: InformeEmailComponent},
{path: 'informar-celular', component: InformeCelularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
