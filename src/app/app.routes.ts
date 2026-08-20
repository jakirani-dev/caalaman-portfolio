import { Routes } from '@angular/router';
import { LandingPageComponent } from './shared/layout/components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'appointment',
    loadComponent: () =>
      import('./features/appointments/pages/appointment-form/appointment-form.component').then(
        (m) => m.AppointmentFormComponent
      ),
  } /** ,
  {
    path: 'services/:id',
    loadComponent: () =>
      import('./features/services/pages/service-details/service-details.component')
      .then(m => m.ServiceDetailsComponent)
  }*/,
];
