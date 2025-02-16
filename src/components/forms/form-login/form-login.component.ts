import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  imports: [ReactiveFormsModule],
})
export class FormLoginComponent implements OnInit {
  constructor(public authService: AuthService) {}
  visibilityPassword = false;

  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  login = async () => {
    const { email, password } = this.loginForm.getRawValue();
    const jwt = await firstValueFrom(
      this.authService.post({ email, password })
    );
    if (jwt) this.authService.setToken(jwt);
    window.location.href = '/events';
  };

  ngOnInit() {
    if (localStorage.getItem('token')) window.location.href = '/events';
  }
}
