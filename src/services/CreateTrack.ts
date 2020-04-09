import { Request, Response } from "express";
import Track from "../models/Track";
import crypto from "crypto";

export default function CreateTrack(
  request: Request,
  response: Response
): Track {
  const { title, likes, category } = request.body;
  return {
    id: crypto.randomBytes(8).toString("HEX"),
    title,
    likes,
    category,
  };
}
