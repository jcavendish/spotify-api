import { Request, Response } from "express";
import connection from "../../database/connection";

export default async function CreateCategory(
  request: Request,
  response: Response
) {
  const { label, code } = request.body;
  const [id] = await connection("categories").insert({ label, code });
  console.log(id);
  return response.sendStatus(204);
}
