
export const makeFavorite = ({
    title,
    year,
    rated,
    runtime,
    countries,
    genres,
    director,
    writers,
    actors,
    plot,
    poster,
    imdb,
    tomato,
    metacritic,
    awards,
    type
}) => {
    if (typeof title === "undefined" || typeof title !== "string" || title.trim() === "") {
        throw new Error("The Title Value is invalid!")
    }
    if (typeof year === "undefined" || typeof year !== "number" || year === 0) {
        throw new Error("The Year Value is invalid!")
    }
    if (typeof runtime === "undefined" || typeof runtime !== "number" || runtime === 0) {
        runtime = 120
    }

    if (!Array.isArray(genres) || genres.length === 0) {
        throw new Error("The Genre Value is invalid!")
    }
    if (typeof director === "undefined" || typeof director !== "string" || director.trim() === "") {
        throw new Error("The Director Value is invalid!")
    }
    if (typeof plot === "undefined" || typeof plot !== "string" || plot.trim() === "") {
        throw new Error("The Description Value is invalid!")
    }
    if (typeof poster === "undefined" || typeof poster !== "string" || poster.trim() === "" || !poster.includes("http")) {
        throw new Error("The Poster Url Value is invalid!")
    }
    if (typeof imdb.rating === "undefined" || typeof imdb.rating !== "number") {
        throw new Error("The IMDBrating Value is invalid!")
    }
    return {
        title,
        year,
        rated,
        runtime,
        countries,
        genres,
        director,
        writers,
        actors,
        plot,
        poster,
        imdb,
        tomato,
        metacritic,
        awards,
        type
    }
}