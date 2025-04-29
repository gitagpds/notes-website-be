import express from "express";
import cors from "cors";
import NotesRoute from "./routes/NotesRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(NotesRoute);

// Tambahkan ini
app.get("/", (req, res) => {
  res.send("API is running on Cloud Run YIPPIEEE 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server terhubung di port ${PORT}`));
