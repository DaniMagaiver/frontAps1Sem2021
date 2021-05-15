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

  getUserContacts(userId: string = '77151b16-3264-4546-912d-2a8d79679d9b') {
    return this.http.get(
      `${base_url}talks/77151b16-3264-4546-912d-2a8d79679d9b`
    );
  }

  sendMessage(message: string) {
    this.socket.emit('message',message);
  }
}
