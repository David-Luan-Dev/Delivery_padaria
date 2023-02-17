import { loginModel } from 'src/models/loginModel';
import { Router, RouterModule } from '@angular/router';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

import { Component, OnInit, NgModule } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
})
export class TelaLoginComponent implements OnInit {
  value2!: string;

display: boolean = false;
displayBasic: boolean = false


  loginForm!: FormGroup;
  value = ``

  constructor() { }


  ngOnInit(): void { }



  submit() {
    console.log("Enviado com sucesso!")
  }
  showDialog() {
    this.display = true;
    this.displayBasic = true;
}
}
