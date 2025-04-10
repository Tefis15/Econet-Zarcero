import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const PlanesInternet = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>
                Planes de Internet
            </h1>
        </div>
    );
};