import { DAO } from "../Data-Access/index.js"

// ######################################################################

export const insertNewMovie = async (movieNew) => {
    const movie = await DAO.insertOne("movies", movieNew);
    return movie;
}