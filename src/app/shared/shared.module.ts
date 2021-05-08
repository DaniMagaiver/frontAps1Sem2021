import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    NavBarComponent,
    ContactsComponent,
    ContactComponent,
    ChatComponent,
  ],
  imports: [],
  exports: [
    NavBarComponent,
    ContactsComponent,
    ContactComponent,
    ChatComponent,
  ],
})
export class SharedModule {}
