import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUpcomingMovies } from '../../../actions/index';
import { UPCOMING_MOVIES_API } from './api';
import FilmDisplayContainer from '../../../components/FilmDisplayContainer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './style.scss'

const UpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(({ homePageFilms }) => homePageFilms.upcomingMovies && homePageFilms.upcomingMovies.results);
    let responseStatusCode = 444;

    const fetchUpcomingMovies = async () => {
        try {
            const response = await axios.get(UPCOMING_MOVIES_API);
            const data = response && response.data;
            dispatch(getUpcomingMovies(data))
            responseStatusCode = response.status || 200
        } catch (error) {
            console.log(error.message)
            responseStatusCode = error.status || 500
        }
        return { statusCode: responseStatusCode }
    }

    useEffect(() => {
        fetchUpcomingMovies();
    }, [dispatch]);

    return (
        <div className="upcoming-movies-container film-container-positive-margin">
            <FilmDisplayContainer
                sectionTitle="Upcoming Movies"
                sectionFilms={upcomingMovies}
            />
        </div>
    )
}

export default UpcomingMovies;
