import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
      `${base_url}talks/0a013599-3425-4daa-85ba-3af09b09e2ce`
    );
  }

  sendMessage(message: string) {
    this.socket.emit('message',message);
  }

  //Pegar dados Io
}
