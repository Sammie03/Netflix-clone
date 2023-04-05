import { TMDB_API_KEY } from "../../../Utils/api"

const API_KEY = TMDB_API_KEY

export const TOP_10_MOVIES_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`


