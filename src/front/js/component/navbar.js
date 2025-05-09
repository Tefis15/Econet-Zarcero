import React from "react";
import { Link } from "react-router-dom";
import econetLogo from "../../img/Econet-Logo-Blanco.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg sticky-top">
			<div className="container-fluid">
				<Link to="/" className="text-decoration-none text-white ms-2">
					<img src={econetLogo} alt="Logo" className="logo-nav d-inline-block align-text-center mb-1" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<i className="fa-solid fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav mb-lg-0">
						<Link to="/planesInternet" className="nav-link text-decoration-none" >
							<li className="nav-link nav-item nav-menu" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
								<span className="nav-span">PLANES INTERNET</span>
							</li>
						</Link>
						{/* 
						<Link to="/planesInternetTV" className="nav-link text-decoration-none" >
							<li className="nav-link nav-item nav-menu" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
								<span className="nav-span">PLANES ECO-DÚO</span>
								</li>
							</Link>
						 */}
						<Link to="/sobreNosotros" className="nav-link text-decoration-none">
							<li className="nav-link nav-item nav-menu" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
								<span className="nav-span">SOBRE NOSOTROS</span>
							</li>
						</Link>

						<Link to="/cobertura" className="nav-link text-decoration-none">
							<li className="nav-link nav-item nav-menu" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
								<span className="nav-span">COBERTURA</span>
							</li>
						</Link>

						{/* <Link to="/solicitarInstalacion" className="nav-link text-decoration-none" >
							<li className="nav-link nav-item nav-menu" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
								<span className="nav-span">SOLICITAR INSTALACIÓN</span>
							</li>
						</Link> */}
					</ul>
					{/* <ul className="navbar-nav mb-lg-0 ms-auto" >
						<Link to="/contactenos" className="text-decoration-none" >
							<li className="nav-item ms-2" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
								<button className="btn-principal"><i className="fa-solid fa-rocket me-2"></i>Contáctenos</button>
							</li>
						</Link>
					</ul> */}
				</div>
			</div>
		</nav>
	);
};
