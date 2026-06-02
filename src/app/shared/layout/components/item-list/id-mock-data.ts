// Philippine ID Types with Appointment Scheduling System

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
  date: string; // YYYY-MM-DD
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

export const philIDTypes: IDTypeWithSchedule[] = [
  {
    id: 'National ID (PhilID)',
    description: 'Unified ID system issued by the Philippine Statistics Authority (PSA)',
    issuingAgency: 'Philippine Statistics Authority (PSA)',
    processingTime: '5-7 working days',
    cost: 145,
    locations: ['PSA Office, Manila', 'PSA Office, Cebu', 'PSA Office, Davao'],
    operatingHours: {
      startTime: '08:00 AM',
      endTime: '04:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    requiredDocuments: [
      'Birth Certificate',
      'Valid ID',
      'Proof of Address',
      '2x2 ID Photo',
    ],
    availableSlots: ['08:00 AM', '09:00 AM', '10:00 AM', '02:00 PM', '03:00 PM'],
    appointments: [
      {
        appointmentId: 'APPT-001-2024',
        idType: 'National ID (PhilID)',
        date: '2024-06-15',
        timeSlot: '09:00 AM',
        status: 'Booked',
        applicantName: 'Juan Dela Cruz',
        location: 'PSA Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'Valid ID',
          'Proof of Address',
        ],
        processingDays: 5,
        fee: 145,
        notes: 'Fast track processing',
      },
      {
        appointmentId: 'APPT-002-2024',
        idType: 'National ID (PhilID)',
        date: '2024-06-16',
        timeSlot: '10:00 AM',
        status: 'Available',
        applicantName: '',
        location: 'PSA Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'Valid ID',
          'Proof of Address',
        ],
        processingDays: 5,
        fee: 145,
      },
      {
        appointmentId: 'APPT-003-2024',
        idType: 'National ID (PhilID)',
        date: '2024-06-17',
        timeSlot: '02:00 PM',
        status: 'Available',
        applicantName: '',
        location: 'PSA Office, Cebu',
        requiredDocuments: [
          'Birth Certificate',
          'Valid ID',
          'Proof of Address',
        ],
        processingDays: 5,
        fee: 145,
      },
    ],
  },
  {
    id: 'Passport',
    description: 'International travel document issued by the Department of Foreign Affairs (DFA)',
    issuingAgency: 'Department of Foreign Affairs (DFA)',
    processingTime: '10-15 working days',
    cost: 950,
    locations: [
      'DFA Office, Manila',
      'DFA Office, Cebu',
      'DFA Office, Davao',
      'DFA Office, Iloilo',
    ],
    operatingHours: {
      startTime: '08:00 AM',
      endTime: '03:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    requiredDocuments: [
      'Birth Certificate',
      'NSO Authenticated Copy',
      'Police Clearance',
      '4x6 ID Photo',
      'Proof of Citizenship',
    ],
    availableSlots: ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM'],
    appointments: [
      {
        appointmentId: 'APPT-004-2024',
        idType: 'Passport',
        date: '2024-06-18',
        timeSlot: '08:00 AM',
        status: 'Booked',
        applicantName: 'Maria Garcia',
        location: 'DFA Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'NSO Authenticated Copy',
          'Police Clearance',
        ],
        processingDays: 15,
        fee: 950,
        notes: 'Express processing available',
      },
      {
        appointmentId: 'APPT-005-2024',
        idType: 'Passport',
        date: '2024-06-19',
        timeSlot: '09:00 AM',
        status: 'Available',
        applicantName: '',
        location: 'DFA Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'NSO Authenticated Copy',
          'Police Clearance',
        ],
        processingDays: 15,
        fee: 950,
      },
    ],
  },
  {
    id: 'Driver\'s License',
    description: 'Driving authority issued by the Land Transportation Office (LTO)',
    issuingAgency: 'Land Transportation Office (LTO)',
    processingTime: '3-5 working days',
    cost: 580,
    locations: [
      'LTO Main Office, Manila',
      'LTO Office, Cebu',
      'LTO Office, Davao',
      'LTO Office, Quezon City',
      'LTO Office, Caloocan',
    ],
    operatingHours: {
      startTime: '08:00 AM',
      endTime: '05:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    requiredDocuments: [
      'Birth Certificate',
      'Medical Examination Result',
      'Character Reference',
      '2x2 ID Photo',
      'Proof of Address',
    ],
    availableSlots: ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM'],
    appointments: [
      {
        appointmentId: 'APPT-006-2024',
        idType: 'Driver\'s License',
        date: '2024-06-20',
        timeSlot: '10:00 AM',
        status: 'Booked',
        applicantName: 'Carlos Reyes',
        location: 'LTO Main Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'Medical Examination Result',
          'Character Reference',
        ],
        processingDays: 5,
        fee: 580,
      },
      {
        appointmentId: 'APPT-007-2024',
        idType: 'Driver\'s License',
        date: '2024-06-20',
        timeSlot: '11:00 AM',
        status: 'Available',
        applicantName: '',
        location: 'LTO Main Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'Medical Examination Result',
          'Character Reference',
        ],
        processingDays: 5,
        fee: 580,
      },
      {
        appointmentId: 'APPT-008-2024',
        idType: 'Driver\'s License',
        date: '2024-06-21',
        timeSlot: '02:00 PM',
        status: 'Available',
        applicantName: '',
        location: 'LTO Office, Cebu',
        requiredDocuments: [
          'Birth Certificate',
          'Medical Examination Result',
          'Character Reference',
        ],
        processingDays: 5,
        fee: 580,
      },
    ],
  },
  {
    id: 'PRC License',
    description: 'Professional Regulation Commission license for regulated professionals',
    issuingAgency: 'Professional Regulation Commission (PRC)',
    processingTime: '7-10 working days',
    cost: 2500,
    locations: [
      'PRC Main Office, Manila',
      'PRC Office, Cebu',
      'PRC Office, Davao',
    ],
    operatingHours: {
      startTime: '09:00 AM',
      endTime: '04:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    requiredDocuments: [
      'Transcript of Records',
      'Diploma',
      'Birth Certificate',
      'Medical Certificate',
      'NBI Clearance',
    ],
    availableSlots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM'],
    appointments: [
      {
        appointmentId: 'APPT-009-2024',
        idType: 'PRC License',
        date: '2024-06-21',
        timeSlot: '09:00 AM',
        status: 'Pending',
        applicantName: 'Dr. Angela Santos',
        location: 'PRC Main Office, Manila',
        requiredDocuments: [
          'Transcript of Records',
          'Diploma',
          'Birth Certificate',
        ],
        processingDays: 10,
        fee: 2500,
        notes: 'Professional license for Medical Doctor',
      },
      {
        appointmentId: 'APPT-010-2024',
        idType: 'PRC License',
        date: '2024-06-22',
        timeSlot: '10:00 AM',
        status: 'Available',
        applicantName: '',
        location: 'PRC Main Office, Manila',
        requiredDocuments: [
          'Transcript of Records',
          'Diploma',
          'Birth Certificate',
        ],
        processingDays: 10,
        fee: 2500,
      },
    ],
  },
  {
    id: 'GSIS ID',
    description: 'Government Service Insurance System ID for government employees',
    issuingAgency: 'Government Service Insurance System (GSIS)',
    processingTime: '3-5 working days',
    cost: 0,
    locations: [
      'GSIS Main Office, Manila',
      'GSIS Branch, Cebu',
      'GSIS Branch, Davao',
    ],
    operatingHours: {
      startTime: '08:00 AM',
      endTime: '04:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    requiredDocuments: [
      'Birth Certificate',
      'Government Employee ID',
      'Employment Certificate',
      '2x2 ID Photo',
    ],
    availableSlots: ['08:00 AM', '09:00 AM', '10:00 AM', '02:00 PM', '03:00 PM'],
    appointments: [
      {
        appointmentId: 'APPT-011-2024',
        idType: 'GSIS ID',
        date: '2024-06-23',
        timeSlot: '08:00 AM',
        status: 'Available',
        applicantName: '',
        location: 'GSIS Main Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'Government Employee ID',
          'Employment Certificate',
        ],
        processingDays: 5,
        fee: 0,
      },
      {
        appointmentId: 'APPT-012-2024',
        idType: 'GSIS ID',
        date: '2024-06-24',
        timeSlot: '09:00 AM',
        status: 'Available',
        applicantName: '',
        location: 'GSIS Branch, Cebu',
        requiredDocuments: [
          'Birth Certificate',
          'Government Employee ID',
          'Employment Certificate',
        ],
        processingDays: 5,
        fee: 0,
      },
    ],
  },
  {
    id: 'SSS ID',
    description: 'Social Security System ID for workers and self-employed individuals',
    issuingAgency: 'Social Security System (SSS)',
    processingTime: '3-7 working days',
    cost: 0,
    locations: [
      'SSS Main Office, Manila',
      'SSS Branch, Cebu',
      'SSS Branch, Davao',
      'SSS Branch, Iloilo',
    ],
    operatingHours: {
      startTime: '08:00 AM',
      endTime: '04:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    requiredDocuments: [
      'Birth Certificate',
      'Employment Certificate',
      'Proof of Income',
      '2x2 ID Photo',
    ],
    availableSlots: ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM'],
    appointments: [
      {
        appointmentId: 'APPT-013-2024',
        idType: 'SSS ID',
        date: '2024-06-25',
        timeSlot: '10:00 AM',
        status: 'Booked',
        applicantName: 'Michelle Ramos',
        location: 'SSS Main Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'Employment Certificate',
          'Proof of Income',
        ],
        processingDays: 7,
        fee: 0,
      },
      {
        appointmentId: 'APPT-014-2024',
        idType: 'SSS ID',
        date: '2024-06-25',
        timeSlot: '11:00 AM',
        status: 'Available',
        applicantName: '',
        location: 'SSS Main Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'Employment Certificate',
          'Proof of Income',
        ],
        processingDays: 7,
        fee: 0,
      },
    ],
  },
  {
    id: 'Voter\'s ID',
    description: 'Commission on Elections ID for registered voters',
    issuingAgency: 'Commission on Elections (COMELEC)',
    processingTime: '5-7 working days',
    cost: 0,
    locations: [
      'COMELEC Main Office, Manila',
      'COMELEC Office, Cebu',
      'COMELEC Office, Davao',
      'Barangay Offices (All)',
    ],
    operatingHours: {
      startTime: '08:00 AM',
      endTime: '04:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    requiredDocuments: [
      'Birth Certificate',
      'Proof of Voter Registration',
      '2x2 ID Photo',
      'Proof of Residency',
    ],
    availableSlots: ['08:00 AM', '09:00 AM', '10:00 AM', '02:00 PM', '03:00 PM'],
    appointments: [
      {
        appointmentId: 'APPT-015-2024',
        idType: 'Voter\'s ID',
        date: '2024-06-26',
        timeSlot: '09:00 AM',
        status: 'Available',
        applicantName: '',
        location: 'COMELEC Main Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'Proof of Voter Registration',
          '2x2 ID Photo',
        ],
        processingDays: 7,
        fee: 0,
      },
    ],
  },
  {
    id: 'BIR ID',
    description: 'Bureau of Internal Revenue identification for taxpayers',
    issuingAgency: 'Bureau of Internal Revenue (BIR)',
    processingTime: '1-3 working days',
    cost: 0,
    locations: [
      'BIR Main Office, Manila',
      'BIR Revenue District Office, Makati',
      'BIR Revenue District Office, Cebu',
    ],
    operatingHours: {
      startTime: '08:00 AM',
      endTime: '04:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    requiredDocuments: [
      'Birth Certificate',
      'Business Permit',
      'Proof of Address',
      '2x2 ID Photo',
      'Employment Certificate',
    ],
    availableSlots: ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
    appointments: [
      {
        appointmentId: 'APPT-016-2024',
        idType: 'BIR ID',
        date: '2024-06-27',
        timeSlot: '10:00 AM',
        status: 'Available',
        applicantName: '',
        location: 'BIR Main Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'Business Permit',
          'Proof of Address',
        ],
        processingDays: 3,
        fee: 0,
      },
    ],
  },
  {
    id: 'Senior Citizen ID',
    description: 'Department of Social Welfare and Development ID for senior citizens',
    issuingAgency: 'Department of Social Welfare and Development (DSWD)',
    processingTime: '5-7 working days',
    cost: 0,
    locations: [
      'DSWD Main Office, Manila',
      'DSWD Regional Office, Cebu',
      'DSWD Regional Office, Davao',
      'Municipal Social Welfare Office (All Municipalities)',
    ],
    operatingHours: {
      startTime: '08:00 AM',
      endTime: '04:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    requiredDocuments: [
      'Birth Certificate',
      'Medical Certificate',
      'Proof of Age (50 years old and above)',
      '2x2 ID Photo',
      'Proof of Residency',
    ],
    availableSlots: ['08:00 AM', '09:00 AM', '10:00 AM', '02:00 PM'],
    appointments: [
      {
        appointmentId: 'APPT-017-2024',
        idType: 'Senior Citizen ID',
        date: '2024-06-28',
        timeSlot: '09:00 AM',
        status: 'Booked',
        applicantName: 'Emilio Santiago',
        location: 'DSWD Main Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'Medical Certificate',
          'Proof of Age',
        ],
        processingDays: 7,
        fee: 0,
      },
    ],
  },
  {
    id: 'PWD ID',
    description: 'Persons with Disability ID for social benefits and privileges',
    issuingAgency: 'Department of Social Welfare and Development (DSWD)',
    processingTime: '7-10 working days',
    cost: 0,
    locations: [
      'DSWD Main Office, Manila',
      'DSWD Regional Office, Cebu',
      'DSWD Regional Office, Davao',
      'Municipal Social Welfare Office (All Municipalities)',
    ],
    operatingHours: {
      startTime: '08:00 AM',
      endTime: '04:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    requiredDocuments: [
      'Birth Certificate',
      'Medical Certificate of Disability',
      'Proof of Disability (Audiogram, Visual Exam, etc.)',
      '2x2 ID Photo',
      'Proof of Residency',
    ],
    availableSlots: ['08:00 AM', '10:00 AM', '02:00 PM'],
    appointments: [
      {
        appointmentId: 'APPT-018-2024',
        idType: 'PWD ID',
        date: '2024-06-29',
        timeSlot: '10:00 AM',
        status: 'Pending',
        applicantName: 'Isabel Flores',
        location: 'DSWD Main Office, Manila',
        requiredDocuments: [
          'Birth Certificate',
          'Medical Certificate of Disability',
          'Proof of Disability',
        ],
        processingDays: 10,
        fee: 0,
        notes: 'Medical review required',
      },
    ],
  },
  {
    id: 'Barangay ID',
    description: 'Local government unit ID issued by barangay offices',
    issuingAgency: 'Barangay Government Offices',
    processingTime: '1-2 working days',
    cost: 50,
    locations: [
      'Barangay Hall, Brgy. Tambo, Las Piñas',
      'Barangay Hall, Brgy. Pinagsama, Las Piñas',
      'Barangay Hall (All Barangays in Metro Manila)',
    ],
    operatingHours: {
      startTime: '08:00 AM',
      endTime: '05:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
    requiredDocuments: [
      'Birth Certificate',
      'Proof of Residency',
      '2x2 ID Photo',
      'Barangay Certificate of Residency',
    ],
    availableSlots: ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM'],
    appointments: [
      {
        appointmentId: 'APPT-019-2024',
        idType: 'Barangay ID',
        date: '2024-06-30',
        timeSlot: '09:00 AM',
        status: 'Available',
        applicantName: '',
        location: 'Barangay Hall, Brgy. Tambo, Las Piñas',
        requiredDocuments: [
          'Birth Certificate',
          'Proof of Residency',
          '2x2 ID Photo',
        ],
        processingDays: 2,
        fee: 50,
      },
      {
        appointmentId: 'APPT-020-2024',
        idType: 'Barangay ID',
        date: '2024-07-01',
        timeSlot: '02:00 PM',
        status: 'Available',
        applicantName: '',
        location: 'Barangay Hall, Brgy. Pinagsama, Las Piñas',
        requiredDocuments: [
          'Birth Certificate',
          'Proof of Residency',
          '2x2 ID Photo',
        ],
        processingDays: 2,
        fee: 50,
      },
    ],
  },
  {
    id: 'Professional License',
    description: 'License for various professions (Doctor, Lawyer, Nurse, Engineer, etc.)',
    issuingAgency: 'Professional Regulation Commission (PRC)',
    processingTime: '7-14 working days',
    cost: 3000,
    locations: [
      'PRC Main Office, Manila',
      'PRC Office, Cebu',
      'PRC Office, Davao',
      'PRC Office, Iloilo',
    ],
    operatingHours: {
      startTime: '09:00 AM',
      endTime: '04:00 PM',
      daysOfOperation: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    requiredDocuments: [
      'Board Exam Results',
      'Diploma',
      'Transcript of Records',
      'Birth Certificate',
      'NBI Clearance',
      'Police Clearance',
    ],
    availableSlots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM'],
    appointments: [
      {
        appointmentId: 'APPT-021-2024',
        idType: 'Professional License',
        date: '2024-07-02',
        timeSlot: '10:00 AM',
        status: 'Booked',
        applicantName: 'Lorena Esguerra',
        location: 'PRC Main Office, Manila',
        requiredDocuments: [
          'Board Exam Results',
          'Diploma',
          'Transcript of Records',
        ],
        processingDays: 14,
        fee: 3000,
        notes: 'Professional license for Attorney/Lawyer',
      },
      {
        appointmentId: 'APPT-022-2024',
        idType: 'Professional License',
        date: '2024-07-03',
        timeSlot: '11:00 AM',
        status: 'Available',
        applicantName: '',
        location: 'PRC Main Office, Manila',
        requiredDocuments: [
          'Board Exam Results',
          'Diploma',
          'Transcript of Records',
        ],
        processingDays: 14,
        fee: 3000,
      },
    ],
  },
];

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all ID types
 */
export function getAllIDTypes(): IDTypeWithSchedule[] {
  return philIDTypes;
}

/**
 * Get ID type by name
 */
export function getIDTypeByName(name: PhilippineIDType): IDTypeWithSchedule | undefined {
  return philIDTypes.find((type) => type.id === name);
}

/**
 * Get available appointments for a specific ID type
 */
export function getAvailableAppointments(idType: PhilippineIDType): AppointmentSchedule[] {
  const type = getIDTypeByName(idType);
  return type ? type.appointments.filter((appt) => appt.status === 'Available') : [];
}

/**
 * Get booked appointments for a specific ID type
 */
export function getBookedAppointments(idType: PhilippineIDType): AppointmentSchedule[] {
  const type = getIDTypeByName(idType);
  return type ? type.appointments.filter((appt) => appt.status === 'Booked') : [];
}

/**
 * Get all appointments by status
 */
export function getAppointmentsByStatus(
  idType: PhilippineIDType,
  status: AppointmentStatus
): AppointmentSchedule[] {
  const type = getIDTypeByName(idType);
  return type ? type.appointments.filter((appt) => appt.status === status) : [];
}

/**
 * Get appointment by ID
 */
export function getAppointmentById(appointmentId: string): AppointmentSchedule | undefined {
  for (const type of philIDTypes) {
    const appointment = type.appointments.find((appt) => appt.appointmentId === appointmentId);
    if (appointment) return appointment;
  }
  return undefined;
}

/**
 * Book an appointment
 */
export function bookAppointment(
  appointmentId: string,
  applicantName: string,
  notes?: string
): boolean {
  const appointment = getAppointmentById(appointmentId);
  if (appointment && appointment.status === 'Available') {
    appointment.status = 'Booked';
    appointment.applicantName = applicantName;
    if (notes) appointment.notes = notes;
    return true;
  }
  return false;
}

/**
 * Cancel an appointment
 */
export function cancelAppointment(appointmentId: string): boolean {
  const appointment = getAppointmentById(appointmentId);
  if (appointment && appointment.status !== 'Completed') {
    appointment.status = 'Cancelled';
    appointment.applicantName = '';
    return true;
  }
  return false;
}

/**
 * Get available time slots for a specific date and ID type
 */
export function getAvailableTimeSlots(
  idType: PhilippineIDType,
  date: string
): TimeSlot[] {
  const type = getIDTypeByName(idType);
  if (!type) return [];

  const bookedSlots = type.appointments
    .filter((appt) => appt.date === date && appt.status !== 'Available')
    .map((appt) => appt.timeSlot);

  return type.availableSlots.filter((slot) => !bookedSlots.includes(slot));
}

/**
 * Get all locations for an ID type
 */
export function getLocationsByIDType(idType: PhilippineIDType): string[] {
  const type = getIDTypeByName(idType);
  return type ? type.locations : [];
}

/**
 * Get required documents for an ID type
 */
export function getRequiredDocuments(idType: PhilippineIDType): string[] {
  const type = getIDTypeByName(idType);
  return type ? type.requiredDocuments : [];
}