import { Routes } from '@angular/router';
import { LandingPageComponent } from './shared/layout/components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'service/:id',
    loadComponent: () =>
      import('./features/appointments/pages/appointment-form/appointment-form.component')
        .then(m => m.AppointmentFormComponent)
  }
];