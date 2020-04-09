import { Request, Response } from "express";
import connection from "../../database/connection";

export default async function FetchTracks(
  request: Request,
  response: Response
) {
  const tracks = await connection("tracks").select("*");
  return response.json(tracks);
}
