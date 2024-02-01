import { DAO } from "../Data-Access/index.js"

// ######################################################################

export const insertNewFavorite = async (movieId) => {
    const movie = await DAO.addToCollection("favorites", movieId);
    return movie;
}