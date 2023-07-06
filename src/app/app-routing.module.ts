
import { CestaComponent } from './component/Pages/carrinho/cesta/cesta.component';
import { TelaLoginComponent } from './component/Pages/tela-login/tela-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './component/Pages/pagina-principal/pagina-principal.component';
import { LayoutComponent } from './component/template/layout/layout.component';
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
        path: 'cadastro-celular',
        component: CadastroCelularComponent,
      },
      {
        path: 'verificador-celular',
        component: CodigoVerificadorCelularComponent
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
