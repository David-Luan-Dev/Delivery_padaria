import { loginModel } from 'src/models/loginModel';
import { Router, RouterModule } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InformarEmailComponent } from './informar-email/informar-email.component';
import { CadastroCelularComponent } from './cadastro-celular/cadastro-celular.component';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
})
export class TelaLoginComponent implements OnInit {
  FormGroup!: FormGroup;
  value2!: string;

  display: boolean = false;
  displayBasic: boolean = false;

  loginForm!: FormGroup;
  value = ``;

  constructor(public formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {}

  submit() {
    console.log('Enviado com sucesso!');
  }
  showDialog() {
    this.display = true;
    this.displayBasic = true;
  }
  //Dialog material informar email
  public informarEmailDialog() {
    this.dialog.open(InformarEmailComponent, {
      width: '450px',
      height: '300px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
    public informarCelularlDialog() {
      this.dialog.open(CadastroCelularComponent, {
        width: '500px',
        height: '325px',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
      });
    }
}
