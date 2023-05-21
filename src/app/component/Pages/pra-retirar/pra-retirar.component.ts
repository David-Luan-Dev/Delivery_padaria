import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pra-retirar',
  templateUrl: './pra-retirar.component.html',
  styleUrls: ['./pra-retirar.component.scss']
})
export class PraRetirarComponent {

  constructor( private http: HttpClient) {}

}
