
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';



// components
import { AppComponent } from 'src/app/app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './side-bar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './../../Pages/login/login.component';

const material = [
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  FormsModule,
  MatInputModule,
  MatDividerModule,
  FlexLayoutModule,
  MatMenuModule
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    material
  ],
  exports: [],
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    LoginComponent
  ],
  providers: [],
})
export class LayoutModule { }
