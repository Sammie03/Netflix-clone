import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faThumbsUp, faAngleDown, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import { sliderSettings } from '../../Utils/slider';
import './style.scss'


const FilmDisplayContainer = ({ sectionTitle, sectionFilms }) => {
    return (
        <div className="film-container negative-margin">
            <span className="section-title">
                {sectionTitle}
            </span>
            <div className="section-cards-container">
                <Slider {...sliderSettings} className="sliderStyles">
                    {sectionFilms && sectionFilms.map(({ poster_path, backdrop_path, id }) => {
                        return (
                            <div className="section-cards" key={id}>
                                <img
                                    src={poster_path !== null ? `https://image.tmdb.org/t/p/w500/5` : `https://image.tmdb.org/t/p/w500/5`}
                                    width={218}
                                    height={130}
                                    alt="film-poster"
                                    style={{ borderRadius: '6px' }}
                                    className="film-poster"
                                />
                                <div className="movie-details-container">
                                    <div className="movie-details-inner-container">
                                        <div className="movie-details">
                                            <div
                                                className="rounded-icons-container white-background"
                                                style={{ border: 'none' }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPlay}
                                                    style={{ fontSize: '11px', color: '#000' }}
                                                />
                                            </div>
                                            <div className="rounded-icons-container left-margin">
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                    style={{ fontSize: '11px', color: '#fff' }}
                                                />
                                            </div>
                                            <div className="rounded-icons-container left-margin">
                                                <FontAwesomeIcon
                                                    icon={faThumbsUp}
                                                    style={{ fontSize: '11px', color: '#fff' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="film-ageRating-duration">
                                            <div className=""><span>18+</span></div>
                                            <span className='left-margin'>2h 11m</span>
                                            <div className="left-margin"><span>HD</span></div>
                                        </div>
                                        <div className="film-genre">
                                            <span>Action</span>
                                            <FontAwesomeIcon
                                                icon={faCircleDot}
                                                style={{ fontSize: '6px', color: '#000', marginLeft: '8px' }}
                                            />
                                            <span className='left-margin'>Thriller</span>
                                            <FontAwesomeIcon
                                                icon={faCircleDot}
                                                style={{ fontSize: '6px', color: '#000', marginLeft: '8px' }}
                                            />
                                            <span className='left-margin'>Crime</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="rounded-icons-container">
                                            <FontAwesomeIcon
                                                icon={faAngleDown}
                                                style={{ fontSize: '11px', color: '#fff' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default FilmDisplayContainer;
