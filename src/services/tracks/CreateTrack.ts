import { Request, Response } from "express";
import Track from "../../models/Track";
import connection from "../../database/connection";
import Knex from "knex";

export default async function CreateTrack(
  request: Request,
  response: Response
) {
  return await connection.transaction((trx) =>
    insertTrack(trx, request.body, response)
  );
}

async function insertTrack(
  trx: Knex.Transaction,
  track: Track,
  response: Response
) {
  try {
    const [track_id] = await connection("tracks")
      .transacting(trx)
      .insert({ title: track.title, artist: track.artist });

    await handleTrackCategories(trx, track.categories, track_id);

    trx.commit;
    return response.json({ id: track_id });
  } catch (error) {
    console.log("Error while creating track " + error);
    trx.rollback;
  }
}

async function handleTrackCategories(
  trx: Knex.Transaction,
  categories: string[],
  track_id: number
) {
  try {
    const responseIds = await connection("categories")
      .transacting(trx)
      .select("id")
      .whereIn("code", categories);

    await insertTrackCategories(trx, responseIds, track_id);
  } catch (error) {
    console.log("Error while searching categories " + error);
  }
}

async function insertTrackCategories(
  trx: Knex.Transaction,
  responseIds: any[],
  track_id: number
) {
  const promises = responseIds.map(async (responseId) => {
    try {
      const category_id = responseId.id;

      console.log(
        `Track id=${track_id} and category id=${category_id}, successfully added`
      );

      return await connection("tracks_categories")
        .transacting(trx)
        .insert({ track_id, category_id });
    } catch (error) {
      console.log("Error while adding correspondence table " + error);
    }
  });
  await Promise.all(promises);
}
