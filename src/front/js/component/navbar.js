import React from "react";
import { Link } from "react-router-dom";
import econetLogo from "../../img/Econet-Logo-Blanco.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg sticky-top">
			<div className="container-fluid">
				<Link to="/" className="text-decoration-none text-white ms-2">
					<img src={econetLogo} alt="Logo" className="logo-nav d-inline-block align-text-center mb-1"/>
          
				</Link>
				<button className="navbar-toggler text-warning" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<i className="fa-solid fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav mb-lg-0">
						<li className="nav-link nav-item nav-menu">
							<Link to="/planesInternet" className="nav-link text-decoration-none" >
								<span className="nav-span">PLANES INTERNET</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu">
							<Link to="/planesInternetTV" className="nav-link text-decoration-none" >
								<span className="nav-span">PLANES INTERNET Y TV</span>
							</Link>
						</li>
						
						<li className="nav-link nav-item nav-menu">
							<Link to="/sobre-nosotros" className="nav-link text-decoration-none">
								<span className="nav-span">Sobre Nosotros</span>
							</Link>
						</li>
						
						<li className="nav-link nav-item nav-menu">
							<Link to="/cobertura" className="nav-link text-decoration-none">
								<span className="nav-span">Cobertura</span>
							</Link>
						</li>
						
						<li className="nav-link nav-item nav-menu">
							<Link to="/solicitar-instalacion" className="nav-link text-decoration-none" >
								<span className="nav-span">Solicitar Instalación</span>
							</Link>
						</li>
					</ul>
          <ul className="navbar-nav mb-lg-0 ms-auto">
						<li className="nav-item ms-2">
							<Link to="/contactenos" className="text-decoration-none" >
								<button className="btn btn-primary"><i className="fa-solid fa-rocket me-2"></i>Contáctenos</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
