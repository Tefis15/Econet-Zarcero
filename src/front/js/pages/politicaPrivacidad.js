import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/politicaPrivacidad.css"

import { Context } from "../store/appContext";

export const PoliticaPrivacidad = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="privacy-page">
            <header className="privacy-header">
                <h1 className="privacy-title">Política de Privacidad</h1>
                <p className="privacy-subtitle">Protegemos tu información y garantizamos tu seguridad</p>
            </header>

            <section className="privacy-container">
                <article className="privacy-section">
                    <p><b>Esta Política de Privacidad se aplica exclusivamente al uso y captura de datos a través de este sitio web. No regula la prestación de los 
                        servicios de telecomunicaciones, los cuales se rigen por el contrato de adhesión y la legislación específica vigente, garantizando el secreto 
                        de las comunicaciones.</b></p>
                    <h2>1. Introducción</h2>
                    <p>
                       En EcoNet Zarcero SRL, tratamos tus datos personales con la máxima confidencialidad. Es importante aclarar que esta política es aplicable 
                       únicamente en relación con el uso de este sitio Web y no regula la prestación del servicio de telecomunicaciones, el cual se rige por la Ley 
                       General de Telecomunicaciones y su contrato de adhesión, protegiendo sus derechos como usuario final.
                    </p>
                </article>

                <article className="privacy-section">
                    <h2>2. Datos que Recopilamos</h2>
                    <ul>
                        <li><strong>Información de contacto:</strong> nombre, correo electrónico, teléfono.</li>
                        <li><strong>Datos de ubicación:</strong> para ofrecer información sobre el alcance de red y servicios personalizados.</li>
                        <li><strong>Información de uso:</strong> interacciones en el sitio, páginas vistas y duración de la sesión.</li>
                        <li><strong>Archivos subidos:</strong> cédula, documentos y formularios.</li>
                    </ul>
                </article>

                <article className="privacy-section">
                    <h2>3. Uso de la Información</h2>
                    <ul>
                        <li>Gestionar las solicitudes de información y contacto realizadas a través del sitio web.</li>
                        <li>Mejorar la experiencia de navegación y funcionalidades de nuestra plataforma digital.</li>
                        <li>Enviar comunicaciones y notificaciones relacionadas con su solicitud de alcance de red.</li>
                    </ul>
                </article>

                <article className="privacy-section">
                    <h2>4. Herramientas de Análisis y Cookies</h2>
                    <p>
                        Este sitio utiliza <b>Microsoft Clarity</b> para comprender cómo interactúan los usuarios con nuestra web. Clarity recopila datos de comportamiento 
                        (clics, desplazamientos y duración de la visita) mediante cookies. Esta información es anónima y se utiliza únicamente con fines 
                        estadísticos y de mejora de la experiencia del usuario.
                    </p>
                </article>

                <article className="privacy-section">
                    <h2>5. Compartir y Transferencia de Datos</h2>
                    <p>
                        No vendemos ni alquilamos tu información. Podemos compartir datos con:
                        <ul>
                            <li>Proveedores de servicios (ej. servidores, mantenimiento).</li>
                            <li>Entidades regulatorias cuando la ley lo requiera.</li>
                        </ul>
                    </p>
                </article>

                <article className="privacy-section">
                    <h2>6. Seguridad</h2>
                    <p>
                        Implementamos medidas técnicas y organizativas como encriptación SSL y acceso restringido,
                        para proteger tus datos contra accesos no autorizados.
                    </p>
                </article>

                <article className="privacy-section">
                    <h2>7. Derechos del Usuario</h2>
                    <ul>
                        <li>Acceder, rectificar y suprimir tus datos.</li>
                        <li>Solicitar limitación u oposición al tratamiento.</li>
                        <li>Portabilidad de tus datos.</li>
                    </ul>
                    <p>Para ejercer tus derechos, contáctanos en <a href="mailto:econetzarcero@gmail.com">econetzarcero@gmail.com</a>.</p>
                </article>

                <article className="privacy-section">
                    <h2>8. Conservación de Datos</h2>
                    <p>
                        Conservamos la información recopilada a través de este sitio web (como consultas en formularios o datos de navegación) 
                        únicamente por el tiempo necesario para atender su solicitud o durante los plazos legales aplicables a la gestión de plataformas digitales.
                    </p>
                </article>

                <article className="privacy-section">
                    <h2>9. Cambios en la Política</h2>
                    <p>
                        Podemos actualizar esta política. Cualquier cambio se publicará en esta página con la fecha de revisión.
                    </p>
                </article>
                <footer className="privacy-footer">
                    <p>Fecha de última actualización: 25 de marzo de 2026</p>
                    <p>© 2025 EcoNet Zarcero SRL. Todos los derechos reservados.</p>
                </footer>
            </section>

        </div>
    );
};