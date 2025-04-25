import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/solicitarInstalacion.css"

import { Context } from "../store/appContext";

export const SolicitarInstalacion = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-solicitar-instalacion">
            <div className="header-solicitar-instalacion">
                <div className="header-title-page">
                    <img className="img-headear-solicitar-instalacion" src="https://images.pexels.com/photos/2881224/pexels-photo-2881224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <div className="header-title">
                        <h1>Solicitar Instalación</h1>
                        <p>Llevamos conectividad a donde más lo necesitás</p>
                    </div>
                </div>
                <div className="form-solicitar-instalacion">
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
                        <div class="form-group file-group">
                            <label for="cedula-front">Cédula (Frente)</label>
                            <input
                                type="file"
                                id="cedula-front"
                                name="cedulaFront"
                                accept="image/*"
                                required
                            />
                        </div>

                        <div class="form-group file-group">
                            <label for="cedula-back">Cédula (Atrás)</label>
                            <input
                                type="file"
                                id="cedula-back"
                                name="cedulaBack"
                                accept="image/*"
                                required
                            />
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
                            <label for="direccion">Dirección Exacta</label>
                            <input type="text" id="direccion" name="direccion" placeholder="Dirección, distrito y cantón." required />
                        </div>

                        <div class="form-group">
                            <label for="plan">Plan Deseado</label>
                            <select id="plan" name="plan" required>
                                <option value="">Selecciona un plan</option>
                                <option>Plan Básico: 15 Mbps</option>
                                <option>Plan Estándar: 30 Mbps</option>
                                <option>Plan Plus: 50 Mbps</option>
                                <option>Plan Pro: 60 Mbps</option>
                                <option>Plan Premium: 75 Mbps</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="comentarios">Comentarios Adicionales</label>
                            <textarea id="comentarios" name="comentarios" rows="4" placeholder="Detalla aquí cualquier preferencia…"></textarea>
                        </div>

                        <button type="submit" class="btn-solicitud">Enviar Solicitud</button>
                    </form>
                </div>
            </div>

        </div>
    );
};