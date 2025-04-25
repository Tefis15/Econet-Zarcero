import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cobertura.css";

import { Context } from "../store/appContext";

export const Cobertura = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-map">

            <div class="coverage-hero">
                <div className="coverage-title">
                    <h1 class="coverage-hero-title">Nuestra Cobertura</h1>
                    <p class="coverage-hero-subtitle">
                        Llevamos internet de alta velocidad a tu comunidad… ¡y seguimos creciendo!
                    </p>
                    <Link to="/contactenos">
                        <button className="btn-coverage"> <i className="fa-brands fa-whatsapp fs-3"></i> Consultar Cobertura</button>
                    </Link>
                </div>

                <div class="coverage-timeline">

                    <div class="timeline-line"></div>

                    <div class="timeline-item">
                        <div class="timeline-icon">Z</div>
                        <div class="timeline-content">
                            <h4>Zarcero</h4>
                            <p>Zarcero Centro, Laguna, Tapezco, Pueblo Nuevo, Palmira, Guadalupe, San Luis, Los Ángeles, La Brisa, La Legua y Zapote.</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-icon">N</div>
                        <div class="timeline-content">
                            <h4>Naranjo</h4>
                            <p>La Palmita y La Tocha</p>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-icon">S</div>
                        <div class="timeline-content">
                            <h4>San Ramón</h4>
                            <p>Próximamente</p>
                        </div>
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