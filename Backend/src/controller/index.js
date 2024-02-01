import { deleteMovieByIdCtrl } from "./deleteMovieByIdCtrl.js";
import { editMovieCtrl } from "./editMovieCtrl.js";
import { getAllMoviesCtrl } from "./getAllMoviesCtrl.js";
import { getOneMovieByIdCtrl } from "./getOneMovieByIdCtrl.js";
import { insertNewMovieCtrl } from "./insertNewMovieCtrl.js";
import { searchMovieByInputCtrl } from "./searchMovieByInputCtrl.js";




export const controller = {
    getAllMovies: getAllMoviesCtrl,
    getOneMovieByID: getOneMovieByIdCtrl,
    searchMovieByInput: searchMovieByInputCtrl,
    insertNewMovie: insertNewMovieCtrl,
    deleteMovieById: deleteMovieByIdCtrl,
    editMovie: editMovieCtrl
}