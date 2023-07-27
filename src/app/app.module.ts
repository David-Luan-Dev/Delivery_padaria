import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { DialogLocalizacaoComponent } from './header/dialog-localizacao/dialog-localizacao.component';
import { DialogLocalizacaoTelaCincoComponent } from './header-tela-cinco/dialog-localizacao/dialog-localizacao-tela-cinco.component';
import { DialogLocalizacaoTelaQuatroComponent } from './header-tela-quatro/dialog-localizacao-tela-quatro/dialog-localizacao-tela-quatro.component';
import { LoginComponent } from './pages/login/login.component';
import { InformeEmailComponent } from './pages/login-pai/login-tela-um/informe-email/informe-email.component';
import { InformeCelularComponent } from './pages/login-pai/login-tela-um/informe-celular/informe-celular.component';
import { HeaderTelaUmComponent } from './header-tela-um/header-tela-um.component';
import { HeaderTelaDoisComponent } from './header-tela-dois/header-tela-dois.component';
import { HeaderTelaTresComponent } from './header-tela-tres/header-tela-tres.component';
import { HeaderTelaQuatroComponent } from './header-tela-quatro/header-tela-quatro.component';
import { HeaderTelaCincoComponent } from './header-tela-cinco/header-tela-cinco.component';
import { HeaderTelaSeisComponent } from './header-tela-seis/header-tela-seis.component';
import { DialogLocalizacaoTelaSeisComponent } from './header-tela-seis/dialog-localizacao-tela-seis/dialog-localizacao-tela-seis.component';
import { DialogLocalizacaoTelaTresComponent } from './header-tela-tres/dialog-localizacao-tela-tres/dialog-localizacao-tela-tres.component';
import { DialogLocalizacaoTelaDoisComponent } from './header-tela-dois/dialog-localizacao-tela-dois/dialog-localizacao-tela-dois.component';
import { DialogLocalizacaoTelaUmComponent } from './header-tela-um/dialog-localizacao-tela-um/dialog-localizacao-tela-um.component';
import { LoginPaiComponent } from './pages/login-pai/login-pai.component';
import { LoginTelaUmComponent } from './pages/login-pai/login-tela-um/login-tela-um.component';
import { LoginTelaDoisComponent } from './pages/login-pai/login-tela-dois/login-tela-dois.component';
import { LoginTelaTresComponent } from './pages/login-pai/login-tela-tres/login-tela-tres.component';
import { LoginTelaQuatroComponent } from './pages/login-pai/login-tela-quatro/login-tela-quatro.component';
import { LoginTelaCincoComponent } from './pages/login-pai/login-tela-cinco/login-tela-cinco.component';
import { LoginTelaSeisComponent } from './pages/login-pai/login-tela-seis/login-tela-seis.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DialogLocalizacaoComponent,
    DialogLocalizacaoTelaQuatroComponent,
    DialogLocalizacaoTelaCincoComponent,
    LoginComponent,
    InformeEmailComponent,
    InformeCelularComponent,
    HeaderTelaUmComponent,
    HeaderTelaDoisComponent,
    HeaderTelaTresComponent,
    HeaderTelaQuatroComponent,
    HeaderTelaCincoComponent,
    HeaderTelaSeisComponent,
    DialogLocalizacaoTelaSeisComponent,
    DialogLocalizacaoTelaTresComponent,
    DialogLocalizacaoTelaDoisComponent,
    DialogLocalizacaoTelaUmComponent,
    LoginPaiComponent,
    LoginTelaUmComponent,
    LoginTelaDoisComponent,
    LoginTelaTresComponent,
    LoginTelaQuatroComponent,
    LoginTelaCincoComponent,
    LoginTelaSeisComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
