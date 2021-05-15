import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  selector: 'app-chat',
})
export class ChatComponent implements OnInit, OnDestroy {
  @Input() selectedContact;
  isContactInfo = true;
  subscriptions = new Subscription();

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.listenMessages();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  showContactInfo() {
    this.isContactInfo = !this.isContactInfo;
  }

  listenMessages() {
    const subscription = this.chatService.listenMessages().subscribe((messages) => {
      console.log(messages);
    });

    this.subscriptions.add(subscription);
  }
}
