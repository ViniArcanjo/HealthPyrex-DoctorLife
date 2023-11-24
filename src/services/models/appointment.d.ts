import { Doctor } from "./doctor";
import { Patient } from "./patient";

export type Appointment = {
  appointmentDate: string;
  appointmentId: number;
  createdAt: string;
  createdBy: string;
  doctor: Doctor;
  doctorId: number;
  isActive: string;
  modifiedAt: string;
  modifiedBy: string;
  patient: Patient;
  patientId: number;
  title: string;
  description: string;
};
