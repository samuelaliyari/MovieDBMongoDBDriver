import { services } from "../Services/index.js"




export const getOneFavoriteByIdCtrl = async (req, res) => {
    try {
        const movie = await services.getFavoriteByID(req.params.movieId)
        res.json({ success: true, result: movie })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}