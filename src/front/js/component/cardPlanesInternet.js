import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes, { string } from "prop-types"
import { Context } from "../store/appContext";
import "../../styles/planesInternet.css";

export const CardPlanesInternet = ({megas, titulo, precio, descripcion}, ...props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="paquetes-grid">
            <div className="card-paquete">
                <div className="badge-megas">{megas + " Mbps"}</div>
                <h3 className="card-paquete-titulo">{titulo}</h3>
                <p className="card-paquete-desc">{descripcion}</p>
                <div className="card-precio">{"₡" + precio} <span className="card-precio-periodo">/ mes</span></div>
                <p className="card-includes">
                    Incluye IVA, 911, parafiscales y alquiler de equipo
                </p>
                <a href="#" className="card-paquete-link">Contratar ahora</a>
            </div>
        </div>
    );
};
CardPlanesInternet.propTypes = {
    megas: PropTypes.number,
    titulo: PropTypes.string,
    descripcion: PropTypes.string,
    precio: PropTypes.string
}