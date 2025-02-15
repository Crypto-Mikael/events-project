import { Routes } from '@angular/router';
import { FormLoginComponent, FormRegisterComponent } from '@components/forms';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';

export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () => FormRegisterComponent,
  },
  {
    path: 'events',
    loadComponent: () => EventsPageComponent,
  },
  {
    path: 'people',
    loadComponent: () => PeoplePageComponent,
  },
  {
    path: '',
    loadComponent: () => FormLoginComponent,
  },
];
