import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  selector: 'app-chat',
})
export class ChatComponent implements OnInit, OnDestroy {
  @Input() selectedContact;

  // userPrimary = JSON.parse(localStorage.getItem('userId'));
  userPrimary = this.serviceLogin.getSelectedUser();
  isContactInfo = true;
  subscriptions = new Subscription();

  id: string;
  messages = [];
  constructor(
    private service: ChatService,
    private serviceLogin: LoginService,
    private serviceChat: ChatService
  ) {}

  ngOnInit() {
    this.listenMessages();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnChanges(): void {
    this.id = this.serviceChat.getTalkId();
    this.getMessages();
  }

  showContactInfo() {
    this.isContactInfo = !this.isContactInfo;
    if (!this.isContactInfo) {
      // this.id = JSON.parse(localStorage.getItem('talk_id'));
    }
    console.log('SELECTED', this.selectedContact);
  }

  getMessages() {
    this.service.getUserMessages(this.id).subscribe((res: any) => {
      this.messages = res.messages;
      console.log('Messages', this.messages);
    });
    //d620d2c9-47ea-4ddb-b02b-d71d5b190536
    //0a013599-3425-4daa-85ba-3af09b09e2ce -- Diego
    //5894b9c5-0056-4cda-a427-24f2d226c430 -- Diegod
    // ad6fa9e4-a801-4b90-8b80-07c5eabf8308 -- Danilo
  }

  listenMessages() {
    const subscription = this.service
      .listenMessages()
      .subscribe((messages: any) => {
        this.messages = messages.messages;
        console.log(messages);
      });

    this.subscriptions.add(subscription);
  }
}
