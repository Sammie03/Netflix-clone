import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTop10Movies } from '../../../actions/index';
import { TOP_10_MOVIES_API } from './api';
import { useDispatch } from 'react-redux';
import Top10FilmDisplayContainer from '../../../components/Top10FilmDisplayContainer';
import axios from 'axios';
import './style.scss'

const Top10Movies = () => {
    const dispatch = useDispatch();
    const top10Movies = useSelector(({ homePageFilms }) => homePageFilms.top10Movies && homePageFilms.top10Movies.results);
    let responseStatusCode = 444;

    useEffect(() => {
        const fetchTop10Movies = async () => {
            try {
                const response = await axios.get(TOP_10_MOVIES_API);
                const data = response.data;
                dispatch(getTop10Movies(data))
                responseStatusCode = response.status || 200
            } catch (error) {
                console.log(error.message)
                responseStatusCode = error.status || 500
            }
            return { statusCode: responseStatusCode }
        }
        return fetchTop10Movies;
    }, [dispatch]);

    return (
        <div className="top-10-movies-container film-container-positive-margin">
            <Top10FilmDisplayContainer
            sectionTitle=" Top 10 Movies in Nigeria Today"
            sectionFilms={top10Movies}
            />
        </div>
    )
}

export default Top10Movies;
