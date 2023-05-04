import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormBuilder} from  '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-from-pagamento',
  templateUrl: './from-pagamento.component.html',
  styleUrls: ['./from-pagamento.component.scss']
})
export class FromPagamentoComponent implements OnInit{
  toppings = this._formBuilder.group({
    vrRefeicao: false,
    sodexoRefeicao: false,
    aleloRefeicao: false,
    ticketRefeicao: false,
    benRefeicao: false
  });

  constructor(public matDialogRef: MatDialogRef<FromPagamentoComponent>,
   public _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  public closeDialog(){
    this.matDialogRef.close();
  }
}
