import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { ContactBarComponent } from './chat/contact-bar/contact-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    ContactsComponent,
    ContactComponent,
    ChatComponent,
    ContactBarComponent,
  ],
  imports: [],
  exports: [
    NavBarComponent,
    ContactsComponent,
    ContactComponent,
    ChatComponent,
    ContactBarComponent
  ],
})
export class SharedModule {}
