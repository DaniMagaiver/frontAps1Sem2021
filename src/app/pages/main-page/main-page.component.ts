import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ChatService } from 'src/app/services/chat.service';
import { LoginService } from 'src/app/services/login.service';
import { MainService } from 'src/app/services/mainpage.service';

@Component({
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  conversas = [];
  conversasFiltradas = [];
  valorDigitado: string;
  // userId = localStorage.getItem('userId');
  userId = this.loginService.getSelectedUser();
  constructor(
    private service: MainService,
    private loginService: LoginService,
    private chatService: ChatService
  ) {}
  user;
  contacts;
  selectedContact;

  ngOnInit() {
    this.getContacts();
    this.getConversas();
  }
  receberContatoOuConversaPesquisado(valorDigitado: string) {
    this.valorDigitado = valorDigitado;
  }

  getConversas(): void {}

  getContacts(): void {
    this.chatService.getUserContacts(this.userId).subscribe((contacts) => {
      this.contacts = contacts;
    })
  }


  selectContact(contact){
    this.selectedContact = contact;
  }
}
