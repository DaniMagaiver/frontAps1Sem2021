import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const baseUrl = 'http://localhost:3000'
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = environment.base_url;
  constructor(private http: HttpClient) {}

  login({ email, password }) {
    return this.http
      .post(
        `${this.baseUrl}/users/login`,
        { email, password },
        { observe: 'response', withCredentials: true}
      );
  }

  getUser(){
    return this.http.get(`${baseUrl}/users/77151b16-3264-4546-912d-2a8d79679d9b`);
  }
}
