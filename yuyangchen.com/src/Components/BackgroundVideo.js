import React, { Component } from 'react';

const videoSource = require('../Assets/Video/river.mp4');  

class BackgroundVideo extends Component {
  render(){
    return(
      <div>
        <video 
            autoPlay="autoplay"
            loop="loop"
            muted
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "50%",
                left: "50%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1",
            }}
        >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video type.
          </video>
      </div>
    )
  }
}


export default BackgroundVideo;
