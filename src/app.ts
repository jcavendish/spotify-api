import express from "express";
import cors from "cors";
import createTrack from "./services/tracks/CreateTrack";
import createCategory from "./services/categories/CreateCategory";
import fetchTracks from "./services/tracks/FetchTracks";
import fetchProfile from "./services/profile/FetchProfile";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/tracks", createTrack);
app.get("/tracks", fetchTracks);

app.post("/categories", createCategory);

app.get("/profile", fetchProfile);

export default app;
