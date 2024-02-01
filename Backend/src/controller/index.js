import { deleteFavoriteByIdCtrl } from "./deleteFavoriteByIdCtrl.js";
import { deleteMovieByIdCtrl } from "./deleteMovieByIdCtrl.js";
import { editFavoriteCtrl } from "./editFavoriteCtrl.js";
import { editMovieCtrl } from "./editMovieCtrl.js";
import { getAllFavoritesCtrl } from "./getAllFavoritesCtrl.js";
import { getAllMoviesCtrl } from "./getAllMoviesCtrl.js";
import { getOneFavoriteByIdCtrl } from "./getOneFavoriteByIdCtrl.js";
import { getOneMovieByIdCtrl } from "./getOneMovieByIdCtrl.js";
import { insertNewFavoriteCtrl } from "./insertNewFavoriteCtrl.js";
import { insertNewMovieCtrl } from "./insertNewMovieCtrl.js";
import { searchFavoriteByInputCtrl } from "./searchFavoriteByInputCtrl.js";
import { searchMovieByInputCtrl } from "./searchMovieByInputCtrl.js";

// ##################################################################

export const controller = {
    searchFavoriteByInput: searchFavoriteByInputCtrl,
    insertNewFavorite: insertNewFavoriteCtrl,
    getOneFavoriteById: getOneFavoriteByIdCtrl,
    getAllFavorites: getAllFavoritesCtrl,
    editFavorite: editFavoriteCtrl,
    deleteFavoriteById: deleteFavoriteByIdCtrl,
    getAllMovies: getAllMoviesCtrl,
    getOneMovieByID: getOneMovieByIdCtrl,
    searchMovieByInput: searchMovieByInputCtrl,
    insertNewMovie: insertNewMovieCtrl,
    deleteMovieById: deleteMovieByIdCtrl,
    editMovie: editMovieCtrl
}