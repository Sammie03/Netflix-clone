import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTrendingTvShows } from '../../../actions/index';
import { TRENDING_TV_SHOWS_API } from './api';
import FilmDisplayContainer from '../../../components/FilmDisplayContainer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './style.scss'

const TrendingTvShows = () => {
    const dispatch = useDispatch();
    const trendingTvShows = useSelector(({ homePageFilms }) => homePageFilms.trendingTvShows && homePageFilms.trendingTvShows.results);
    let responseStatusCode = 444;

    useEffect(() => {
        const fetchTrendingTvShows = async () => {
            try {
                const response = await axios.get(TRENDING_TV_SHOWS_API);
                const data = response.data;
                dispatch(getTrendingTvShows(data))
                responseStatusCode = response.status || 200
            } catch (error) {
                console.log(error.message)
                responseStatusCode = error.status || 500
            }
            return { statusCode: responseStatusCode }
        }
        return fetchTrendingTvShows;
    }, [dispatch]);


    return (
        <div className="trending-tv-shows-container film-container-positive-margin">
            <FilmDisplayContainer
                sectionTitle="Trending TV Shows"
                sectionFilms={trendingTvShows}
            />
        </div>
    )
}

export default TrendingTvShows;
