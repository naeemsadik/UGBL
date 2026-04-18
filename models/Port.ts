import mongoose, { Schema, Document } from 'mongoose';

export interface IPort extends Document {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const PortSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Port || mongoose.model<IPort>('Port', PortSchema);
