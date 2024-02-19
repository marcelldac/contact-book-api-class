import { Router } from "express";
import {
  createContacts,
  deleteAContact,
  patchAContact,
  readContacts,
  updateAContact,
} from "../services/contacts-services.js";

const router = Router();

router.get("/contact", readContacts);

router.post("/contact", createContacts);

router.put("/contact/:id", updateAContact);

router.patch("/contact/:id", patchAContact);

router.delete("/contact/:id", deleteAContact);

export default router;
