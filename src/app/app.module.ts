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
import { LoginComponent } from './pages/login/login.component';
import { InformeEmailComponent } from './pages/login/informe-email/informe-email.component';
import { InformeCelularComponent } from './pages/login/informe-celular/informe-celular.component';
import { HeaderTelaUmComponent } from './header-tela-um/header-tela-um.component';
import { HeaderTelaDoisComponent } from './header-tela-dois/header-tela-dois.component';
import { HeaderTelaTresComponent } from './header-tela-tres/header-tela-tres.component';
import { HeaderTelaQuatroComponent } from './header-tela-quatro/header-tela-quatro.component';
import { HeaderTelaCincoComponent } from './header-tela-cinco/header-tela-cinco.component';
import { HeaderTelaSeisComponent } from './header-tela-seis/header-tela-seis.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DialogLocalizacaoComponent,
    LoginComponent,
    InformeEmailComponent,
    InformeCelularComponent,
    HeaderTelaUmComponent,
    HeaderTelaDoisComponent,
    HeaderTelaTresComponent,
    HeaderTelaQuatroComponent,
    HeaderTelaCincoComponent,
    HeaderTelaSeisComponent,

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
