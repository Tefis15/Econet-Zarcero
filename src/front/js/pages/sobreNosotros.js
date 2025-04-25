import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import portada from "../../img/nosotros.png"
import sobreNosotros from "../../img/sobre-nosotros.png"
import stefany from "../../img/stefany-mendez.jpg"
import "../../styles/nosotros.css";

import { Context } from "../store/appContext";

export const SobreNosotros = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-nosotros">
      <header className="header-nosotros">
        <img className="img-portada-nosotros" src={portada}></img>
      </header>
      <body>
        <div className="container-sobre-nosotros mt-5">
          <h1 className="nosotros-tittle">Sobre Nosotros</h1>
          <div className="d-flex nosotros-content">
            <div className="page-nosotros">
              <img className="img-sobre-nosotros" src={sobreNosotros}></img>
              <div className="text-center">
                <h2 className="nosotros-tittle-dos">Somos una Empresa 100% Zarcereña</h2>
                <p>En EcoNet Zarcero nos dedicamos a conectar a nuestra comunidad con servicios de
                  internet de alta velocidad y soluciones digitales confiables.
                  Nuestra pasión es ofrecer una experiencia de conexión excepcional que se
                  asemeja a la calidad de la fibra óptica, utilizando enlaces inalámbricos y
                  equipos de última generación.
                </p>
              </div>
            </div>
            <div className="page-nosotros">
              <img className="img-sobre-nosotros" src={stefany}></img>
              <div className="text-center">
                <h2 className="nosotros-tittle-dos">Emprendedores Zarcereños</h2>
                <p>Econet Zarcero nace con el propósito de brindar un servicio de internet
                  confiable y accesible para las comunidades de Zarcero, Naranjo y San Ramón.
                  Fundada por la <b>Ing. Stefany Méndez Salas</b>, una mujer emprendedora de la zona,
                  nuestra empresa surge con el compromiso de ofrecer conectividad de alta calidad mediante
                  enlaces inalámbricos y tecnología de última generación. <br></br> <br></br>Creemos en la
                  innovación, la cercanía con nuestros clientes y la mejora continua, asegurando que cada hogar
                  y negocio tenga acceso a un internet estable y eficiente. En Econet Zarcero, trabajamos para que la conectividad
                  sea un puente hacia nuevas oportunidades para nuestra comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mision-vision-container text-center">
          <div className="mision-vision-page">
            <div className="mision-vision">
              <h2 className="nosotros-subtittle">Nuestra Visión</h2>
              <p>Ser la principal fuerza impulsora de la conectividad en Zarcero,
                permitiendo a nuestros clientes explorar nuevas fronteras digitales y
                contribuyendo al desarrollo sostenible de la comunidad.</p>
              <h2 className="nosotros-subtittle">Nuestra Misión</h2>
              <p>Proporcionar servicios de Internet confiables y de vanguardia en Zarcero,
                enfocados en la innovación, la accesibilidad y la sostenibilidad. Nos comprometemos a
                construir conexiones fuertes que empoderen a individuos y empresas para prosperar en la era digital.</p>
            </div>
            <div className="objetivos">
              <h2 className="nosotros-subtittle-dos">Objetivos</h2>
              <div className="lista-objetivos">
                <ul className="list-group">
                  <li className="list-group-objetivos">
                    <i className="fa-solid fa-signal"></i>
                    <span>Garantizar la entrega de servicios de Internet de alta calidad, superando las expectativas de nuestros clientes.</span>
                  </li>
                  <li className="list-group-objetivos">
                    <i className="fa-solid fa-signal"></i>
                    <span>Contribuir activamente al desarrollo económico local, generando empleo y apoyando iniciativas comunitarias.</span>

                  </li>
                  <li className="list-group-objetivos">
                    <i className="fa-solid fa-signal"></i>
                    <span>Establecer alianzas estratégicas con otras empresas locales para fortalecer la red empresarial en la región.</span>

                  </li>
                  <li className="list-group-objetivos">
                    <i className="fa-solid fa-signal"></i>
                    <span>Mantener un compromiso constante con la atención al cliente, asegurando la satisfacción y fidelidad de nuestros usuarios.</span>

                  </li>
                  <li className="list-group-objetivos">
                    <i className="fa-solid fa-signal"></i>
                    <span>Participar activamente en proyectos de responsabilidad social que beneficien a la comunidad zarcereña.</span>
                  </li>
                  <li className="list-group-objetivos">
                    <i className="fa-solid fa-signal"></i>
                    <span>Expandir gradualmente nuestra cobertura y servicios para abarcar nuevas áreas y necesidades tecnológicas.</span>
                  </li>
                  <li className="list-group-objetivos">
                    <i className="fa-solid fa-signal"></i>
                    <span>Ser reconocidos como líderes en la industria de servicios de Internet, representando la excelencia y la innovación en Zarcero.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="por-que-elegir text-center">
            <h2 className="nosotros-tittle">¿Por qué elegir EcoNet?</h2>
            <div className="pq-cards">
              <div className="pq-card">
                <i className="fa-solid fa-microchip pq-icon"></i>
                <h3 className="pq-card-title">Tecnología de vanguardia</h3>
                <p>Utilizamos equipos modernos para garantizar la mejor experiencia de conexión.</p>
              </div>
              <div className="pq-card">
                <i className="fa-solid fa-headset pq-icon"></i>
                <h3 className="pq-card-title">Atención personalizada</h3>
                <p>Nuestro equipo está siempre listo para brindarte asesoría y solucionar tus dudas de manera rápida y eficaz.</p>
              </div>
              <div className="pq-card">
                <i className="fa-solid fa-map-location-dot pq-icon"></i>
                <h3 className="pq-card-title">Cobertura extensa</h3>
                <p>Conectamos diversas zonas de Zarcero y sus alrededores, llevando el mejor internet a donde más lo necesitas.</p>
              </div>
              <div className="pq-card">
              <i className="fa-solid fa-hand-holding-heart pq-icon"></i>
                <h3 className="pq-card-title">Compromiso con la comunidad</h3>
                <p>Creemos en la innovación y en la mejora continua para ofrecer un servicio que supere tus expectativas.</p>
              </div>
            </div>
          </div>
        </div>

      </body>
    </div>
  );
};