import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  selector: 'app-nav-bar',
})
export class NavBarComponent {
  @Output() contatoOuConversa = new EventEmitter();
  formularioCliente: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formularioCliente = this.formBuilder.group({
      nome: '',
    });
    this.formularioCliente.valueChanges.subscribe((res) => {
      this.enviarContatoOuconversa(res.nome);
    });
  }

  enviarContatoOuconversa(valorDigitado: string): void {
    this.contatoOuConversa.emit(valorDigitado);
  }
}
