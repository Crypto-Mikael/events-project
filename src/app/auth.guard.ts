import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const routerService = inject(Router);
  const token = authService.getToken();
  if (!token) routerService.navigate(['/']);
  if (token && authService.tokenExpired(token)) {
    localStorage.clear();
    routerService.navigate(['/']);
    return false;
  }
  return true;
};
