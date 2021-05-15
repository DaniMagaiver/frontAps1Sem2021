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
  private conectedUser = '';
  constructor(private http: HttpClient) {}

  login({ email, password }) {
    return this.http
      .get(
        `http://localhost:3000/users/findByEmail/${email}`,
      );
  }

  getUser(){
    return this.http.get(`${baseUrl}/users/0a013599-3425-4daa-85ba-3af09b09e2ce`);
  }

  setSelectedUser(userId:string){
    this.conectedUser = userId;
  }

  getSelectedUser():string{
    return this.conectedUser;
  }
}
