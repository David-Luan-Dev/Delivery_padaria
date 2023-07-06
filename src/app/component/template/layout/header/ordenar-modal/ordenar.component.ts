import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<OrdenarComponent>) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  public closeDialog(){
    this.matDialogRef.close();
  }
}
