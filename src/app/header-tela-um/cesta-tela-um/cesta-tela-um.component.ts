import { Component, OnInit } from '@angular/core';
import { CestaComunicacaoServiceService } from 'src/app/services/cesta-comunicacao-service.service';

@Component({
  selector: 'app-cesta-tela-um',
  templateUrl: './cesta-tela-um.component.html',
  styleUrls: ['./cesta-tela-um.component.scss'],
})
export class CestaTelaUmComponent implements OnInit {
  gavetaAberta = false;
  constructor(private cestaComunicacaoService: CestaComunicacaoServiceService ) {}
  ngOnInit() {
    this.cestaComunicacaoService.gavetaAberta$.subscribe((aberta) => {
      this.gavetaAberta = aberta;
    });
  }
  alternarGaveta() {
    this.cestaComunicacaoService.alternarGaveta(!this.gavetaAberta);
  }
}
