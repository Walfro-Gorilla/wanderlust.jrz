import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TourDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="tour-details-area mg-top--70">
              <div className="tour-details-gallery">
                <div className="container-bg bg-dark-blue">
                  <div className="container">
                    <div className="gallery-filter-area row">
                      <div className="gallery-sizer col-1" />
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                        <div className="tp-gallery-item-img">
                          <div className="thumbnails">
                            <img src={publicUrl+"assets/img/tour-details/1.png"} alt="image" />
                            <div className="video-popup-btn">
                              <a href="https://www.youtube.com/watch?v=HmUwRFjLOqY" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-3 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/2.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/3.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/4.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/5.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/6.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-4">
                        <div className="details">
                          <p className="location mb-0"><i className="fa fa-map-marker" />Chihuahua</p>
                          <h4 className="title">Basaseachi & Creel</h4>
                          <p className="content">¡de fin de semana!</p>
                          
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.3</span>
                          </div>
                          <div className="all-tags">
                            <a href="#">Eco-aventura</a>
                            <a href="#">Tour</a>
                            <a href="#">Naturaleza</a>
                            <a href="#">Sierra</a>
                            <a href="#">Creel</a>
                            <a href="#">Basaseachi</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8">
                        <div className="book-list-warp">
                          <p className="book-list-content">¡Aparta YA! Obten tu lugar antes de que sea demasiado tarde.</p>
                          <div className="tp-price-meta">
                            <p>Precio x Viajero</p>
                            <h2>2300 <small>$</small></h2>
                          </div>
                        </div>
                        <ul className="tp-list-meta border-tp-solid">
                          <li className="ml-0"><i className="fa fa-calendar-o" /> 16-19 Sep</li>
                          <li><i className="fa fa-clock-o" /> 3 Dias 2 Noches</li>
                          <li><i className="fa fa-users" />Ocupacion de 2,3 y 4</li>
                          <li><i className="fa fa-snowflake-o" /> Eco-Turismo</li>
                          <li><i className="fa fa-star" /> 4.3</li>
                        </ul>
                      </div>   
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tour-details-wrap">
                      <h4 className="single-page-small-title">Reconecta con la Naturaleza</h4>
                      <p>
                        Este tour esta especialmente hecho para que reconectes de nuevo con la naturaleza, visitando los lugares
                        mas hermosos y emblematicos de la sierra Tarahumara de Chihuahua.
                      </p>
                      <p>
                        Descenderemos a las faldas de la majestuosa Cascada de Basaseachi y contemplaremos sus mas de 240 m de caida libre, acamparemos
                        en la reserva natural Rancho San Lorenzo en Basaseachi no sin antes tener nuestra lunada con fogata. Pasearemos por el centro 
                        del pueblo magico Creel y degustaremos de sus comidas y artesanias. Visitaremos sus alrededores como la Casca de Cusarare, 
                        Lago Arareko, Valle de las Ranas y la Villa Tarahumara.
                      </p>
                      <p>
                        Podras abordar el Ch-P (El Chepe pa' los compas) y visitar el Divisadero y sus hermosas Barrancas del Cobre, te sorprendera
                        las inmensas barrancas que envuelven el parque aventura, y sus extremas actividades como tirolesa, via ferrtea, teleferico, zip-ride y mas...
                      </p>
                      <div className="package-included-area">
                        <h4 className="single-page-small-title">¿Que Incluye?</h4>
                        <div className="row">                          
                          
                          <div className="col-xl-3 col-sm-3">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/17.png"} alt="icons" />
                              <h6>transporte</h6>
                              <p>Autbus ida y vuelta</p>
                            </div>
                          </div>
                          
                          <div className="col-xl-3 col-sm-3">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/19.png"} alt="icons" />
                              <h6>Camping</h6>
                              <p>1 noche en Basaseachi</p>
                            </div>
                          </div>

                          <div className="col-xl-3 col-sm-3">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/16.png"} alt="icons" />
                              <h6>Hsopedaje</h6>
                              <p>1 noche en Creel</p>
                            </div>
                          </div>

                          <div className="col-xl-3 col-sm-3">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/20.png"} alt="icons" />
                              <h6>Staff</h6>
                              <p>Ayudandote en tu viaje</p>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="package-included-location">
                        <h4 className="single-page-small-title">Tu Itinerario</h4>
                        <div className="row">
                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog">
                              <div className="p-list">
                                <div className="list">1</div>
                                <p>Dia 1</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/8.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Llegada a Basaseachi</h4>
                                <p className="content">Despues de degustar un rico desayuno en el poblado de Basaseachi, nos dispondremos a descender la cascada.</p>
                                <a className="btn-read-more" href="#"><span>Ver Mas<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog">
                              <div className="p-list">
                                <div className="list">2</div>
                                <p>Dia 2</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/1.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Relajate &amp; Explora</h4>
                                <p className="content">Pasearemos por el centro de Creel y visitaremos sus hermosos alrededores como Lago Arareko, Casca Cusarare, entre mas.</p>
                                <a className="btn-read-more" href="#"><span>Ver Mas<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog single-blog-after-none">
                              <div className="p-list">
                                <div className="list">3</div>
                                <p>Dia 3</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/9.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Emocion &amp; Aventura</h4>
                                <p className="content">Visitaremos las hermosas Barrancas del Cobre y su Parque Aventura, con sus tirolesas, teleferico y zip'rider y mas.</p>
                                <a className="btn-read-more" href="#"><span>Ver Mas<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div className="host-area">
                        <div className="single-host-wrap text-center">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/client/02.png"} alt="img" />
                          </div>
                          <h4>Walfre de  Wanderlust Jrz</h4>
                          <p>I'm your Atlas Obscura Trip Coordinator. Since 2016, Atlas Obscura has been offering unusual trips to the world’s most extraordinary places. Our itineraries are developed in close collaboration with the locals and insiders who host them—our global community of explorers</p>
                          <p> Felicity Roberts will be leading your trip. A rural Newfoundlander, certified herbalist, farmer, writer, wild food advocate, and self relic, Felicity is most on the barrens cutting heather to dye wool or hanging off the edge</p>
                          <a className="btn btn-yellow" href="#">Contact Host</a>
                        </div>
                      </div> */}

                      <div className="service-location-map">
                        <h4 className="single-page-small-title">Lugar a Visitar</h4>
                        <div className="service-location-map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14073.72723580026!2d-108.25875017383981!3d28.13334009447538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c727cfd361ab61%3A0xd6e8093f87c1a3e9!2s33326%20Basaseachi%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1631379705326!5m2!1ses-419!2smx" />
                        </div>
                      </div>
                      <div className="comments-area tour-details-review-area">
                        <h4 className="comments-title">Comentarios de Viajeros</h4>
                        <ul className="comment-list mb-0">
                          <li>
                            <div className="single-comment-wrap">
                              <div className="thumb">
                                <img src="assets/img/client/2.png" alt="img" />
                              </div>
                              <div className="content">
                                <h4 className="title">Ziria Marlenne</h4>
                                <span className="date">18 August 2020</span>
                                <div className="tp-review-meta">
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                </div>
                                <p>El mejor trato💓 súper buena onda!! Recomendadoss</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-comment-wrap">
                              <div className="thumb">
                                <img src="assets/img/client/3.png" alt="img" />
                              </div>
                              <div className="content">
                                <h4 className="title">Miguel Osornio</h4>
                                <span className="date">17 SEP 2019</span>
                                <div className="tp-review-meta">
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                </div>
                                <p>
                                  sin duda una muy experiencia,el servicio la atencion,y sobre todo la divercion que te hacen pasar.el hotel muy bien los traslados excelente.
                                  gracias por su servicio.recomendado
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="btn-wrapper text-right mt-3">
                          <a className="btn-read-more" href="https://www.facebook.com/Wanderlust.Viaja/reviews"><span>Mas Opiniones<i className="la la-arrow-right" /></span></a>
                        </div>
                      </div>
                      {/* <div className="location-review-area">
                        <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                          <div className="row">
                            <div className="col-lg-6"><h4 className="single-page-small-title">Write A Review</h4></div>
                            <div className="col-lg-6">
                              <div className="tp-review-meta text-lg-right">
                                <span className="mr-3 ml-0">Assigned Rating</span>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Name</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Email</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-lg-12">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Comments</span>
                                <textarea defaultValue={""} />
                              </label>
                            </div>
                            <div className="col-12">
                              <a className="btn btn-yellow" href="#">Send</a>
                            </div>
                          </div>
                        </form>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar-area sidebar-area-4">
                      <div className="widget tour-list-widget">
                        <div className="widget-tour-list-meta">
                          <div className="single-widget-search-input-title"><i className="fa fa-user" /> Nombre</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Nombre" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> Email</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Email" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-phone" /> Celular</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Celular" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Fecha</div>
                          <div className="single-widget-search-input">
                            <input type="text" className="departing-date custom-select" placeholder="Ida" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Fecha</div>
                          <div className="single-widget-search-input">
                            <input type="text" className="returning-date custom-select" placeholder="Regreso" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-keyboard-o" /> Mensaje</div>
                          <div className="single-widget-search-input">
                            <textarea placeholder="Escribe algo..." defaultValue={""} />
                          </div>
                          <div className="text-lg-center text-left">
                            <a className="btn btn-yellow" href="#">Reserva YA<i className="fa fa-paper-plane" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="widget_ads">
                        <a href="#"><img className="w-100" src={publicUrl+"assets/img/others/01.png" }alt="img" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default TourDetails