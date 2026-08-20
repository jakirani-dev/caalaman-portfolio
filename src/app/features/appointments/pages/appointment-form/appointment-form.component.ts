import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LeftSidebarComponent } from '../../../../shared/layout/components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from '../../../../shared/layout/components/right-sidebar/right-sidebar.component';
import { HeaderBannerComponent } from '../../../../shared/layout/components/header-banner/header-banner.component';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LeftSidebarComponent,
    RightSidebarComponent,
    HeaderBannerComponent,
    FormsModule,
  ],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.less',
})
export class AppointmentFormComponent {
  appointmentForm = new FormGroup({
    personalInfo: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
    }),

    serviceInformation: new FormGroup({
      serviceType: new FormControl(''),
      agency: new FormControl(''),
      branchOffice: new FormControl(''),
    }),

    appointmentInformation: new FormGroup({
      date: new FormControl(''),
      timeSlot: new FormControl(''),
    }),

    termsConfirmation: new FormControl(''),
  });

  //ngOnInit() {}
}
