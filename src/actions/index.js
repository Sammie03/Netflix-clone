import {
    GET_ALL_TRENDING_FILMS,
    TOP_RATED_MOVIES,
    POPULAR_MOVIES,
    TOP_10_MOVIES,
    UPCOMING_MOVIES,
    TV_SHOWS,
    TOP_10_TV_SHOWS,
    TOP_RATED_TV_SHOWS,
    TRENDING_TV_SHOWS
} from './types'

export const getAllTrendingFilms = data => {
    return {
        type: GET_ALL_TRENDING_FILMS,
        payload: data
    }
}

export const getTopRatedMovies = data => {
    return {
        type: TOP_RATED_MOVIES,
        payload: data
    }
}

export const getPopularMovies = data => {
    return {
        type: POPULAR_MOVIES,
        payload: data
    }
}

export const getTop10Movies = data => {
    return {
        type: TOP_10_MOVIES,
        payload: data
    }
}

export const getUpcomingMovies = data => {
    return {
        type: UPCOMING_MOVIES,
        payload: data
    }
}

export const getTvShows = data => {
    return {
        type: TV_SHOWS,
        payload: data
    }
}

export const getTop10TvShows = data => {
    return {
        type: TOP_10_TV_SHOWS,
        payload: data
    }
}

export const getTrendingTvShows = data => {
    return {
        type: TRENDING_TV_SHOWS,
        payload: data
    }
}

export const getTopRatedTvShows = data => {
    return {
        type: TOP_RATED_TV_SHOWS,
        payload: data
    }
}

