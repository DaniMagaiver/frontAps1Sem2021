import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    selector: 'app-contact'
})
export class ContactComponent{
    @Input() contact
    @Output() clickEvent = new EventEmitter();
    constructor(private service:ChatService){

    }
    ngOnInit(){
     
    }
    clicked(){
        localStorage.setItem('talk_id',JSON.stringify(this.contact.talks_id))
        this.clickEvent.emit(this.contact);
    }
}