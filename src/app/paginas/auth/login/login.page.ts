import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../modelo/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm!: FormGroup;
  public userLogged: Array<User> = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password1: ['', Validators.required]
    })
  }
  ionViewWillEnter() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password1: ['', Validators.required]
    })
  }

  public login() {
    this.http.get<any>("http://localhost:3000/sigupUsers").subscribe(
      res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email
            && a.password1 === this.loginForm.value.password1
        });
        if (user) {
          alert("Login completo");
          this.userLogged.push(user);
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        } else {
          alert("Usuario no encontrado");
        }
      }
    )
  }

}
