import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/terminos.css"

import { Context } from "../store/appContext";

export const TerminosYCondiciones = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="terms-page">
      <header className="terms-header">
        <div className="terms-header-content">
          <h1 className="terms-title">Términos y Condiciones</h1>
          <p className="terms-subtitle">
            Lea detenidamente las condiciones de uso de nuestros servicios.
          </p>
        </div>
      </header>

      <section className="terms-container">
        <div className="terms-content">
          <h2>Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar el sitio web de EcoNet Zarcero SRL, usted acepta cumplir con estos términos y condiciones.
          </p>

          <h2>Copia del Contrato y su Carátula</h2>
          <p>
            Aprobado según resolución No: ______ emitido por el Consejo de la Sutel, en fecha: __/__/____.
            <br />
            <a href="/contrato.pdf" target="_blank" rel="noopener" className="terms-link">
              Ver/Descargar Contrato
            </a>
            <br />
            <a href="/caratula.pdf" target="_blank" rel="noopener" className="terms-link">
              Ver/Descargar Carátula
            </a>
          </p>

          <h2>Tarifas y Cargos</h2>
          <ul className="terms-list">
            <li>Reactivación por falta de pago: ₡5,000 IVAI. Obligatorio para reactivar el servicio.</li>
            <li>Reconexión de servicio: ₡8,000 IVAI, incluye traslado de equipo técnico para la reconexión.</li>
            <li>Solo se cobrará uno de los dos costos anteriores, según aplique.</li>
            <li>Visitas técnicas no justificadas: ₡18,000 IVAI en segunda visita, cargado a la próxima factura.</li>
            <li>Alquiler de router WiFi y antena: ₡1,500/mes más IVA, incluido en el precio final.</li>
            <li>Los precios publicados incluyen IVA y cargos regulatorios.</li>
            <li>Pago mensual según plan contratado.</li>
            <li>Instalación gratis.</li>
            <li>Sin depósito de garantía.</li>
            <li>Tarifas sujetas a revisión semestral.</li>
          </ul>

          <h2>Privacidad y Protección de Datos</h2>
          <p>
            La información personal recopilada será tratada conforme a nuestra <a href="/privacidad" className="terms-link">Política de Privacidad</a>.
            <br /><br />
            Este sitio utiliza <strong>Microsoft Clarity</strong> para comprender cómo interactúan los usuarios con nuestro sitio web. Clarity recopila datos de comportamiento como clics, desplazamientos y duración de la visita, mediante cookies y tecnologías similares. Esta información se utiliza únicamente con fines estadísticos y de mejora de la experiencia del usuario.
            <br /><br />
            Los datos recolectados son anónimos, no incluyen información personal identificable y son tratados conforme a lo establecido por Microsoft en su <a href="https://privacy.microsoft.com/es-es/privacystatement" className="terms-link" target="_blank" rel="noopener noreferrer">política de privacidad</a>. Al continuar navegando en nuestro sitio, usted acepta este tratamiento.
          </p>

          <h2>Sobre la Extinción del Contrato</h2>
          <p>Al finalizar la relación comercial, el usuario debe permitir el acceso a nuestro personal para recuperar los equipos propiedad de EcoNet Zarcero SRL; 
            según lo dispuesto en el CARATULA DEL CONTRATO</p>

          <h2>Costo de Reposición de Equipos</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Precio (₡)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Archer</td><td>C50</td><td>15,000</td></tr>
                <tr><td>Cudy</td><td>AX1500</td><td>17,000</td></tr>
                <tr><td>Mikrotik</td><td>Sxtsq 5AC</td><td>37,000</td></tr>
                <tr><td>Mikrotik</td><td>Disc Lite 5</td><td>52,000</td></tr>
                <tr><td>Mikrotik</td><td>LHG 5</td><td>62,000</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Medios de Pago</h2>
          <p>El usuario final podrá elegir para la realización de sus pagos, cualquiera de los siguientes medios indicados a continuación.</p>
          <p>TRANSFERENCIA BANCARIA</p>
          <div className="account-cards">
            <div className="account-card">
              <h3>Davienda</h3>
              <p><strong>Colones:</strong> CR84010407642607727510</p>
              <p><strong>Dólares:</strong> CR82010407642607728225</p>
            </div>
            {/* <div className="account-card">
              <h3>Banco de Costa Rica</h3>
              <p><strong>Colones:</strong> IBAN_COLONES_2</p>
              <p><strong>Dólares:</strong> IBAN_DOLARES_2</p>
            </div>
            <div className="account-card">
              <h3>BAC San José SA</h3>
              <p><strong>Colones:</strong> IBAN_COLONES_3</p>
              <p><strong>Dólares:</strong> IBAN_DOLARES_3</p>
            </div> */}
          </div>

          <p>SINPE MÓVIL: Al 8747-1657 a nombre de EcoNet Zarcero SRL</p>
          <p>CARGO AUTOMÁTICO DE FACTURACIÓN</p>
          <p>El usuario final podrá solicitar en cualquier momento pagar su factura mensual a través de Cargo Automático de Facturación;
            para esto deberá llenar el formulario que se encuentra en la CARÁTULA DEL CONTRATO sección 8, 
            donde autorizará al proveedor/operador a descontar mensualmente los montos de su facturación de una tarjeta de crédito o débito.</p>
          

          <h2>Calidad de Servicio</h2>
          <p>Se establece según la Cláusula 18 del Contrato de Adhesión que indica:</p>
          <p>El operador se compromete a brindar el servicio contratado respetando los umbrales de los siguientes indicadores de calidad:</p>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Indicador</th>
                  <th>Umbral</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Instalación servicio (IC-1)*</td><td>4 días hábiles</td></tr>
                <tr><td>Instalación no inmediata (IC-1)</td><td>10 días hábiles</td></tr>
                <tr><td>Instalación sin infraestructura (IC-1)</td><td>20 días hábiles</td></tr>
                <tr><td>Reconexión</td><td>1 día hábil</td></tr>
                <tr><td>Reparación de fallas (IC-2)</td><td>1 día hábil</td></tr>
                <tr><td>Disponibilidad core (IC-7)</td><td>99.97%</td></tr>
                <tr><td>Retardo local (ID-16)</td><td>50 ms</td></tr>
                <tr><td>Retardo internacional (ID-17)</td><td>150 ms</td></tr>
                <tr><td>Velocidad aprovisionada vs real (ID-18)</td><td>≥ 80%</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Compensaciones y Reembolso</h2>
          <p>Se establece según la Cláusula 19 del Contrato de Adhesión que indica:</p>
          <p>
            En caso de interrupciones o degradación, la compensación se calculará como:<br />
            <em>Compensación = 2 × Tarifa Recurrente × (Tiempo de interrupción)/(Duración del mes)</em>
          </p>
          <p>Para efectos de la contabilización en la fórmula anterior, se considera que una degradación en un servicio de telecomunicaciones constituye una interrupción, 
            cuando al menos uno de los indicadores particulares definidos en el RPCS para el servicio en cuestión, tenga un cumplimiento igual o inferior a un 40%</p>

          <h2>Equipos Terminales y Condiciones</h2>
          <p>EcoNet Zarcero SRL suministra los siguientes modelos según disponibilidad: Archer C50, Cudy AX1500, Mikrotik Sxtsq 5AC, Disc Lite 5, LHG 5.</p>
          <ul className="terms-list">
            <li>Espacio adecuado para instalación.</li>
            <li>Un ambiente libre de polvo y humedad.</li>
            <li>Suministro eléctrico de 110VAC.</li>
            <li>Permisos y accesos necesarios.</li>
            <li>Facilitar acceso al personal técnico.</li>
          </ul>

          <h2>Horario de Atención al Cliente</h2>
          <p>
            Lunes a Viernes: 7am – 7pm | Fines de semana y feriados: 8am – 5pm (Tel.: 800-EcoNet o 8747-1656).<br />
            Atención presencial: 50m norte de Coocique, Zarcero (9:30am – 5:30pm).
          </p>

          <h2>Modificaciones</h2>
          <p>EcoNet Zarcero SRL se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones serán notificadas en el sitio web.</p>

          <h2>Contacto</h2>
          <p>Para dudas o reclamos: <a href="mailto:econetzarcero@gmail.com" className="terms-link">econetzarcero@gmail.com</a></p>
        </div>

        <footer className="terms-footer">
          <p>Fecha de última actualización: 25 de abril de 2025</p>
        <p>© 2025 EcoNet Zarcero SRL. Todos los derechos reservados.</p></footer>
      </section>
    </div>
  );
};