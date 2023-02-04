import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';

import {DialogModule} from 'primeng/dialog';

import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './component/Pages/pagina-principal/pagina-principal.component';
import { TelaLoginComponent } from './component/Pages/tela-login/tela-login.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './component/template/layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MatDividerModule } from '@angular/material/divider';
import { PadariasComponent } from './component/Pages/padarias/padarias.component';
import { CadastroPadariasComponent } from './component/Pages/cadastro-padarias/cadastro-padarias.component';
import { CadastroCelularComponent } from './component/Pages/cadastro/cadastro-celular/cadastro-celular.component';


const layoutPrimeng = [
  InputTextModule,
  ButtonModule
]


@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    TelaLoginComponent,
    PadariasComponent,
    CadastroPadariasComponent,
    CadastroCelularComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    NgbModule,
    layoutPrimeng,
    ReactiveFormsModule,
    MatDividerModule,
    PasswordModule,
    InputMaskModule,
    MatSidenavModule,
    DialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
