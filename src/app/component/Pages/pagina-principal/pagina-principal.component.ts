import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {
  FormGroup!: FormGroup
  value = ``
  value2!: string;
  displaydialog!: boolean;
  displayBasic: boolean = false

  constructor(public formBuilder: FormBuilder, ) { }

  produtos = [
    {
      item: 'Café',
      descricao: "pimpilena"
    },
    {
      item: 'pão',
      descricao: "françes"
    },
    {
      item: 'acuçar',
      descricao: "união"
    }, {
      item: 'arroz',
      descricao: "tio joão"
    },
    {
      item: 'farinha',
      descricao: "rosca"
    },
  ]

  ngOnInit(): void {
    this.FormGroup = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required]
    })
  }
  showDialog() {
    this.displaydialog = true;
    this.displayBasic = true;
}

}
