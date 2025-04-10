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
				<Link to="/planesInternet">
					<p>Planes de EcoDúo</p>
				</Link>
				<Link to="/planesInternet">
					<p>Mapa de Cobertura</p>
				</Link>
				<Link to="/planesInternet">
					<p>Solicitar Instalación</p>
				</Link>
				<Link to="/planesInternet">
					<p>Términos y Condiciones</p>
				</Link>
			</div>
			<div className="info-footer">
				<h3 className="tittle-footer text-start">
					Contacto
				</h3>
				<div className="redes-footer">
					<a href="https://www.facebook.com/profile.php?id=61565886189474">
						<i className="fa-brands fa-facebook me-2"></i>
					</a>
					<a href="https://www.instagram.com/econet_zarcero/">
						<i className="fa-brands fa-instagram me-2"></i>
					</a>
					<a href="tel:87471656">
						<i className="fa-solid fa-square-phone me-2"></i>
					</a>
					<a href="">
						<i className="fa-brands fa-whatsapp me-2"></i>
					</a>
					<a href="https://maps.app.goo.gl/HsQw2KM4vnu9YZJx6">
						<i className="fa-solid fa-map-location-dot"></i>
					</a>
					<img src={pymeLogo} alt="Logo" className="pyme-footer" />
				</div>
				<div className="medios-footer d-flex align-items-center justify-content-start">
						<i className="fa-solid fa-phone-volume"></i>
					<a href="tel:87471656">
						<p className="ms-2">(+506) 8747-1656</p>
					</a>
				</div>
				<div className="medios-footer d-flex align-items-center justify-content-start">
						<i className="fa-solid fa-phone-volume"></i>
					<a href="">
						<p className="ms-2">800-ECONET</p>
					</a>
				</div>
				<div className="medios-footer d-flex align-items-center justify-content-start">
						<i className="fa-solid fa-envelope"></i>
					<a href="">
						<p className="ms-2">econetzarcero@gmail.com</p>
					</a>
				</div>
				<div className="medios-footer d-flex align-items-center justify-content-start">
						<i className="fa-solid fa-map-pin"></i>
					<a to= "https://maps.app.goo.gl/HsQw2KM4vnu9YZJx6">
						<p className="ms-2">50 metros norte de Coocique, Alajuela, Zarcero</p>
					</a>
				</div>
			</div>

		</div>
		<p>
			Made with <i className="fa fa-heart text-danger " /> by{" "}
			<a href="http://www.4geeksacademy.com">Stefany Méndez Salas</a>
		</p>
	</footer>
);
