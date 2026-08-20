import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GovernmentService, AppointmentSchedule } from '../../models/id-service.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';

  getAllServices(): Observable<GovernmentService[]> {
    return this.http.get<GovernmentService[]>(`${this.baseUrl}/services`);
  }

  getServiceById(id: number): Observable<GovernmentService> {
    return this.http.get<GovernmentService>(`${this.baseUrl}/services/${id}`);
  }

  getAllAppointments(): Observable<AppointmentSchedule[]> {
    return this.http.get<AppointmentSchedule[]>(`${this.baseUrl}/appointments`);
  }

  getAppointmentsByServiceId(serviceId: number): Observable<AppointmentSchedule[]> {
    return this.http.get<AppointmentSchedule[]>(
      `${this.baseUrl}/appointments?serviceId=${serviceId}`
    );
  }
}
