
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  mobile: string;
  email: string;
  desc: string;
}

const ContactSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    desc: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.lonkas || mongoose.model<IUser>("lonkas", ContactSchema);