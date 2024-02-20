import express from "express";
import cors from "cors";
import contactRouter from "./router/contact-router.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(contactRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
