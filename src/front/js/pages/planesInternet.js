import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/planesInternet.css";

import { Context } from "../store/appContext";
import { CardPlanesInternet } from "../component/cardPlanesInternet";

export const PlanesInternet = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="">
            <div className="header-planes-internet">
                <div className="header-planes-internet-page">
                    <div className="header-planes-internet-imagen">
                        <img src="https://images.pexels.com/photos/6209280/pexels-photo-6209280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de header-planes-internet" />
                    </div>
                    <div className="header-planes-internet-info">
                        <h1 className="planes-internet-tittle">¡Descubrí el plan que cambiará tu forma de navegar!</h1>
                        <p>
                            En Econet Zarcero, llevamos conectividad de vanguardia a tu hogar o negocio con servicios inalámbricos diseñados para ofrecer velocidad,
                            estabilidad y atención cercana. Somos tu aliado local en Zarcero, comprometidos con brindarte la mejor experiencia en internet.
                        </p>
                        <div className="lista-header-planes-internet">
                            <ul className="list-group">
                                <li className="list-group-header-planes-internet">
                                    <i className="fa-solid fa-gauge-high"></i>
                                    <span className="span-subtittle-header¿-planes-internet">Velocidad ultrarrápida: </span>
                                    <span>Olvidate de las esperas: descargas en segundos y streaming sin cortes.</span>
                                </li>
                                <li className="list-group-header-planes-internet">
                                    <i className="fa-solid fa-house-signal"></i>
                                    <span className="span-subtittle-header¿-planes-internet">Conexión estable: </span>
                                    <span>Nuestra tecnología inalámbrica de última generación te brinda una experiencia similar a la fibra óptica, incluso en zonas rurales.</span>
                                </li>
                                <li className="list-group-header-planes-internet">
                                    <i className="fa-solid fa-headset"></i>
                                    <span className="span-subtittle-header¿-planes-internet"> Soporte local 24/7: </span>
                                    <span>Atención personalizada por nuestro equipo en Zarcero: te ayudamos en el momento en que lo necesités.</span>
                                </li>
                                <li className="list-group-header-planes-internet">
                                    <i className="fa-solid fa-screwdriver-wrench"></i>
                                    <span className="span-subtittle-header¿-planes-internet"> Instalación gratis: </span>
                                    <span>Antena lista y funcionando en tiempo récord, para que empieces a navegar ¡hoy mismo!</span>
                                </li>

                            </ul>
                        </div>

                        <h2 className="planes-internet-subtittle">¡Es tu turno de volar alto!</h2>
                        <p className="parrafo-header-planes-internet">¡Solicitá tu plan ahora!</p>
                        <Link to="/contactenos">
                            <button className=" btn-header-planes-internet"> <i className="fa-brands fa-whatsapp fs-3"></i> Whatsapp</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h1 className="planes-internet-tittle">Elige tu Plan Ideal</h1>
                <p className="planes-intro-desc">
                    Encuentra la velocidad perfecta para tu hogar o negocio. Desde 15 Mbps hasta 75 Mbps, tenemos el paquete que se adapta a tu ritmo de vida y a tu presupuesto. Disfruta de <strong>conexión estable</strong>, <strong>soporte técnico local</strong> y <strong>sin contratos de larga duración</strong>.
                    ¿Listo para despegar? Selecciona tu plan y comienza a navegar sin límites hoy mismo.
                </p>
                <div className="paquetes-grid">
                    <CardPlanesInternet megas={15}  titulo={"Plan Básico"} descripcion= "Ideal para navegación web y redes sociales." precio={"17,990"}></CardPlanesInternet>
                    <CardPlanesInternet megas={30}  titulo={"Plan Estándar"} descripcion= "Streaming HD y videollamadas sin interrupciones." precio={"18,990"}></CardPlanesInternet>
                    <CardPlanesInternet megas={50}  titulo={"Plan Plus"} descripcion= "Ideal para gaming y múltiples dispositivos." precio={"19,990"}></CardPlanesInternet>
                    <CardPlanesInternet megas={60}  titulo={"Plan Pro"} descripcion= "Streaming 4K y videoconferencias avanzadas" precio={"22,990"}></CardPlanesInternet>
                    <CardPlanesInternet megas={75}  titulo={"Plan Premium"} descripcion= "Máxima velocidad para uso intensivo y empresas." precio={"25,990"}></CardPlanesInternet>
                </div>
            </div>
            <div className="div-img-antena-planes-internet"></div>
            <div className="faq-container">
                <h1 className="planes-internet-tittle">Preguntas Frecuentes</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed custom-accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                1. ¿El internet inalámbrico es igual que la fibra óptica?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Aunque la tecnología es diferente, ofrecemos una
                                conexión <strong> estable y rápida </strong>que se asemeja mucho a la fibra. Ideal para ver películas,
                                trabajar desde casa o estudiar sin interrupciones.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed custom-accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2. ¿Necesito línea telefónica o cableado especial?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong> No.</strong> Nuestra tecnología inalámbrica funciona mediante antenas que se instalan en tu casa o negocio, de la antena baja un cable hasta el router. No necesitás cableado ni conexión telefónica.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed custom-accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3. ¿Qué tan confiable es el servicio?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            EcoNet utiliza <strong> enlaces dedicados de alta calidad. </strong> Monitoreamos constantemente la red y damos soporte técnico local, para garantizarte un servicio estable.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed custom-accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            4. ¿Cuánto tiempo tarda la instalación?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            La mayoría de nuestras instalaciones se realizan en menos de 48 horas después de confirmar la disponibilidad y agendar la visita. ¡Rápido y sin complicaciones!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed custom-accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapsFivee">
                            5. ¿Qué velocidad necesito según el uso que le doy?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body d-flex flex-column">
                            <i className="fa-solid fa-house-signal preguntas-frecuentes"> <span> Uso básico (redes sociales, correos): <strong> 15 Mbps - 30 Mbps</strong></span> </i>
                            <i className="fa-solid fa-graduation-cap preguntas-frecuentes"> <span> Estudio y Teletrabajo:<strong> 30 Mbps - 50 Mbps</strong></span> </i>
                            <i className="fa-solid fa-gamepad preguntas-frecuentes"> <span> Streaming y juegos:<strong> 50 Mbps - 75 Mbps</strong></span> </i>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed custom-accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            6. ¿Qué incluye el servicio que me ofrecen?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Todos nuestros planes incluyen instalación básica, equipo inalámbrico, mantenimiento preventivo y soporte técnico local.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed custom-accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            7. ¿Puedo mover el equipo a otra ubicación?
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Por seguridad y para mantener la calidad del servicio, recomendamos que cualquier cambio de ubicación lo realice nuestro personal técnico.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed custom-accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            8. ¿Ofrecen soporte técnico si tengo problemas?
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Claro que sí. Contamos con <strong> soporte técnico local y personalizado</strong>, de lunes a sábado. Siempre estamos listos para ayudarte lo más rápido posible.
                            </div>ochonueve
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed custom-accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            9. ¿Puedo ver Netflix, YouTube o plataformas de streaming sin interrupciones?
                            </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Sí. Nuestros planes están pensados para que puedas disfrutar de tus plataformas favoritas sin pausas ni cortes, incluso en HD y 4K, dependiendo del plan que elijas.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed custom-accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                            10. ¿Qué tan lejos puede estar mi casa para tener internet inalámbrico?
                            </button>
                        </h2>
                        <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Siempre y cuando tengamos línea de vista desde nuestras torres hacia tu propiedad, podemos llevarte el servicio. ¡Consultá con nosotros para verificar cobertura exacta!
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};