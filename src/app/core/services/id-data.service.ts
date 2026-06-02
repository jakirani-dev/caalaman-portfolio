import { Injectable } from '@angular/core';
import { IDTypeWithSchedule, PhilippineIDType, AppointmentSchedule, TimeSlot } from '../../models/id-service.model';
import { philIDTypes } from '../../shared/layout/components/item-list/id-mock-data';

@Injectable({ providedIn: 'root' })
export class IdDataService {

  getAllIDTypes(): IDTypeWithSchedule[] {
    return philIDTypes;
  }

  getIDTypeByName(name: PhilippineIDType): IDTypeWithSchedule | undefined {
    return philIDTypes.find(t => t.id === name);
  }

  getAvailableTimeSlots(idType: PhilippineIDType, date: string): TimeSlot[] {
    const type = this.getIDTypeByName(idType);
    if (!type) return [];
    const bookedSlots = type.appointments
      .filter(a => a.date === date && a.status !== 'Available')
      .map(a => a.timeSlot);
    return type.availableSlots.filter(slot => !bookedSlots.includes(slot));
  }
}