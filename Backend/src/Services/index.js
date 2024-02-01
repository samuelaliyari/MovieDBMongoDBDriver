import { deleteFavoriteById } from "./deleteFavoriteById.js";
import { deleteMovieById } from "./deleteMovieById.js";
import { editFavorite } from "./editFavorite.js";
import { editMovie } from "./editMovie.js";
import { getAllFavorites } from "./getAllFavorites.js";
import { getAllMovies } from "./getAllMovies.js";
import { getFavoriteByID } from "./getFavoriteById.js";
import { getMovieByID } from "./getMovieById.js";
import { insertNewFavorite } from "./insertNewFavorites.js";
import { insertNewMovie } from "./insertNewMovie.js";
import { searchFavoriteByInput } from "./searchFavoriteByInput.js";
import { searchMovieByInput } from "./searchMovieByInput.js";
// ######################################################################


export const services = {
    searchFavoriteByInput,
    insertNewFavorite,
    getAllFavorites,
    getFavoriteByID,
    editFavorite,
    deleteFavoriteById,
    getAllMovies,
    getMovieByID,
    searchMovieByInput,
    insertNewMovie,
    deleteMovieById,
    editMovie
}