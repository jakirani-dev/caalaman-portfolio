/**export type PhilippineIDType =
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
}**/

export enum AppointmentStatus {
  AVAILABLE = 'Available',
  BOOKED = 'Booked',
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled',
}

export interface OfficeLocation {
  id: string;
  name: string;
  city: string;
  province: string;
  address: string;

  operatingHours: {
    startTime: string;
    endTime: string;
    daysOfOperation: string[];
  };
}

export interface GovernmentService {
  id: number;
  name: string;
  description: string;

  issuingAgency: string;

  processingTime: {
    minimumDays: number;
    maximumDays: number;
  };

  cost: number;

  requiredDocuments: string[];

  locations: OfficeLocation[];

  availableSlots: string[];
}

export interface AppointmentSchedule {
  appointmentId: string;

  serviceId: number;

  applicantName: string;
  applicantEmail: string;
  applicantContactNumber: string;

  locationId: string;

  appointmentDate: string;
  timeSlot: string;

  status: AppointmentStatus;

  fee: number;

  notes?: string;

  createdAt: string;
  updatedAt?: string;
}
