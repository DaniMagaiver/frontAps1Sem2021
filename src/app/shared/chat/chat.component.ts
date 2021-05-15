import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  selector: 'app-chat',
})
export class ChatComponent {
  @Input() selectedContact;
  isContactInfo = true;

  showContactInfo() {
    this.isContactInfo = !this.isContactInfo;
  }
}
