import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTvShows } from '../../../actions/index';
import { TV_SHOWS_API } from './api';
import { useDispatch } from 'react-redux';
import FilmDisplayContainer from '../../../components/FilmDisplayContainer';
import axios from 'axios';
import './style.scss'

const TvShows = () => {
    const dispatch = useDispatch();
    const tvShows = useSelector(({ homePageFilms }) => homePageFilms.tvShows && homePageFilms.tvShows.results);
    let responseStatusCode = 444;

    useEffect(() => {
        const fetchTvShows = async () => {
            try {
                const response = await axios.get(TV_SHOWS_API);
                const data =  response && response.data;
                dispatch(getTvShows(data))
                responseStatusCode = response.status || 200
            } catch (error) {
                console.log(error.message)
                responseStatusCode = error.status || 500
            }
            return { statusCode: responseStatusCode }
        }
        return fetchTvShows;
    }, [dispatch]);



    return (
        <div className="tv-shows-container film-container-positive-margin">
            <FilmDisplayContainer
                sectionTitle="TV Shows"
                sectionFilms={tvShows}
            />
        </div>
    )
}

export default TvShows;
