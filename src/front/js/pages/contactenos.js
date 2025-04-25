import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/contactenos.css"

import { Context } from "../store/appContext";

export const Contactenos = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-enviar-mensaje">
            <div className="container-enviar-mensaje">
                <div className="header-enviar-mensaje">
                    <div className="header-title-page">
                        <img className="img-headear-enviar-mensaje" src="https://images.pexels.com/photos/23496964/pexels-photo-23496964/free-photo-of-ligero-persona-gente-mujer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                        <div className="header-title">
                            <h1>Contáctenos</h1>
                            <p>Tu conexión es nuestra prioridad – háblanos y encontraremos la mejor solución para ti.</p>
                        </div>
                    </div>
                    <div className="form-enviar-mensaje">
                        <h1 className="form-solicitud-title">Datos Requeridos</h1>
                        <form className="">
                            <div class="form-group">
                                <label for="nombre">Nombre Completo</label>
                                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" required />
                            </div>

                            <div class="form-group">
                                <label for="cedula">Cédula</label>
                                <input type="text" id="cedula" name="cedula" placeholder="Tu número de Cédula" required />
                            </div>

                            <div class="form-group">
                                <label for="email">Correo Electrónico</label>
                                <input type="email" id="email" name="email" placeholder="tu@correo.com" required />
                            </div>

                            <div class="form-group">
                                <label for="telefono">Teléfono</label>
                                <input type="tel" id="telefono" name="telefono" placeholder="8000‑0000" required />
                            </div>

                            <div class="form-group">
                                <label for="mensaje">Mensaje</label>
                                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribe aquí tu mensaje."></textarea>
                            </div>

                            <button type="submit" class="btn-solicitud">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};