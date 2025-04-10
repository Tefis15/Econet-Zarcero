import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const SolicitarInstalacion = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>
                Solicitar Instalacion
            </h1>
        </div>
    );
};