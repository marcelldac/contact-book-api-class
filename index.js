import express from "express";
import cors from "cors";
import { formatRelative, subDays } from "date-fns";
import { pt } from "date-fns/locale";
import crypto from "node:crypto";

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
//  isActive: boolean
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

const statusCode = {
  Ok: 200,
  Created: 201,
  ServerError: 500,
};

let contacts = [];

app.get("/contact", (request, response) => {
  try {
    return response
      .status(statusCode.Ok)
      .json({ message: contacts, error: false });
  } catch (error) {
    return response
      .status(statusCode.ServerError)
      .json({ message: error, error: true });
  }
});

app.post("/contact", (request, response) => {
  try {
    const contact = request.body;
    const id = crypto.randomUUID();
    const updatedAt = formatRelative(subDays(new Date(), 3), new Date(), {
      locale: pt,
    });

    const payload = {
      id,
      name: contact.name,
      phone: contact.phone,
      isActive: contact.isActive,
      updatedAt,
    };

    contacts.push(payload);

    return response
      .status(statusCode.Created)
      .json({ message: payload, error: false });
  } catch (error) {
    return response
      .status(statusCode.ServerError)
      .json({ message: error, error: true });
  }
});

app.put("/contact/:id", (request, response) => {
  try {
    const { id } = request.params;
    const { name, phone, isActive } = request.body;
    const updatedAt = formatRelative(subDays(new Date(), 3), new Date(), {
      locale: pt,
    });
    const index = findIndexById(id);
    if (index === statusCode.NotFound) {
      return response
        .status(statusCode.NotFound)
        .json({ message: "Index Not Found", error: true });
    }
    const newPayload = {
      id,
      name,
      phone,
      isActive,
      updatedAt,
    };
    contacts[index] = newPayload;

    return response
      .status(statusCode.Ok)
      .json({ message: newPayload, error: false });
  } catch (error) {
    return response
      .status(statusCode.ServerError)
      .json({ message: error, error: true });
  }
});

app.patch("/contact/:id", () => {});
app.delete("/contact/:id", () => {});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
