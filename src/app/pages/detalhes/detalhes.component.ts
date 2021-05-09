import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  valorDigitado: string;

  constructor() { }

  ngOnInit(): void {
  }
  receberContatoOuConversaPesquisado(valorDigitado:string){
    this.valorDigitado = valorDigitado;
}
}
