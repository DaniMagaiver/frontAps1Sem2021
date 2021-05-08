import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavBarComponent,
    ContactsComponent,
    ContactComponent,
    ChatComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    NavBarComponent,
    ContactsComponent,
    ContactComponent,
    ChatComponent,
  ],
})
export class SharedModule {}
