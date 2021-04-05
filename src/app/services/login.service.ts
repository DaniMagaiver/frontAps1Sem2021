import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

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
}
