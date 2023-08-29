import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTop10TvShows } from '../../../actions/index';
import { TOP_10_TV_SHOWS_API } from './api';
import { useDispatch } from 'react-redux';
import Top10FilmDisplayContainer from '../../../components/Top10FilmDisplayContainer';
import axios from 'axios';
import './style.scss'

const Top10TvShows = () => {
    const dispatch = useDispatch();
    const top10TvShows = useSelector(({ homePageFilms }) => homePageFilms.top10TvShows && homePageFilms.top10TvShows.results);
    let responseStatusCode = 444;

    useEffect(() => {
        const fetchTop10TvShows = async () => {
            try {
                const response = await axios.get(TOP_10_TV_SHOWS_API);
                const data = response.data;
                responseStatusCode = response.status || 200
                dispatch(getTop10TvShows(data))
            } catch (error) {
                console.log(error.message)
                responseStatusCode = error.status || 500
            }
            return { statusCode: responseStatusCode }
        }
        return fetchTop10TvShows;
    }, [dispatch]);



    return (
        <div className="top-10-tv-shows-container film-container-positive-margin">
            <Top10FilmDisplayContainer
                sectionTitle="Top 10 TV Shows in Nigeria Today"
                sectionFilms={top10TvShows}
            />
        </div>
    )
}

export default Top10TvShows;
