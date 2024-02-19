import express from "express";
import cors from "cors";
import {
  createContacts,
  deleteAContact,
  patchAContact,
  readContacts,
  updateAContact,
} from "./services/contacts-services.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// MODEL
//
// contact = {
//  id: string,
//  name: string,
//  phone: string,
//  isActive: string,
//  updatedAt: string | null
//  createdAt: string
// }
//

// ENUM
//
// enum statusCode {
//  Ok = 200,
//  Created = 201
// }

app.get("/contact", readContacts);

app.post("/contact", createContacts);

app.put("/contact/:id", updateAContact);

app.patch("/contact/:id", patchAContact);

app.delete("/contact/:id", deleteAContact);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
