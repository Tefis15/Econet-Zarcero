import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Cobertura = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>
                Cobertura
            </h1>
        </div>
    );
};