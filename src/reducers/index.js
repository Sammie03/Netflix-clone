import {
    GET_ALL_TRENDING_FILMS,
    TOP_RATED_MOVIES,
    POPULAR_MOVIES,
    TOP_10_MOVIES,
    UPCOMING_MOVIES,
    TV_SHOWS,
    TOP_10_TV_SHOWS,
    TRENDING_TV_SHOWS,
    TOP_RATED_TV_SHOWS
} from "../actions/types";

const INITIAL_STATE = {
    trendingFilms: [],
    topRatedMovies: [],
    popularMovies: [],
    top10Movies: [],
    upcomingMovies: [],
    tvShows: [],
    top10TvShows: [],
    trendingTvShows: [],
    topRatedTvShows: []
}

export const homePageFilms = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_TRENDING_FILMS:
            return {
                ...state,
                trendingFilms: payload
            };
        case TOP_RATED_MOVIES:
            return {
                ...state,
                topRatedMovies: payload
            };
        case POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: payload
            };
        case TOP_10_MOVIES:
            return {
                ...state,
                top10Movies: payload
            };
        case UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: payload
            };
        case TV_SHOWS:
            return {
                ...state,
                tvShows: payload
            };
        case TOP_10_TV_SHOWS:
            return {
                ...state,
                top10TvShows: payload
            };
        case TRENDING_TV_SHOWS:
            return {
                ...state,
                trendingTvShows: payload
            };
        case TOP_RATED_TV_SHOWS:
            return {
                ...state,
                topRatedTvShows: payload
            };
        default:
            return state;
    }
}