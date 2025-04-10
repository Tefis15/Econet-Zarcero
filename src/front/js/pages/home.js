import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


import portada from "../../img/home.jpg"
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <header className="header-home">
        <div className="titles-header d-flex justify-content-center">
          <img className="img-portada" src={portada}></img>
          <div className="d-flex">
            <h1 className="home-tittle">Donde la Red se une con la Naturaleza</h1>
            <Link to="/solicitarInstalacion">
              <button type="button" className="btn-header">Solicitar Instalación</button>
            </Link>
          </div>
        </div>
      </header>
      <div className="beneficios-container">
        <h1 className="tittles-home">Beneficios de Nuestro Servicio</h1>
        <div className="beneficios-container">
          <div className="beneficio">
            <i className="i-beneficio fa-solid fa-gauge-high"></i>
            <p className="beneficio-tittle">Alta Velocidad y Estabilidad</p>
            <p className="beneficio-parrafo">Disfruta de conexiones rápidas y confiables, ideales para trabajar, estudiar y entretenerte sin interrupciones.</p>
          </div>
          <div className="beneficio">
            <i className="i-beneficio fa-solid fa-map-location-dot"></i>
            <p className="beneficio-tittle">Cobertura Extendida</p>
            <p className="beneficio-parrafo">Llevamos nuestro servicio a las principales zonas de la región, garantizando acceso en áreas donde otros no llegan.</p>
          </div>
          <div className="beneficio">
            <i className="i-beneficio fa-solid fa-wifi"></i>
            <p className="beneficio-tittle">Tecnología de Última Generación</p>
            <p className="beneficio-parrafo">Utilizamos equipos y soluciones avanzadas para ofrecerte una experiencia de conexión similar a la fibra óptica.</p>
          </div>
          <div className="beneficio">
            <i className="i-beneficio fa-solid fa-headset"></i>
            <p className="beneficio-tittle">Atención Personalizada y Soporte Local</p>
            <p className="beneficio-parrafo">Nuestro equipo está cerca de ti, brindando asesoría y soluciones rápidas a tus necesidades.</p>
          </div>
          <div className="beneficio">
            <i className="i-beneficio fa-solid fa-coins"></i>
            <p className="beneficio-tittle">Planes Flexibles y Precios Competitivos</p>
            <p className="beneficio-parrafo">Diseñados para adaptarse a tus requerimientos, sin sacrificar la calidad del servicio.</p>
          </div>
        </div>
      </div>
      <div className="div-img-antena"></div>
      <div className="servicios-container">
        <h1 className="tittles-home">Nuestros Servicios</h1>
        <div className="servicios-page">
          <div className="servicio">
            <i className="fa-solid fa-wifi"></i>
            <p className="servicio-tittle">Planes de Internet</p>
            <p className="servicio-parrafo">¡Conéctate a la velocidad que mereces! Descubre nuestros planes diseñados
              para hogares y empresas, con conexión estable y ultrarrápida.</p>
            <Link to="/planesInternet">
              <button className="btn-principal">Planes de Internet</button>
            </Link>
          </div>
          <div className="servicio">
            <div>
              <i className="fa-solid fa-wifi"></i>
              <span>+</span>
              <i className="fa-solid fa-tv"></i>
            </div>
            <p className="servicio-tittle">Planes EcoDúo (Internet + TV)</p>
            <p className="servicio-parrafo">Disfruta de lo mejor de ambos mundos: Internet de alta velocidad junto a TV digital con 162 canales. Todo en un solo plan para que tu entretenimiento y conexión nunca se detengan.</p>
            <Link to="/planesInternetTV">
              <button type="button" className="btn-principal">Planes de EcoDúo</button>
            </Link>
          </div>
          <div className="servicio">
            <i className="i-servicio fa-solid fa-map-location-dot"></i>
            <p className="servicio-tittle">Cobertura</p>
            <p className="servicio-parrafo">Verifica la disponibilidad de nuestros servicios en tu zona y descubre cómo podemos conectar tu hogar o negocio. Nos comprometemos a brindarte una conexión estable y rápida, sin importar dónde te encuentres.</p>
            <Link to="/cobertura">
              <button type="button" className="btn-principal">Cobertura</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="contactenos-home-container text-center">
        <h1 className="tittles-home">Contáctenos</h1>
        <div className="contacto-page">
          <div className="contacto-imagen">
            <img src="https://images.pexels.com/photos/7709278/pexels-photo-7709278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de Contacto" />
          </div>
          <div className="contacto-info">
            <p>
              ¿Tienes dudas o necesitas más información? Visita nuestra página de contacto para enviarnos tu consulta y recibir una respuesta personalizada.
            </p>
            <Link to="/contactenos">
              <button className="btn-principal btn-contact">Ir a la página de Contacto</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
