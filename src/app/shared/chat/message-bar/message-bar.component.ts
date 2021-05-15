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
   this.chatService.sendMessage({senderId: '7786db06-1e8d-4107-b13f-ac2aaa1876b0', destinataryId:'9987b4ef-14a6-4150-b829-45d5f87c78a1', message: this.message});
   this.message = '';
  }

  listenMessages(){
    this.chatService.listenMessages().subscribe(talk => {
      console.log(talk)
    })
  }
}
