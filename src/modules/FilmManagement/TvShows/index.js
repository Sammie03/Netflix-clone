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

    useEffect(() => {
        const fetchTvShows = async () => {
            try {
                const response = await axios.get(TV_SHOWS_API);
                const data = response.data;
                dispatch(getTvShows(data))
            } catch (error) {
                console.log(error.message)
            }
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
