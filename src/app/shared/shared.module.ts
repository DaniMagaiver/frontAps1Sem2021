import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageBarComponent } from './chat/message-bar/message-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    NavBarComponent,
    ContactsComponent,
    ContactComponent,
    ChatComponent,
    MessageBarComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    NavBarComponent,
    ContactsComponent,
    ContactComponent,
    ChatComponent,
    MessageBarComponent
  ],
})
export class SharedModule {}
