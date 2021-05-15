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
    return this.http.get(`${baseUrl}/users/0a013599-3425-4daa-85ba-3af09b09e2ce`);
  }
}
