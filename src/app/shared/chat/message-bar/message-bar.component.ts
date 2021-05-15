import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ChatService } from 'src/app/services/chat.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss'],
  selector: 'app-message-bar',
})
export class MessageBarComponent {
  @Input() selectedContact;
  message: string = '';
  constructor(
    private chatService: ChatService,
    private serviceLogin: LoginService
  ) {}
  icons = {
    send: faPaperPlane,
  };

  send() {
    const userId = this.serviceLogin.getSelectedUser();
    this.chatService.sendMessage({
      // senderId: JSON.parse(localStorage.getItem('userId')),
      senderId: userId,
      destinataryId: this.selectedContact.user_id,
      message: this.message,
    });
    this.message = '';
  }

  listenMessages() {
    this.chatService.listenMessages().subscribe((talk) => {
      console.log(talk);
    });
  }
}
