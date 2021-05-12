import { Injectable } from "@angular/core";
import { ContactsMockService as ChatMockService } from "../test/chat-mock.service";

@Injectable({
    providedIn: 'root'
})
export class ChatService extends ChatMockService{

}