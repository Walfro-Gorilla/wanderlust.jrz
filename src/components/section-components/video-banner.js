import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoBanner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

			// youtube-bg se edita el link de youtube en el main.js
    return  <div className="video-banner-area youtube-bg"> 
			  <div className="video-banner-content-wrap">
			    <div className="container">    
			      <div className="video-banner-content text-center">
			        <h2>Reconecta con la Naturaleza</h2>
			        <h3 className="main-title">Enamorate de Chihuahua!</h3>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default VideoBanner