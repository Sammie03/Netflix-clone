import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTopRatedMovies } from '../../../actions/index';
import { TOP_RATED_MOVIES_API } from './api';
import { useDispatch } from 'react-redux';
import FilmDisplayContainer from '../../../components/FilmDisplayContainer';
import axios from 'axios';
import './style.scss'

const TopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(({ homePageFilms }) => homePageFilms.topRatedMovies && homePageFilms.topRatedMovies.results);
    let responseStatusCode = 444;

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            try {
                const response = await axios.get(TOP_RATED_MOVIES_API);
                const data = response.data;
                responseStatusCode = response.status || 200
                dispatch(getTopRatedMovies(data))
            } catch (error) {
                console.log(error.message)
                responseStatusCode = error.status || 500
            }
            return { statusCode: responseStatusCode }
        }
        return fetchTopRatedMovies;
    }, [dispatch]);



    return (
        <div className="top-rated-movies-container film-container-positive-margin">
            <FilmDisplayContainer
                sectionTitle="Top Rated Movies"
                sectionFilms={topRatedMovies}
            />
        </div>
    )
}

export default TopRatedMovies;
