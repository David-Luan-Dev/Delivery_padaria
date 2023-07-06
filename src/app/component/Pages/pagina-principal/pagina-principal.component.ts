import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrdenarComponent } from '../../template/layout/header/ordenar-modal/ordenar.component';
import { FromPagamentoComponent } from '../../template/layout/header/from-pagamento/from-pagamento.component';
import { DialogDistanciaComponent } from '../../template/layout/header/dialog-distancia/dialog-distancia.component';

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


  ngOnInit(): void {
    this.FormGroup = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required],
    });
  }
  //Dialog Material
  public openDialog() {
    this.dialog.open(OrdenarComponent, {
      width: '450px',
      height: '400px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
  public openDialogfromPagamento() {
    this.dialog.open(FromPagamentoComponent, {
      width: '350px',
      height: '380px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
  public openDialogDistancia() {
    this.dialog.open(DialogDistanciaComponent, {
      width: '600px',
      height: '300px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
}
