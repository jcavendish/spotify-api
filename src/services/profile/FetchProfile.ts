import { Request, Response } from "express";
import connection from "../../database/connection";

export default async function FetchProfile(
  request: Request,
  response: Response
) {
  const profile = await connection("categories")
    .join("tracks_categories", "categories.id", "tracks_categories.category_id")
    .join("tracks", "tracks.id", "tracks_categories.track_id")
    .select(
      "categories.label",
      "tracks.title",
      "tracks.artist",
      "tracks.likes"
    );
  return response.json(profile);
}
