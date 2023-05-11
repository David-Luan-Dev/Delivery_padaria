import { CadastroPadariasComponent } from './component/Pages/cadastro-padarias/cadastro-padarias.component';
import PadariasComponent from './component/Pages/padarias/padarias.component';
import { CestaComponent } from './component/Pages/carrinho/cesta/cesta.component';
import { TelaLoginComponent } from './component/Pages/tela-login/tela-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './component/Pages/pagina-principal/pagina-principal.component';
import { LayoutComponent } from './component/template/layout/layout.component';
import { EntregaGratisComponent } from './component/Pages/entrega-gratis/entrega-gratis.component';
import { PraRetirarComponent } from './component/Pages/pra-retirar/pra-retirar.component';
import { EntregaParceiraComponent } from './component/Pages/entrega-parceira/entrega-parceira.component';
import { CadastroCelularComponent } from './component/Pages/tela-login/cadastro-celular/cadastro-celular.component';
import { InformarEmailComponent } from './component/Pages/tela-login/informar-email/informar-email.component';
import { CodigoVerificadorCelularComponent } from './component/Pages/tela-login/cadastro-celular/codigo-verificador-celular/codigo-verificador-celular.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina-principal',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [],
    component: LayoutComponent,
    children: [
      {
        path: 'pagina-principal',
        component: PaginaPrincipalComponent,
      },
      {
        path: 'login',
        component: TelaLoginComponent,
      },
      {
        path: 'carrinho',
        component: CestaComponent,
      },
      {
        path: 'padarias',
        component: PadariasComponent,
      },
      {
        path: 'cadastro-padarias',
        component: CadastroPadariasComponent,
      },
      {
        path: 'cadastro-celular',
        component: CadastroCelularComponent,
      },
      {
        path: 'entrega-gratis',
        component: EntregaGratisComponent,
      },
      {
        path: 'pra-retirar',
        component: PraRetirarComponent,
      },
      {
        path: 'entrega-parceira',
        component: EntregaParceiraComponent,
      },
      {
        path: 'informar-email',
        component: InformarEmailComponent
      },
      {
        path: 'verificador-celular',
        component: CodigoVerificadorCelularComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
