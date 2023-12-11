import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not-start", "In-progress", "Completed"],
  },
  content: {
    type: String,
  },
  tag: {
    type: String,
  },
});

export const NoteModel = mongoose.model("Note", NoteSchema);
