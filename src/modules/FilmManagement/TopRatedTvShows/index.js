import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTopRatedTvShows } from '../../../actions/index';
import { TOP_RATED_TV_SHOWS_API } from './api';
import FilmDisplayContainer from '../../../components/FilmDisplayContainer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './style.scss'

const TopRatedTvShows = () => {
    const dispatch = useDispatch();
    const topRatedTvShows = useSelector(({ homePageFilms }) => homePageFilms.topRatedTvShows && homePageFilms.topRatedTvShows.results);
    let responseStatusCode = 444;

    console.log(topRatedTvShows, 'see top rated shows')

    useEffect(() => {
        const fetchTopRatedTvShows = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB}&language=en-US&page=1`);
                const data =  response && response.data;
                console.log(data, 'see top rated data')
                dispatch(getTopRatedTvShows(data))
                responseStatusCode = response.status || 200
            } catch (error) {
                console.log(error.message)
                responseStatusCode = error.status || 500
            }
            return { statusCode: responseStatusCode }
        }
        return fetchTopRatedTvShows;
    }, [dispatch]);


    return (
        <div className="top-rated-tv-shows-container film-container-positive-margin">
            <FilmDisplayContainer
                sectionTitle="Top Rated TV Shows"
                sectionFilms={topRatedTvShows}
            />
        </div>
    )
}

export default TopRatedTvShows;
