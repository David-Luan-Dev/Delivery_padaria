import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrdenarComponent } from './ordenar-modal/ordenar.component';
import { FromPagamentoComponent } from './from-pagamento/from-pagamento.component';
import { DialogDistanciaComponent } from './dialog-distancia/dialog-distancia.component';
import { EntregaGratisComponent } from '../entrega-gratis/entrega-gratis.component';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss'],
})
export class PaginaPrincipalComponent implements OnInit {
  FormGroup!: FormGroup;
  numeroDivs = 10;
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

  constructor(
    public formBuilder: FormBuilder,
    private dialog: MatDialog,
    ) {}

    gerarArrayDivs(): number[] {
      return Array(this.numeroDivs).fill(0).map((_,index) => index)
    }
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
  //Dialog Material componente ordenar
  public openDialog() {
    this.dialog.open(OrdenarComponent, {
      width: '450px',
      height: '400px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
  //Dialog Material componente de forma de pagamento
  public openDialogfromPagamento() {
    this.dialog.open(FromPagamentoComponent, {
      width: '350px',
      height: '380px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
  //Dialog material componente distância
  public openDialogDistancia() {
    this.dialog.open(DialogDistanciaComponent, {
      width: '600px',
      height: '300px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
}
