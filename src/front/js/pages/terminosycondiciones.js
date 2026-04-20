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
            <li>Alquiler de equipo terminal: ₡1,500/mes IVAI, incluido en el precio final.</li>
            <li>Instalación gratis.</li>
            <li>Sin depósito de garantía.</li>
          </ul>

          <h2>Sobre la Extinción del Contrato</h2>
          <p>Ante la terminación de la relación comercial, sin importar el motivo, el usuario final tiene la obligación de devolver el equipo terminal propiedad de 
            EcoNet Zarcero. Para su comodidad, ofrecemos las siguientes opciones:</p>
            <ul className="list-group-numbered">
              <li>
                <b>Retiro en Domicilio:</b> El operador visitará el domicilio del usuario final para recuperar los equipos sin costo alguno. El usuario debe 
                facilitar el acceso al personal técnico para este fin.
              </li>
              <li>
                <b>Entrega Presencial:</b>El usuario final puede entregar los equipos personalmente en nuestras oficinas.
              </li>
              <li>
                <b>Tercero Autorizado:</b> Un tercero debidamente autorizado por escrito por el titular también podrá realizar la entrega física de los equipos.
              </li>
            </ul>
            <p><b>Dirección de entrega:</b> 50 metros norte de Coocique, Zarcero, Alajuela.<br></br>
            <b>Horario:</b> Lunes a viernes de 10:00 am a 5:00 pm.<br></br>
            <b>Plazo:</b> La devolución o retiro debe gestionarse en un plazo no mayor a treinta (30) días calendario tras la terminación del contrato.</p>

          <h2>Costo de Reposición de Equipos</h2>

          <div className="table-wrapper">
            <p>El costo por reposición de equipos cuando el usuario final no devuelve el equipo terminal es de <b>₡75 000</b> (IVAI).</p>
            {/*
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
            </table>*/}
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
          <p>EcoNet Zarcero SRL suministra el equipo terminal necesario para el servicio bajo la figura de <b>Alquiler</b>,
            con un costo mensual de <b>₡1,500.00 (IVAI)</b>, el cual ya se encuentra <b> incluido en el precio final de cada plan.</b></p>
          <ul className="list-group-numbered">
            <li>
              <b>Suministro según Disponibilidad y Zona</b>
              <p>La marca y modelo del equipo a instalar quedan sujetos a la disponibilidad técnica y la infraestructura de red de la zona específica.
                Los modelos estándar utilizados son:</p>
              <ul className="terms-list">
                <li>
                  Marca: Mikrotik<br />
                  Modelo: SXTsq 5ac<br />
                  Oficio de Aprobación: 07502-SUTEL-DGC-2021
                </li>
                <li>
                  Marca: Mikrotik<br />
                  Modelo: LHG 5<br />
                  Oficio de Aprobación: 02342-SUTEL-DGC-2024
                </li>
                <li>
                  Marca: Ubiquiti <br />
                  Modelo: LBE-5AC-Gen2<br />
                  Oficio de Aprobación: 03911-SUTEL-DGC-2021

                </li>
              </ul>
            </li>
            <li><b>Requisitos de Instalación</b>
              <p>El cliente debe garantizar las condiciones óptimas para el equipo suministrado::</p>
              <ul className="terms-list">
                <li >
                  Espacio adecuado para instalación y ambiente libre de polvo/humedad.
                </li>
                <li>
                  Suministro eléctrico de 110VAC.
                </li>
                <li>
                  Permisos y accesos necesarios para el personal técnico.
                </li>
              </ul></li>
            <li><b>Opción de Equipo Propio (Aporte del Usuario)</b>
              <p>Si el usuario final suministra sus propios equipos, estos deberán estar debidamente Homolgados por SUTEL para garantizar un correcto funcionamiento del servicio
                suscrito. De lo contrario, si el usuario final aporta su propio equipo terminal sin que se encuentre debidamente Homologado, el operador/proveedor no será
                responsable por problemas de calidad experimentados en el servicio contratado, y renuncia a futuras reclamaciones ante la Sutel por este particular.
                Además, la actualización, mantenimiento, reparación y reposición del equipo terminal aportado correrá por su cuenta. </p>
              <p><b>Características Técnicas Mínimas para equipo propio:</b></p>
              <ul className="terms-list">
                <li >
                  <b>Interfaz:</b> Puerto WAN Gigabit Ethernet (10/100/1000 Mbps).
                </li>
                <li>
                  <b>Protocolos obligatorios:</b> Soporte para PPPoE y capacidad de gestión de VLANs (Etiquetado 802.1Q).
                </li>
                <li>
                  <b>Recomendación inalámbrica:</b> Para disfrutar de las velocidades contratadas, se recomienda estándar Wi-Fi 5 (802.11ac) o superior.
                </li>
              </ul>

            </li>
          </ul>

       

          <h2>Modificaciones</h2>
          <p>Cualquier propuesta de modificación del presente contrato, deberá ser aprobada por la Sutel. El operador/proveedor notificará cualquier modificación 
            contractual al medio de notificación señalado en el contrato, con una antelación mínima de un (1) mes calendario a su entrada en vigencia, y 
            cuando las modificaciones apliquen a múltiples usuarios finales, además, las publicará en su sitio WEB www.econetzarcero.com y redes sociales del operador/proveedor
            en el mismo plazo. En caso de que dicha modificación sea en detrimento de las condiciones establecidas en el contrato de adhesión, el operador/proveedor 
            informará sobre el derecho del usuario final de rescindir anticipadamente el contrato sin penalización alguna. Las modificaciones contractuales no 
            aplicarán durante la vigencia de la permanencia mínima. 
          </p>
          <p>En los casos que el usuario final solicite una ampliación o modificación de las condiciones contractuales previamente suscritas, el operador/proveedor 
            debe registrar el consentimiento del usuario final. Para lo anterior, el operador/proveedor deberá indicar en su sitio WEB www.econetzarcero.com los canales de atención en que puede realizar dicha solicitud. </p>

          <h2>Gestión de Reclamaciones y Atención al Usuario</h2>
          <ul className="terms-list">
            <li><b>Interposición de reclamaciones ante el operador</b>
              <p>
                Las reclamaciones podrán presentarse de forma gratuita por los usuarios finales o personas autorizadas a través de nuestros Centros de Atención 
                (presencial en Zarcero o remoto vía 800-ECONETCR). Contamos con mecanismos de asistencia para usuarios con discapacidad.
              </p>
              <p>Para cada gestión, EcoNet Zarcero brindará al usuario un número consecutivo de referencia. La presentación no requiere abogado ni documentos formales. 
                El plazo máximo para resolver y brindar respuesta efectiva es de <b>diez (10) días hábiles.</b></p>
            </li>
            <li><b>Procedimiento de intervención de la SUTEL</b>
            <p>
              En caso de resolución negativa, insuficiente o ausencia de resolución (respuesta omisa) por nuestra parte, el usuario final podrá acudir a la SUTEL 
              (Línea 800-88-SUTEL / www.sutel.go.cr). Esta gestión no está sujeta a formalidades, siempre que se cumpla con los requisitos mínimos exigidos en la normativa.
            </p>
            </li>

          </ul>
             <h2>Horario de Atención al Cliente</h2>
          <p>
            Lunes a Viernes: 7am – 7pm | Fines de semana y feriados: 8am – 5pm (Tel.: 800-EcoNetCR o 8747-1656).<br />
            Atención presencial: 50m norte de Coocique, Zarcero (9:30am – 5:30pm).
          </p>

          <h2>Contacto</h2>
          <p>Para dudas o reclamos: <a href="mailto:econetzarcero@gmail.com" className="terms-link">econetzarcero@gmail.com</a></p>
        </div>

        <footer className="terms-footer">
          <p>Fecha de última actualización: 25 de marzo de 2026</p>
          <p>© 2025 EcoNet Zarcero SRL. Todos los derechos reservados.</p></footer>
      </section>
    </div>
  );
};