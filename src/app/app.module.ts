import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/componentes-header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { DialogLocalizacaoComponent } from './components/componentes-header/header/dialog-localizacao/dialog-localizacao.component'; 
import { DialogLocalizacaoTelaCincoComponent } from './components/componentes-header/header-tela-cinco/dialog-localizacao/dialog-localizacao-tela-cinco.component'; 
import { DialogLocalizacaoTelaQuatroComponent } from './components/componentes-header/header-tela-quatro/dialog-localizacao-tela-quatro/dialog-localizacao-tela-quatro.component'; 
import { LoginComponent } from './pages/login/login.component';
import { InformeEmailComponent } from './pages/login-pai/login-tela-um/informe-email/informe-email.component';
import { InformeCelularComponent } from './pages/login-pai/login-tela-um/informe-celular/informe-celular.component';
import { HeaderTelaUmComponent } from './components/componentes-header/header-tela-um/header-tela-um.component'; 
import { HeaderTelaDoisComponent } from './components/componentes-header/header-tela-dois/header-tela-dois.component'; 
import { HeaderTelaTresComponent } from './components/componentes-header/header-tela-tres/header-tela-tres.component'; 
import { HeaderTelaQuatroComponent } from './components/componentes-header/header-tela-quatro/header-tela-quatro.component';
import { HeaderTelaCincoComponent } from './components/componentes-header/header-tela-cinco/header-tela-cinco.component';
import { HeaderTelaSeisComponent } from './components/componentes-header/header-tela-seis/header-tela-seis.component';
import { DialogLocalizacaoTelaSeisComponent } from './components/componentes-header/header-tela-seis/dialog-localizacao-tela-seis/dialog-localizacao-tela-seis.component'; 
import { DialogLocalizacaoTelaTresComponent } from './components/componentes-header/header-tela-tres/dialog-localizacao-tela-tres/dialog-localizacao-tela-tres.component'; 
import { DialogLocalizacaoTelaDoisComponent } from './components/componentes-header/header-tela-dois/dialog-localizacao-tela-dois/dialog-localizacao-tela-dois.component'; 
import { DialogLocalizacaoTelaUmComponent } from './components/componentes-header/header-tela-um/dialog-localizacao-tela-um/dialog-localizacao-tela-um.component'; 
import { LoginPaiComponent } from './pages/login-pai/login-pai.component';
import { LoginTelaUmComponent } from './pages/login-pai/login-tela-um/login-tela-um.component';
import { LoginTelaDoisComponent } from './pages/login-pai/login-tela-dois/login-tela-dois.component';
import { LoginTelaTresComponent } from './pages/login-pai/login-tela-tres/login-tela-tres.component';
import { LoginTelaQuatroComponent } from './pages/login-pai/login-tela-quatro/login-tela-quatro.component';
import { LoginTelaCincoComponent } from './pages/login-pai/login-tela-cinco/login-tela-cinco.component';
import { LoginTelaSeisComponent } from './pages/login-pai/login-tela-seis/login-tela-seis.component';
import { InformCodigoCelularComponent } from './pages/login-pai/login-tela-um/inform-codigo-celular/inform-codigo-celular.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask, IConfig } from 'ngx-mask';
import { InformeCodigoEmailComponent } from './pages/login-pai/login-tela-um/informe-codigo-email/informe-codigo-email.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component'; 
export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;
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
    InformCodigoCelularComponent,
    LoginPaiComponent,
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
    LoginTelaUmComponent,
    LoginTelaDoisComponent,
    LoginTelaTresComponent,
    LoginTelaQuatroComponent,
    LoginTelaCincoComponent,
    LoginTelaSeisComponent,
    InformeCodigoEmailComponent,
    PesquisaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    MaterialModule

  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
