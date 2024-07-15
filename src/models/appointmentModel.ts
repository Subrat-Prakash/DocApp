import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  doctor: mongoose.Types.ObjectId;
  patientName: string;
  appointmentDate: string;
  appointmentTime: string;
}

const appointmentSchema: Schema = new Schema({
  doctor: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
  patientName: { type: String, required: true, trim: true },
  appointmentDate: { type: String, required: true, trim: true },
  appointmentTime: { type: String, required: true, trim: true },
}, {
  timestamps: true
});

const Appointment = mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', appointmentSchema);

export default Appointment;
