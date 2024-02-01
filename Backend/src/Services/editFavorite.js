import { DAO } from "../Data-Access/index.js";




export const editFavorite = async (editedMovie) => {
    const result = await DAO.editOne("favorites", editedMovie);
    return result;
}
