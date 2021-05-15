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
  userId = localStorage.getItem('userId');
  constructor(
    private service: MainService,
    private loginService: LoginService,
    private chatService: ChatService
  ) {}
  user;
  contacts;
  selectedContact;

  ngOnInit() {
    this.getUser();
    this.getContacts();
    this.getConversas();
  }
  receberContatoOuConversaPesquisado(valorDigitado: string) {
    this.valorDigitado = valorDigitado;
  }

  getUser() {
    // this.loginService
    //   .getUser()
    //   .pipe(
    //     switchMap((user: any) => {
    //       this.user = user;
    //       return this.chatService.getUserContacts(user.id);
    //     })
    //   )
    //   .subscribe((contacts) => {
    //     console.log("Contatcs",contacts);
    //     this.contacts = contacts;
    //   });
  }

  getConversas(): void {}

  getContacts(): void {
    this.chatService.getUserContacts(JSON.parse(this.userId)).subscribe((contacts) => {
      console.log("Contatos",contacts)
      this.contacts = contacts;
    })
  }


  selectContact(contact){
    this.selectedContact = contact;
  }
}
