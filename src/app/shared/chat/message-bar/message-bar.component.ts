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
   this.chatService.sendMessage({senderId: '0a013599-3425-4daa-85ba-3af09b09e2ce', destinataryId:'d620d2c9-47ea-4ddb-b02b-d71d5b190536', message: this.message});
   this.message = '';
  }

  listenMessages(){
    this.chatService.listenMessages().subscribe(talk => {
      console.log(talk)
    })
  }
}
