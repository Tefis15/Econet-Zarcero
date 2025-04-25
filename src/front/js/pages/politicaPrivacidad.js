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
                    <h2>1. Introducción</h2>
                    <p>
                        En EcoNet Zarcero SRL, tratamos tus datos personales con la máxima confidencialidad y respeto.
                        Esta Política de Privacidad explica qué información recopilamos, cómo la usamos y tus derechos.
                    </p>
                </article>

                <article className="privacy-section">
                    <h2>2. Datos que Recopilamos</h2>
                    <ul>
                        <li><strong>Información de contacto:</strong> nombre, correo electrónico, teléfono.</li>
                        <li><strong>Datos de ubicación:</strong> para ofrecer cobertura y servicios personalizados.</li>
                        <li><strong>Información de uso:</strong> interacciones en el sitio, páginas vistas y duración de la sesión.</li>
                        <li><strong>Archivos subidos:</strong> cédula, documentos y formularios.</li>
                    </ul>
                </article>

                <article className="privacy-section">
                    <h2>3. Uso de la Información</h2>
                    <ul>
                        <li>Proveer y mejorar nuestros servicios de Internet inalámbrico.</li>
                        <li>Gestionar solicitudes de instalación y atención al cliente.</li>
                        <li>Enviar comunicaciones y notificaciones relevantes.</li>
                        <li>Analizar la interacción del usuario con MS Clarity para optimizar la experiencia.</li>
                    </ul>
                </article>

                <article className="privacy-section">
                    <h2>4. Cookies y Tecnologías Similares</h2>
                    <p>
                        Utilizamos cookies propias y de terceros (Google Analytics, MS Clarity) para recopilar datos de uso.
                        Puedes gestionar tus preferencias desde la configuración de tu navegador.
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
                        Conservamos tu información mientras exista la relación contractual y durante los plazos legales.
                    </p>
                </article>

                <article className="privacy-section">
                    <h2>9. Cambios en la Política</h2>
                    <p>
                        Podemos actualizar esta política. Cualquier cambio se publicará en esta página con la fecha de revisión.
                    </p>
                </article>
                <footer className="privacy-footer">
                    <p>Fecha de última actualización: 25 de abril de 2025</p>
                    <p>© 2025 EcoNet Zarcero SRL. Todos los derechos reservados.</p>
                </footer>
            </section>

        </div>
    );
};