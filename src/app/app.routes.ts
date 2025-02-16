import { Routes } from '@angular/router';
import { FormLoginComponent, FormRegisterComponent } from '@components/forms';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () => FormRegisterComponent,
  },
  {
    path: 'events',
    canActivate: [authGuard],
    loadComponent: () => EventsPageComponent,
  },
  {
    path: '',
    loadComponent: () => FormLoginComponent,
  },
];
