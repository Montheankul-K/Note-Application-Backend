import { NoteModel } from "../../models/note.model.js";

export function addNewNote(noteData) {
  const newNote = new NoteModel(noteData);
  return newNote.save();
}

export function updateNoteById(id, noteData) {
  return NoteModel.findByIdAndUpdate(id, noteData);
}

export function deleteNoteById(id) {
  return NoteModel.findByIdAndDelete(id);
}

export function findAllNote() {
  return NoteModel.find({});
}

export function findNoteById(id) {
  return NoteModel.findById(id);
}

export function findNoteByQuery(query) {
  let baseQuery = {};
  if (query.title) {
    baseQuery = {
      ...baseQuery,
      ...{
        title: {
          $regex: new RegExp(query.title, "i"),
        },
      },
    };
  }
  if (query.status) {
    baseQuery = {
      ...baseQuery,
      status: {
        $regex: new RegExp(query.status, "i"),
      },
    };
  }
  if (query.tag && !query.condition) {
    baseQuery = {
      ...baseQuery,
      tag: {
        $regex: new RegExp(query.tag, "i"),
      },
    };
  }
  if (query?.condition === "or") {
    baseQuery = {
      $or: Object.entries(baseQuery).map(([key, value]) => ({ [key]: value })),
    };
  }
  return NoteModel.find(baseQuery);
}
