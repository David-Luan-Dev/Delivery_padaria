import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {PasswordModule} from 'primeng/password';


import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './component/Pages/pagina-principal/pagina-principal.component';
import { TelaLoginComponent } from './component/Pages/tela-login/tela-login.component';


import { RouterModule } from '@angular/router';
import { LayoutModule } from './component/template/layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MatDividerModule } from '@angular/material/divider';

const layoutPrimeng = [
  InputTextModule,
  ButtonModule
]


@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    TelaLoginComponent
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
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
