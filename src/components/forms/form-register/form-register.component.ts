import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
  imports: [FormsModule, ReactiveFormsModule],
})
export class FormRegisterComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    public authService: AuthService,
    public router: Router
  ) {}
  visibilityPassword = false;
  visibilityPasswordConfirm = false;

  roomValidator = (): ValidatorFn => {
    return (): ValidationErrors | null => {
      if (
        this.loginForm &&
        this.loginForm.controls.confirmPassword.value !==
          this.loginForm.controls.password.value
      ) {
        return { mismatchPassword: true };
      }
      if (
        this.loginForm &&
        this.loginForm.controls.confirmEmail.value !==
          this.loginForm.controls.email.value
      ) {
        return { mismatchEmail: true };
      }

      return null;
    };
  };
  loginForm = new FormGroup(
    {
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      confirmEmail: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      confirmPassword: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    },
    { validators: [this.roomValidator()] }
  );
  createNewUser = async () => {
    const { email, password } = this.loginForm.getRawValue();
    const jwt = await firstValueFrom(
      this.usersService.post({ email, password })
    );
    if (jwt) this.authService.setToken(jwt);
    window.location.href = '/events';
  };

  ngOnInit() {
    if (localStorage.getItem('token')) window.location.href = '/events';
  }
}
