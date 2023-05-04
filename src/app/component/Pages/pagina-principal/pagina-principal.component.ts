import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrdenarComponent } from './ordenar-modal/ordenar.component';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss'],
})
export class PaginaPrincipalComponent implements OnInit {
  FormGroup!: FormGroup;
  value = ``;
  value2!: string;
  displaydialog!: boolean;
  displayBasic: boolean = false;
  displayBasicVale: boolean = false;
  checkedVrRefeicao: boolean = true;
  checkedSodexo: boolean = true;
  checkedAleloRefeicao: boolean = true;
  checkedTicketRefeicao: boolean = true;
  checkedBenRefeicao: boolean = true;

  constructor(public formBuilder: FormBuilder, private dialog: MatDialog) {}

  produtos = [
    {
      item: 'Café',
      descricao: 'pimpilena',
    },
    {
      item: 'pão',
      descricao: 'françes',
    },
    {
      item: 'acuçar',
      descricao: 'união',
    },
    {
      item: 'arroz',
      descricao: 'tio joão',
    },
    {
      item: 'farinha',
      descricao: 'rosca',
    },
  ];

  ngOnInit(): void {
    this.FormGroup = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required],
    });
  }
  //Material
  public openDialog() {
    this.dialog.open(OrdenarComponent, {
      width: '450px',
      height: '400px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
  showDialog() {
    this.displaydialog = true;
    this.displayBasic = true;
  }
  valeDialog() {
    this.displaydialog = true;
    this.displayBasicVale = true;
    this.checkedVrRefeicao = false;
    this.checkedSodexo = false;
    this.checkedAleloRefeicao = false;
    this.checkedTicketRefeicao = false;
    this.checkedBenRefeicao = false;
  }
}
