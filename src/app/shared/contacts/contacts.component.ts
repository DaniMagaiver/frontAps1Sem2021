import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  selector: 'app-contacts',
})
export class ContactsComponent {
  @Input() contacts;
  @Output() eventClick = new EventEmitter();

  clicked(contact) {
    this.eventClick.emit(contact);
  }
}
