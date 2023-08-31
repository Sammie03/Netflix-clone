import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import NavBar from '../../NavBarManagement';
import Footer from '../../FooterManagement';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faVolumeHigh, faVolumeMute, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
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
import ReactPlayer from 'react-player/youtube'
import FullScreenPlayer from '../../../components/FullScreenPlayer';
import axios from 'axios';
import './style.scss'

const HomePage = () => {
  const [profileName, setProfileName] = useState('');
  const [profileIcon, setProfileIcon] = useState('');
  const [bannerFilmIndex, setBannerFilmIndex] = useState(0);
  const [playBannerVideo, setPlayBannerVideo] = useState(false);
  const [bannerVideo, setBannerVideo] = useState('');
  const [videoKey, setVideoKey] = useState('');
  const [volume, setVolume] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showVolumeIcon, setShowVolumeIcon] = useState(false);
  const bannerFilms = useSelector(({ homePageFilms }) => homePageFilms.top10Movies && homePageFilms.top10Movies.results);

  const generateBannerFilmIndex = () => {
    const random = Math.floor(Math.random() * (20 - 1) + 1);
    setBannerFilmIndex(random);
  }

  const getFilmVideo = async (movie_id) => {
    const Movie_Video_API = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.REACT_APP_TMDB}&language=en-US`
    let responseStatusCode = 444;
    try {
      const response = await axios.get(Movie_Video_API);
      const data =  response && response.data;
      responseStatusCode = response.status || 200
      const videoKey = data.results[data.results.length - 1].key;
      setVideoKey(videoKey)
      setBannerVideo(`https://www.youtube.com/embed/${videoKey}`);
    } catch (error) {
      console.log(error.message)
      responseStatusCode = error.status || 500
    }
    return { statusCode: responseStatusCode }
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
    }, 3000);
  });

  const volumeHandler = () => {
    setVolume(!volume);
  }

  useEffect(() => {
    window.addEventListener("scroll", muteBannerVideo);
    return function cleanup() {
      window.removeEventListener("scroll", muteBannerVideo);
    };
  });

  const muteBannerVideo = () => {
    setVolume(false);
  }

  const showModalHandler = () => {
    setShowModal(true);
  }

  const closeModalHandler = () => {
    setShowModal(false);
  }

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
                <ReactPlayer
                  url={bannerVideo}
                  loop={true}
                  volume={1}
                  muted={!volume}
                  playing={true}
                  onStart={() => { setShowVolumeIcon(true) }}
                />
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
                <a href="/watching" className='play-btn-link'>
                  <Button className='play-btn'>
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{ marginRight: '10px', fontSize: '25px' }}
                    />
                    Play</Button>
                </a>
                <Button
                  className='more-info-btn'
                  onClick={showModalHandler}
                >
                  <InfoCircleOutlined style={{ color: "white", fontSize: '24px' }} />
                  More Info
                </Button>

                <Modal
                  onCancel={closeModalHandler}
                  centered={true}
                  width={750}
                  footer={null}
                  visible={showModal}
                  closeIcon={<FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{ fontSize: '30px', color: 'black' }}
                  />}
                  className='more-info-modal'
                >
                  <div className="more-info-banner">
                      Back to square 1
                  </div>
                  <div className="more-info-film-details">

                  </div>
                </Modal>
                {/* <FullScreenPlayer video={bannerVideo} style={{display: 'none'}}/> */}
              </div>
            </div>
            <div className="volumn-age-container">
              <div className="volumn-age-rate">
                {showVolumeIcon ?

                  volume ?
                    <div className="volume-container" onClick={volumeHandler}><FontAwesomeIcon icon={faVolumeHigh} /></div>
                    :
                    <div className="volume-container" onClick={volumeHandler}><FontAwesomeIcon icon={faVolumeMute} /></div>

                  : ''}

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
