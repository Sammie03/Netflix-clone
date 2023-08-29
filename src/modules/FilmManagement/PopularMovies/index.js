import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPopularMovies } from '../../../actions/index';
import { POPULAR_MOVIES_API } from './api';
import { useDispatch } from 'react-redux';
import FilmDisplayContainer from '../../../components/FilmDisplayContainer';
import axios from 'axios';
import './style.scss'

const PopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(({ homePageFilms }) => homePageFilms.popularMovies && homePageFilms.popularMovies.results);
    let responseStatusCode = 444;

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await axios.get(POPULAR_MOVIES_API);
                const data = response.data;
                responseStatusCode = response.status || 200
                dispatch(getPopularMovies(data))
            } catch (error) {
                console.log(error.message)
                responseStatusCode = error.status || 500
            }
            return { statusCode: responseStatusCode }
        }
        return fetchPopularMovies;
    }, [dispatch]);



    return (
        <div className="popular-movies-container film-container-positive-margin">
            <FilmDisplayContainer
                sectionTitle="Popular Movies"
                sectionFilms={popularMovies}
            />
        </div>
    )
}

export default PopularMovies;
