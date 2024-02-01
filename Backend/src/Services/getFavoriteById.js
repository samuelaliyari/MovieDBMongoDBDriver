import { DAO } from "../Data-Access/index.js"

// ######################################################################

export const getFavoriteByID = async (movieID) => {
    const favorite = await DAO.getById("favorites", movieID);
    return favorite;
} 