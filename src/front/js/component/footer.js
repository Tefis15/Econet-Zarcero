import React, { Component } from "react";
import econetLogo from "../../img/Econet-Logo.png"
import pymeLogo from "../../img/pyme-logo.png"
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer py-3 text-center">
		<div className="d-flex container-footer">
			<div className="logo-footer-container">
				<img src={econetLogo} alt="Logo" className="logo-footer mb-1" />
			</div>
			<div className="indice-footer text-start">
				<h3 className="tittle-footer">
					Menú
				</h3>
				<Link to="/planesInternet">
					<p>Planes de Internet</p>
				</Link>
				{/* <Link to="/planesInternetTV">
					<p>Planes de EcoDúo</p>
				</Link> */}
				<Link to="/cobertura">
					<p>Mapa de Cobertura</p>
				</Link>
				<Link to="/sobreNosotros">
					<p>Sobre Nosotros</p>
				</Link>
				{/* <Link to="/solicitarInstalacion">
					<p>Solicitar Instalación</p>
				</Link> */}
				<Link to="/terminos-y-condiciones">
					<p>Términos y Condiciones</p>
				</Link>
				<Link to="/privacidad">
					<p>Política de Privacidad</p>
				</Link>
			</div>
			<div className="info-footer">
				<h3 className="tittle-footer text-start">
					Contacto
				</h3>
				<div className="redes-footer">
					<a href="https://www.facebook.com/profile.php?id=61565886189474" target="black">
						<i className="fa-brands fa-facebook me-2"></i>
					</a>
					<a href="https://www.instagram.com/econet_zarcero/" target="black">
						<i className="fa-brands fa-instagram me-2"></i>
					</a>
					<a href="tel:87471656" target="black">
						<i className="fa-solid fa-square-phone me-2"></i>
					</a>
					<a href="https://wa.me/50687471656?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20de%20internet." target="black">
						<i className="fa-brands fa-whatsapp me-2"></i>
					</a>
					<a href="https://maps.app.goo.gl/HsQw2KM4vnu9YZJx6" target="black">
						<i className="fa-solid fa-map-location-dot"></i>
					</a>


				</div>
				<div className="medios-footer d-flex align-items-center justify-content-start">
					<i className="fa-solid fa-phone-volume"></i>
					<a href="tel:87471656">
						<p className="ms-2">8747-1656</p>
					</a>
					<span className="ms-2"><b>/</b></span>
					<a href="tel:22015367">
						<p className="ms-2">2201-5367</p>
					</a>
					<span className="ms-2"><b>/</b></span>
					<a href="tel:22015341">
						<p className="ms-2">2201-5341</p>
					</a>
				</div>
				<div className="medios-footer d-flex align-items-center justify-content-start">
					<i className="fa-solid fa-phone-volume"></i>
					<a href="tel:80032663827">
						<p className="ms-2">800-ECONETCR</p>
					</a>
				</div>
				<div className="medios-footer d-flex align-items-center justify-content-start">
					<i className="fa-solid fa-envelope"></i>
					<p className="ms-2">econetzarcero@gmail.com</p>
				</div>
				<div className="medios-footer d-flex align-items-center justify-content-start">
					<i className="fa-solid fa-map-pin"></i>
					<a href="https://maps.app.goo.gl/HsQw2KM4vnu9YZJx6" target="black">
						<p className="ms-2">50 metros norte de Coocique, Alajuela, Zarcero</p>
					</a>
				</div>
			</div>
			<div className="pyme-container">
				<img src={pymeLogo} alt="Logo" className="pyme-footer" />
				<p>96074</p>
			</div>

		</div>
		<p>
			 © 2025 EcoNet Zarcero SRL. Diseñado por la Ing. <strong>Stefany Méndez Salas</strong>
		</p>
	</footer>
);
