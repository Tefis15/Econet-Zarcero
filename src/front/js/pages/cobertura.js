import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cobertura.css";

import { Context } from "../store/appContext";

export const Cobertura = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-map">

            <div className="coverage-hero">
                <div className="coverage-title">
                    <h1 className="coverage-hero-title">Mapas de Alcance de Red</h1>
                    <p className="coverage-hero-subtitle">
                        Llevamos internet de alta velocidad a tu comunidad… ¡y seguimos creciendo!
                    </p>
                    <Link to="/contactenos">
                        <button className="btn-coverage"> <i className="fa-brands fa-whatsapp fs-3"></i> Consultar Alcance de Red</button>
                    </Link>
                </div>

                <div>
                    <h1 className="coverage-hero-title mb-2" >Alajuela</h1>
                    <div className="coverage-timeline">
                        <div className="timeline-line"></div>
                        <div className="timeline-item">
                            <div className="timeline-icon">Z</div>
                            <div className="timeline-content">
                                <h4>Zarcero</h4>
                                <p>Zarcero Centro, Laguna, Tapezco, Pueblo Nuevo, Palmira, Guadalupe, San Luis, Los Ángeles, La Brisa, La Legua y Zapote.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-icon">N</div>
                            <div className="timeline-content">
                                <h4>Naranjo</h4>
                                <p>San José -sector La Palmita- y San Juan -sector La Tocha-</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-icon">S</div>
                            <div className="timeline-content">
                                <h4>San Ramón</h4>
                                <p>Próximamente</p>
                            </div>
                        </div>
                        <p className="coverage-hero-subtitle">La disponibilidad definitiva del servicio está sujeta a factibilidad técnica en el punto de instalación solicitado dentro de las zonas de alcance de red indicadas.</p>
                    </div>
                </div>
            </div>

            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1twgUP4R6-dllrH12MExo5EhbO0nH-Ew&ehbc=2E312F"
                ></iframe>
            </div>

        </div>
    );
};