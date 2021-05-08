import { Component, Input } from "@angular/core";

@Component({
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
    selector: 'app-contacts'
})
export class ContactsComponent{

    @Input() conversas;



    
}