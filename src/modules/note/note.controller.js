import { Router, request, response } from "express";
import {
  addNewNote,
  deleteNoteById,
  findAllNote,
  findNoteById,
  findNoteByQuery,
  updateNoteById,
} from "./note.service.js";

export const router = Router();

router.post("/note/addnote", async (request, response) => {
  try {
    const newNote = await addNewNote(request.body);
    response.status(200).send(newNote);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/note/updatenote/:id", async (request, response) => {
  try {
    const updateNote = await updateNoteById(request.params.id, request.body);
    response.status(200).send(updateNote);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.delete("/note/deletenote/:id", async (request, response) => {
  try {
    const deleteNote = await deleteNoteById(request.params.id);
    response.status(200).send({ id: request.params.id, isDeleted: true });
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/note/listallnote", async (request, response) => {
  try {
    const listNote = await findAllNote();
    if (listNote === null) {
      response.status(404).send({ message: "Note not available" });
    } else {
      response.status(200).send(listNote);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/note/searchnote", async (request, response) => {
  try {
    const searchNote = await findNoteByQuery(request.query);
    if (searchNote === null) {
      response.status(404).send({ message: "Note not available" });
    } else {
      response.status(200).send(searchNote);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/note/getnote/:id", async (request, response) => {
  try {
    const getNote = await findNoteById(request.params.id);
    if (getNote === null) {
      response
        .status(404)
        .send({ message: `Note id: ${request.params.id} not found` });
    } else {
      response.status(200).send(getNote);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});
