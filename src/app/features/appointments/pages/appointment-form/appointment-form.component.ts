import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.less'
})
export class AppointmentFormComponent {

appointmentForm = new FormGroup ({
  personalInfo : new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl('')
  }),

  serviceInformation: new FormGroup ({
     serviceType: new FormControl(''),
  agency: new FormControl(''),
  branchOffice: new FormControl('')
  }),

 appointmentInformation: new FormGroup({
  date: new FormControl(''),
  timeSlot: new FormControl(''),
 }),
 
  termsConfirmation: new FormControl('')
})

ngOnInit(){

}

}
