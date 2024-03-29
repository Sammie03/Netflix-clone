import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllTrendingFilms } from '../../../actions/index';
import { ALL_TRENDING_FILMS_API } from './api';
import FilmDisplayContainer from '../../../components/FilmDisplayContainer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import './style.scss'


const AllTrendingFilms = () => {
    const dispatch = useDispatch();
    const trendingFilms = useSelector(({ homePageFilms }) => homePageFilms.trendingFilms && homePageFilms.trendingFilms.results);
    console.log(trendingFilms, 'see trending films')
    const [mouseOnFilm, setMouseOnFilm] = useState(false);
    let responseStatusCode = 444;


    const fetchAllTrendingFilms = async () => {
        try {
            const response = await axios.get(ALL_TRENDING_FILMS_API);
            const data = response && response.data;
            dispatch(getAllTrendingFilms(data))
            responseStatusCode = response.status || 200
        } catch (error) {
            console.log(error.message)
            responseStatusCode = error.status || 500
        }
        return { statusCode: responseStatusCode }
    }

    useEffect(() => {
        fetchAllTrendingFilms()
    }, [dispatch]);


    return (
        <div className="all-trending-films-container">
            <FilmDisplayContainer
                sectionTitle="Trending Now"
                sectionFilms={trendingFilms}
            />
        </div>
    )
}

export default AllTrendingFilms;
