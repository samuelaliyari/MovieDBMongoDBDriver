import { ObjectId } from "mongodb"
import { getDB } from "./DB.js"
import { makeMovie } from "../Domain/index.js";




// ################GET ALL DOCUMENTS OF A COLLECTION###################

export const getAll = async (collection) => {
    const db = await getDB();
    const allMovies = await db.collection(collection).find({}).toArray();
    return allMovies;
}

// ################### GET A DOCUMENT USING ID ########################

export const getById = async (collection, id) => {
    const db = await getDB();
    const result = await db.collection(collection).findOne({ _id: ObjectId.createFromHexString(id) });
    return result;
}

// ################ SEARCHING A TITLE USING CLIENT INPUT ###############

export const searchByKeyword = async (collection, input) => {
    const db = await getDB();

    const result = await db.collection(collection).find({ title: { $regex: input, $options: "i" } }).toArray();
    return result;
}

// ############ DELETE A DOCUMENT FROM A COLLECTION USING ID ############

export const deleteOneByID = async (collection, movieId) => {
    const db = await getDB();
    const result = await db.collection(collection).findOneAndDelete({ _id: ObjectId.createFromHexString(movieId) })
    return result
}

// ############ INSERT A NEW DOCUMENT (FAVORITES OR ADD MOVIE) ###########

export const insertOne = async (collection, movieNew) => {
    const db = await getDB();
    const movie = makeMovie(movieNew)
    const result = await db.collection(collection).insertOne(movie);
    return makeMovie(result);
}

// ########################## EDIT A MOVIE DOCUMENT########################


export const editOne = async (collection, editedMovie) => {
    const movie = makeMovie(editedMovie)
    console.log(movie)
    const db = await getDB();
    const id = editedMovie._id
    const result = await db.collection(collection).findOneAndReplace({ _id: ObjectId.createFromHexString(id) }, movie, { returnDocument: "after" });
    console.log(result)
    return result;
}



export const addToCollection = async (collection, movieId) => {
    const db = await getDB();
    if (collection === "favorites") {
        const movie = await getById("movies", movieId);
        const result = await db.collection(collection).insertOne(movie)
        return result
    }
    else return null
}