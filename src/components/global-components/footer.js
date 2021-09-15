import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
  				<footer className="footer-area" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/2.png)'}}>
				  <div className="container">
				    <div className="row">
				      <div className="col-lg-4 col-md-6">
				        <div className="footer-widget widget">
				          <div className="about_us_widget">
				            <Link to="/" className="footer-logo"> 
				              <img src={publicUrl+"assets/img/logo.png"} alt="footer logo" />
				            </Link>
				            <p>Somo un grupo de locos amantes de los viajes, conciertos, playas, perriots y de hacer amigos cada que salimos de Juaritos 💚</p>
				            <ul className="social-icon">
				              <li>
				                <a className="facebook" href="https://www.facebook.com/Wanderlust.Viaja" target="_blank"><i className="fa fa-facebook  " /></a>
				              </li>				              
				              <li>
				                <a className="pinterest" href="https://www.instagram.com/wanderlustjrz.oficial/" target="_blank"><i className="fa fa-instagram" /></a>
				              </li>
				            </ul>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget ">
				          <div className="widget-contact">
				            <h4 className="widget-title"></h4>
				            <p>
				              <i className="fa fa-map-marker" /> 
				              <span>Av. Tecnológico 5350, La Cuesta, 32663 Cd Juárez, Chih.</span>
				            </p>
				            <p className="location"> 
				              <i className="fa fa-envelope-o" />
				              <span>Wanderlust.Jrz@Gorilla-Labs.com</span>
				            </p>
				            <p className="telephone">
				              <i className="fa fa-phone base-color" /> 
				              <span>
				                +52 656 571 7070
				              </span>
				            </p>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-2 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Atajos</h4>
				          <ul className="widget_nav_menu  viaje-go-top">
				            <li><Link to="/home-v2">Inicio</Link></li>
				            <li><Link to="/about">Conocenos</Link></li>
				            {/* <li><Link to="/destination-list">Destination</Link></li>
				            <li><Link to="/tour-details">Tours</Link></li>
				            <li><Link to="/blog">Blog</Link></li>
				            <li><Link to="/contact">Contact</Link></li> */}
				          </ul>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Instagram Gallery</h4>
				          <ul className="widget-instagram-feed">
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/1.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/2.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/3.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/4.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/5.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/6.png"} alt="img" /></a></li>
				          </ul>
				        </div>
				      </div>
				    </div>
				  </div>
				  <div className="copyright-inner">
				    <div className="copyright-text">
				      © Wanderlust Jrz 2021 Todos los derechos reservados. Impulsado por <a href="https://gorilla-labs-623e2.web.app/" target="_blank"><i className="fa fa-heart" /><span>Gorilla-Labs.</span></a>
				    </div>
				  </div>
				</footer>


        )
    }
}


export default Footer_v1