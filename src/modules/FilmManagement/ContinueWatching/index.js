import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPopularMovies } from '../../../actions/index';
import { POPULAR_MOVIES_API } from './api';
import { useDispatch } from 'react-redux';
import FilmDisplayContainer from '../../../components/FilmDisplayContainer';
import axios from 'axios';
import './style.scss'

const ContinueWatching = ({ user }) => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(({ homePageFilms }) => homePageFilms.popularMovies && homePageFilms.popularMovies.results);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await axios.get(POPULAR_MOVIES_API);
                const data = response.data;
                dispatch(getPopularMovies(data))
            } catch (error) {
                console.log(error.message)
            }
        }
        return fetchPopularMovies;
    }, [dispatch]);



    return (
        <div className="continue-watching-container film-container-positive-margin">
            <FilmDisplayContainer
                sectionTitle={`Continue Watching For ${user}`}
                sectionFilms={popularMovies}
            />
        </div>
    )
}

export default ContinueWatching;
