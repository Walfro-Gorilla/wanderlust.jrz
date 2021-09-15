import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Intro extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="intro-area pd-top-112">
				  <div className="container">
				    <div className="row">
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">
				          <h4 className="intro-title">
				            <span className="intro-count">01</span>
				            <Link to="/about">Elije tu Fecha</Link>
				          </h4>
				          <p>Escapate a los maravillos lugares que la sierra de Chihuahua tiene para ti.</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.2s">
				          <h4 className="intro-title">
				            <span className="intro-count">02</span>
				            <Link  to="/about">Compra en Linea</Link>
				          </h4>
				          <p>Tenemos los mejores precios en linea y con las mejores formas de pago.</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.6s" data-wow-delay="0.3s">
				          <h4 className="intro-title">
				            <span className="intro-count">03</span>
				            <Link to="/about">Relajate</Link>
				          </h4>
				          <p>solo queda esperar y preprararte para tu proxima aventura con nostors.</p>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>

        }
}

export default Intro