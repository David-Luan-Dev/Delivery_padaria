import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { DialogLocalizacaoComponent } from './header/dialog-localizacao/dialog-localizacao.component';
import { LoginComponent } from './pages/login/login.component';
import { InformeEmailComponent } from './pages/login/informe-email/informe-email.component';
import { InformeCelularComponent } from './pages/login/informe-celular/informe-celular.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DialogLocalizacaoComponent,
    LoginComponent,
    InformeEmailComponent,
    InformeCelularComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
