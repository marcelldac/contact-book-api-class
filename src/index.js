import express from "express";
import cors from "cors";
import contactRouter from "./router/contact-router.js";

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

app.use(contactRouter);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
