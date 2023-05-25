//Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormGroup } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from './component/template/layout/layout.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

//Componentes
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './component/Pages/pagina-principal/pagina-principal.component';
import { TelaLoginComponent } from './component/Pages/tela-login/tela-login.component';
import PadariasComponent from './component/Pages/padarias/padarias.component';
import { CadastroPadariasComponent } from './component/Pages/cadastro-padarias/cadastro-padarias.component';
import { CadastroCelularComponent } from './component/Pages/tela-login/cadastro-celular/cadastro-celular.component';
import { FromPagamentoComponent } from './component/Pages/pagina-principal/from-pagamento/from-pagamento.component';
import { DialogDistanciaComponent } from './component/Pages/pagina-principal/dialog-distancia/dialog-distancia.component';
import { EntregaGratisComponent } from './component/Pages/entrega-gratis/entrega-gratis.component';
import { PraRetirarComponent } from './component/Pages/pra-retirar/pra-retirar.component';
import { EntregaParceiraComponent } from './component/Pages/entrega-parceira/entrega-parceira.component';
import { InformarEmailComponent } from './component/Pages/tela-login/informar-email/informar-email.component';
import { OrdenarComponent } from './component/Pages/pagina-principal/ordenar-modal/ordenar.component';
import { CodigoVerificadorCelularComponent } from './component/Pages/tela-login/cadastro-celular/codigo-verificador-celular/codigo-verificador-celular.component';
import { CodigoVerificadorEmailComponent } from './component/Pages/tela-login/informar-email/codigo-verificador-email/codigo-verificador-email.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';


const layoutPrimeng = [InputTextModule, ButtonModule];

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    TelaLoginComponent,
    PadariasComponent,
    CadastroPadariasComponent,
    CadastroCelularComponent,
    OrdenarComponent,
    FromPagamentoComponent,
    DialogDistanciaComponent,
    EntregaGratisComponent,
    PraRetirarComponent,
    EntregaParceiraComponent,
    InformarEmailComponent,
    CodigoVerificadorCelularComponent,
    CodigoVerificadorEmailComponent,


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
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCardModule,


  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
    },
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
