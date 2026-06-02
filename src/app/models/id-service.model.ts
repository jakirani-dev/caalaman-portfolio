export type PhilippineIDType =
  | 'National ID (PhilID)'
  | 'Passport'
  | 'Driver\'s License'
  | 'PRC License'
  | 'GSIS ID'
  | 'SSS ID'
  | 'Voter\'s ID'
  | 'BIR ID'
  | 'Senior Citizen ID'
  | 'PWD ID'
  | 'Barangay ID'
  | 'Professional License';

export type AppointmentStatus = 'Available' | 'Booked' | 'Pending' | 'Completed' | 'Cancelled';
export type TimeSlot = '08:00 AM' | '09:00 AM' | '10:00 AM' | '11:00 AM' | '01:00 PM' | '02:00 PM' | '03:00 PM' | '04:00 PM';

export interface AppointmentSchedule {
  appointmentId: string;
  idType: PhilippineIDType;
  date: string;
  timeSlot: TimeSlot;
  status: AppointmentStatus;
  applicantName: string;
  location: string;
  requiredDocuments: string[];
  processingDays: number;
  fee: number;
  notes?: string;
}

export interface IDTypeWithSchedule {
  id: PhilippineIDType;
  description: string;
  issuingAgency: string;
  processingTime: string;
  cost: number;
  locations: string[];
  operatingHours: {
    startTime: string;
    endTime: string;
    daysOfOperation: string[];
  };
  requiredDocuments: string[];
  availableSlots: TimeSlot[];
  appointments: AppointmentSchedule[];
}