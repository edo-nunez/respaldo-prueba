import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../modelo/user'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL_USER = 'http://localhost:3000/sigupUsers';
  public userLogged!: User;

  constructor(
    private http: HttpClient
  ) { }
  getUser() {
    return this.userLogged;
  }

  public login() {
    this.http.get<User>(this.URL_USER).
      subscribe(
        res => {
          if (res) {
            this.userLogged = res
          } else {
            alert("Usuario no encontrado")
          }
        }
      )
  }


}
