import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss'],
  selector: 'app-message-bar',
})
export class MessageBarComponent {
  message:string = '';
  constructor(private chatService:ChatService){}
  icons = {
    send: faPaperPlane,
  };

  send(){
   this.chatService.sendMessage(this.message);
   this.message = '';
  }
}
