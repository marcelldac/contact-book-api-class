import { formatRelative, subDays } from "date-fns";
import { pt } from "date-fns/locale";
import crypto from "node:crypto";

const statusCode = {
  Ok: 200,
  Created: 201,
  ServerError: 500,
  NotFound: 404,
  NoContent: 204,
};

let contacts = [];

function findIndexById(id) {
  const index = contacts.findIndex((element) => {
    return element.id === id;
  });
  if (index === -1) {
    return 404;
  }
  return index;
}
export function readContacts(request, response) {
  try {
    return response
      .status(statusCode.Ok)
      .json({ message: contacts, error: false });
  } catch (error) {
    return response
      .status(statusCode.ServerError)
      .json({ message: error, error: true });
  }
}

export function createContacts(request, response) {
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
}

export function updateAContact(request, response) {
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
}

export function patchAContact(request, response) {
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
        .json({ message: "Not Found", error: true });
    }
    const newPayload = {
      id,
      name: name || contacts[index].name,
      phone: phone || contacts[index].phone,
      isActive: isActive || contacts[index].isActive,
      updatedAt,
    };

    contacts[index] = newPayload;

    return response
      .status(statusCode.Ok)
      .json({ message: newPayload, error: false });
  } catch (error) {
    return response
      .status(statusCode.NotFound)
      .json({ message: error, error: true });
  }
}

export function deleteAContact(request, response) {
  try {
    const { id } = request.params;
    const index = findIndexById(id);
    if (index === statusCode.NotFound) {
      return response
        .status(statusCode.NotFound)
        .json({ message: "Not Found", error: true });
    }

    contacts.splice(index, 1);
    return response.status(statusCode.NoContent).send();
  } catch (error) {
    response
      .status(statusCode.ServerError)
      .json({ message: error, error: true });
  }
}
