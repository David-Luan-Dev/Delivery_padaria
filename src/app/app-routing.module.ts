import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './component/Pages/pagina-principal/pagina-principal.component';
import { LayoutComponent } from './component/template/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina-principal',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [],
    component: LayoutComponent,
    children: [
      {
        path: 'pagina-principal',
        component: PaginaPrincipalComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
