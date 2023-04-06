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

    useEffect(() => {
        const fetchTopRatedTvShows = async () => {
            try {
                const response = await axios.get(TOP_RATED_TV_SHOWS_API);
                const data = response.data;
                dispatch(getTopRatedTvShows(data))
            } catch (error) {
                console.log(error.message)
            }
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
