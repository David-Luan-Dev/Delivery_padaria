import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { CheckboxModule } from 'primeng/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';




import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './component/Pages/pagina-principal/pagina-principal.component';
import { TelaLoginComponent } from './component/Pages/tela-login/tela-login.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from './component/template/layout/layout.module';
import { MatDividerModule } from '@angular/material/divider';
import PadariasComponent from './component/Pages/padarias/padarias.component';
import { CadastroPadariasComponent } from './component/Pages/cadastro-padarias/cadastro-padarias.component';
import { CadastroCelularComponent } from './component/Pages/cadastro/cadastro-celular/cadastro-celular.component';


const layoutPrimeng = [InputTextModule, ButtonModule];

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
    DialogModule,
    DockModule,
    MenubarModule,
    CheckboxModule,
    MatDialogModule,
    MatButtonModule

  ],
  providers: [ {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent],

})
export class AppModule { }
