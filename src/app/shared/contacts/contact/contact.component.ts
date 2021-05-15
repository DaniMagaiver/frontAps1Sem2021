import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    selector: 'app-contact'
})
export class ContactComponent{
    @Input() contact
    @Output() clickEvent = new EventEmitter();

    clicked(){
        this.clickEvent.emit(this.contact);
    }
}