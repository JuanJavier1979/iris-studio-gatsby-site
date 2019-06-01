import React from "react"

import Header from './layout/header'
import Footer from './layout/footer'

const PrivacidadPage = () => {
    return (
        <div id="page" className="site container">
            <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <Header />

            <div id="content" className="cookies site-content">
                <section className="page-title row text-center">
                    <article className="large-8 large-centered columns">
                        <header>
                            <h1 className="entry-title">Política de Cookies</h1>
                        </header>
                    </article>
                </section>
                <div id="primary" className="content-area row">
                    <main id="main" className="site-main large-12 columns">
                        <article id="post-639" className="post-639 page type-page status-publish hentry">
                            <div className="entry-content">
                                <p>Cookie&nbsp;es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.. El navegador del usuario memoriza cookies en el disco duro solamente durante la sesión actual ocupando un espacio de memoria mínimo y no perjudicando al ordenador. Las cookies no contienen ninguna clase de información personal específica, y la mayoría de las mismas se borran del disco duro al finalizar la sesión de navegador (las denominadas cookies de sesión).</p>
                                <p>La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten o impiden en los ajustes de seguridad las cookies temporales o memorizadas.</p>
                                <p><strong>¿Qué cookies utiliza esta página web?</strong></p>
                                <ul>
                                <li><strong>«gdpr»</strong>:&nbsp;Ha aceptado el usuario la política de privacidad?</li>
                                <li><strong>«_pk_id»</strong>:&nbsp;Es un usuario nuevo o es un usuario recurrente?</li>
                                <li><strong>«_pk_ses»</strong>:&nbsp;Qué páginas se han visitado</li>
                                <li><strong>«_pk_ref»</strong>:&nbsp;Desde qué web accedió el usuario.</li>
                                </ul>
                                <p><strong>Nuestras Cookies no contienen información personal</strong>: Las cookies de análisis sólo contienen un valor numérico y NUNCA detalles o información personal. No pueden ser usadas para registrar/rastrear tu identidad, ni para identificarle en otras páginas web. Usamos solo cookies anónimas para mejorar tu experiencia en esta web y nunca se comparten ni se compartirán con otras partes.</p>
                                <p><strong>SIN cookies</strong>: Si no quieres aceptar las cookies, puedes ajustar las preferencias de tu navegador adecuadamente.</p>
                                <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p>
                                <ul>
                                    <li><a href="http://support.google.com/chrome/bin/answer.py?hl=es&amp;answer=95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                                    <li><a href="http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9" target="_blank" rel="noopener noreferrer">Explorer</a></li>
                                    <li><a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                                    <li><a href="http://support.apple.com/kb/ph5042" target="_blank" rel="noopener noreferrer">Safari</a></li>
                                </ul>
                                <p>Si tiene dudas sobre esta política de cookies, puede contactar con Iris Studio en info @ iris-studio (punto) es</p>
                            </div>
                            <footer className="entry-footer"></footer>
                        </article>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PrivacidadPage