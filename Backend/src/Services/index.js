import { deleteMovieById } from "./deleteMovieById.js";
import { editMovie } from "./editMovie.js";
import { getAllMovies } from "./getAllMovies.js";
import { getMovieByID } from "./getMovieById.js";
import { insertNewMovie } from "./insertNewMovie.js";
import { searchMovieByInput } from "./searchMovieByInput.js";

editMovie
// ######################################################################


export const services = {
    getAllMovies,
    getMovieByID,
    searchMovieByInput,
    insertNewMovie,
    deleteMovieById,
    editMovie
}