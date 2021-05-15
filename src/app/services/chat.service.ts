import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io } from 'socket.io-client';

const base_url = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  socket = io('http://localhost:3000').connect();
  constructor(private http: HttpClient) {}

  getUserContacts(userId: string = '0a013599-3425-4daa-85ba-3af09b09e2ce') {
    return this.http.get(
      `${base_url}talks/findUserTalk/0a013599-3425-4daa-85ba-3af09b09e2ce`
    );
  }

  getUserMessages(talkId: string) {
    return this.http.get(`${base_url}talks/${talkId}`);
  }


  sendMessage({
    senderId,
    destinataryId,
    message,
  }: {
    senderId: string;
    destinataryId: string;
    message: string;
  }) {
    this.socket.emit('newMessage', {senderId, destinataryId, message});
  }

  listenMessages() {
    const messageListener$ = new Subject();
    this.socket.on('updatedMessages', (talk) => {
      messageListener$.next(talk);
    });
    return messageListener$;
  }
  //Pegar dados Io
}
