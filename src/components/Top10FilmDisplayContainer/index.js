import React from 'react'
import { numbersIcon } from '../../Utils/methods'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faThumbsUp, faAngleDown, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import { sliderSettings } from '../../Utils/slider';
import './style.scss'

const Top10FilmDisplayContainer = ({ sectionTitle, sectionFilms }) => {
    return (
        <div className="top10-film-container">
            <span className="section-title">
                {sectionTitle}
            </span>
            <div className="section-cards-container">
                <Slider {...sliderSettings} className="sliderStyles">
                    {sectionFilms && sectionFilms.map(({ poster_path, backdrop_path, id }, index) => {
                        if (index <= 9) {
                            return (
                                <div className="section-cards" key={id}>
                                    <div className="flexed-container">
                                        <img
                                            src={numbersIcon[index]}
                                            alt="number-icon"
                                            width={208}
                                            height={130}
                                            style={{ position: 'relative' }}
                                            className="numberIcons"
                                        />
                                        <img
                                            src={poster_path !== null ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                                            width={135}
                                            height={130}
                                            alt="film-poster"
                                            style={{ borderRadius: '6px', zIndex: '1000', position: 'relative', marginLeft: '-80px' }}
                                            className="top10Film-fliers"
                                        />
                                    </div>

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
                        }
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Top10FilmDisplayContainer;
