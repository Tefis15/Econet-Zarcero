import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import injectContext from "./store/appContext";
import { Home } from "./pages/home";
import { PlanesInternet } from "./pages/planesInternet";
import { PlanesInternetTV } from "./pages/planesInternetTV";
import { Cobertura } from "./pages/cobertura";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SobreNosotros } from "./pages/sobreNosotros";
import { SolicitarInstalacion } from "./pages/solicitarInstalación";
import { Contactenos } from "./pages/contactenos";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<PlanesInternet />} path="/planesInternet" />
                        <Route element={<PlanesInternetTV />} path="/planesInternetTV" />
                        <Route element={<Cobertura />} path="/cobertura" />
                        <Route element={<SobreNosotros />} path="/sobreNosotros" />
                        <Route element={<SolicitarInstalacion />} path="/solicitarInstalacion" />
                        <Route element={<Contactenos />} path="/contactenos" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
