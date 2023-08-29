import React from 'react'
import ReactPlayer from 'react-player/youtube' 
import './style.scss'

const FullScreenPlayer = ({video}) => {
  return (
    <div className='fullscreen-player-container'>
                 <ReactPlayer 
                // url={video} 
                // url={'https://www.youtube.com/watch?v=pn26zia2_Kk'}
                loop={true}
                volume={1}
                // muted={!volume}
                playing={true}
                width={1450}
                height={815}
                // onStart={()=>{setShowVolumeIcon(true)}}
                />
    </div>
  )
}

export default FullScreenPlayer;
