import express from "express";
import cors from "cors";
import CreateTrack from "./services/CreateTrack";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", (request, response) => {
  const track = CreateTrack(request, response);
  response.json(track);
});

export default app;
