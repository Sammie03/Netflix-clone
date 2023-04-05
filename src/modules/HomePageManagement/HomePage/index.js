import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import NavBar from '../../NavBarManagement';
import Footer from '../../FooterManagement';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import AllTrendingFilms from '../../FilmManagement/AllTrendingFilms';
import TopRatedMovies from '../../FilmManagement/TopRatedMovies';
import PopularMovies from '../../FilmManagement/PopularMovies';
import ContinueWatching from '../../FilmManagement/ContinueWatching';
import Top10Movies from '../../FilmManagement/Top10Movies';
import UpcomingMovies from '../../FilmManagement/UpcomingMovies';
import TvShows from '../../FilmManagement/TvShows';
import Top10TvShows from '../../FilmManagement/Top10TvShows';
import TopRatedTvShows from '../../FilmManagement/TopRatedTvShows';
import TrendingTvShows from '../../FilmManagement/TrendingTvShows';
import { useSelector } from 'react-redux';
import { TMDB_API_KEY } from '../../../Utils/api';
import axios from 'axios';
import YouTube from 'react-youtube';
import './style.scss'

const HomePage = () => {
  const [profileName, setProfileName] = useState('');
  const [profileIcon, setProfileIcon] = useState('');
  const [bannerFilmIndex, setBannerFilmIndex] = useState(0);
  const [playBannerVideo, setPlayBannerVideo] = useState(false);
  const [bannerVideo, setBannerVideo] = useState('');
  const [videoKey, setVideoKey] = useState('');
  const bannerFilms = useSelector(({ homePageFilms }) => homePageFilms.trendingFilms && homePageFilms.trendingFilms.results);

  const generateBannerFilmIndex = () => {
    const random = Math.floor(Math.random() * (20 - 1) + 1);
    setBannerFilmIndex(random);
  }

  const getFilmVideo = async (movie_id) => {
    const Movie_Video_API = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
    try {
      const response = await axios.get(Movie_Video_API);
      const data = response.data;
      const videoKey = data.results[data.results.length - 1].key;
      setVideoKey(videoKey)
      setBannerVideo(`https://www.youtube.com/embed/${videoKey}?loop=1&autoplay=1&controls=0&mute=1`);
      console.log(bannerVideo, 'yes, I ran')
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    let activeProfile = JSON.parse(window.localStorage.getItem("profileDetails"));
    setProfileName(activeProfile[0]);
    setProfileIcon(activeProfile[1]);
  })

  useEffect(() => {
    generateBannerFilmIndex();
  }, [])


  useEffect(() => {
    const bannerVideoPlayer = setTimeout(() => {
      setPlayBannerVideo(true);
      getFilmVideo(bannerFilms && bannerFilms[bannerFilmIndex].id)
    }, 2000);
  });

  const onReady = (event) => {
    event.target.playVideo();
  }

  const opts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      modestbranding: 1,
      autohide: 1,
      showinfo: 0,
      controls: 0
    }
  };

  return (
    <div className='homepage-container'>
      <div
        className="banner-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerFilms && bannerFilms[bannerFilmIndex].backdrop_path})`
        }}
      >
        {
          playBannerVideo ?
            <div className="video-background">
              <div className="video-foreground">
                <iframe width="420" height="315" className=''
                  // src={bannerVideo}
                  allow='autoplay'
                  allowFullScreen
                  >
                </iframe>
{/* 
                <YouTube
                  // videoId={videoKey}
                  opts={opts}
                  onReady={onReady}
                  // onStateChange={this.onStateChange}
                  // className='videoPlayerStyle'
                /> */}
              </div>
            </div> : ''
        }

        <div className="banner-overlay">
          <NavBar profileName={profileName} profileIcon={profileIcon} />
          <div className="banner-details">
            <div className="name-description-btn">
              <span className='video-type'>
                {bannerFilms && bannerFilms[bannerFilmIndex].media_type === 'tv' ?
                  <span className='logo-mediaType'><img src="resources/images/netflix.png" alt="netflix-icon" width={30} height={30} /> <span className='media-type'>SERIES</span></span> :
                  <span className='logo-mediaType'><img src="resources/images/netflix.png" alt="netflix-icon" width={30} height={30} /> <span className='media-type'>FILM</span></span>
                }
              </span><br />
              <span className='title'>
                {bannerFilms && bannerFilms[bannerFilmIndex].media_type === 'tv' ?
                  <span>{bannerFilms && bannerFilms[bannerFilmIndex].name}</span> :
                  <span>{bannerFilms && bannerFilms[bannerFilmIndex].title}</span>
                }
              </span><br /><br />
              <span className='desciption'>{bannerFilms && bannerFilms[bannerFilmIndex].overview}</span><br /><br /><br />
              <div className="btn-container">
                <Button className='play-btn'>
                  <FontAwesomeIcon
                    icon={faPlay}
                    style={{ marginRight: '10px', fontSize: '25px' }}
                  />
                  Play</Button>
                <Button className='more-info-btn'><InfoCircleOutlined style={{ color: "white", fontSize: '24px' }} /> More Info</Button>
              </div>
            </div>
            <div className="volumn-age-container">
              <div className="volumn-age-rate">
                <div className="volume-container"><FontAwesomeIcon icon={faVolumeHigh} /></div>
                <div className="age-rate-container">
                  <div className="white-age-div"></div>
                  <div className="dark-age-div">
                    <span className="">16+</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-section">
        <AllTrendingFilms />
        <TopRatedMovies />
        <ContinueWatching user={profileName} />
        <Top10Movies />
        <TvShows />
        <PopularMovies />
        <UpcomingMovies />
        <Top10TvShows />
        <TopRatedTvShows />
        <TrendingTvShows />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;
