import React from "react"
import Helmet from "react-helmet"

import Header from './layout/header'
import Footer from './layout/footer'

const SobreMiPage = () => {
    return (
        <div id="page" className="site container">
            <Helmet>
                <html lang="es" />
                <title>Sobre mí – Iris Studio</title>
                <meta name="description" content="Lee esto si quieres saber algo más sobre Juan Javier & Iris Studio :-)" />
            </Helmet>
            <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <Header />

            <div id="content" className="site-content">
                <section className="page-title row text-center">
                    <article className="large-8 large-centered columns">
                        <header>
                            <h1 className="entry-title">Sobre mí…</h1>
                        </header>
                    </article>
                </section>
                <div id="primary" className="content-area row">
                    <main id="main" className="site-main large-12 columns">
                        <article id="post-564" className="post-564 page type-page status-publish post-password-required hentry">
                            <div className="entry-content">
                                <p>Hello! Me llamo Javier Moreno y soy un apasiado diseñador web y desarrollador. ¿Las dos cosas? yeah!</p>
                                <p>Estoy especialmente enfocado en desarrollo WordPress y diseño de temas personalizados. Actualmente colaboro como freelance para varias agencias de diseño web y social media, pero también acepto trabajos de pequeñas empresas.</p>
                                <p>Vivo en Málaga, aunque me muevo por toda la provincia. También por Sevilla, Córdoba, Madrid y por Ibiza donde nací.</p>
                                <h2>Sobre mí…</h2>
                                <p>Llevo en el diseño web desde 1999, cuando empecé (de joven) usaba Hot Metal Pro, desde entonces hasta ahora he estado produciendo websites siguiendo la evolución en este área: desde los primeros editores WYSIWYG, las primeras webs realizadas con CSS, la era Flash, XHTML &amp; la validación, después HTML5-CSS3-jQuery y últimamente con PWAs y Gatsby.</p>
                                <p>Anteriormente creaba las webs usando mi propio CMS, pero desde que descubrí WordPress en 2009 todo cambió en mi carrera. Dejé atrás las peleas con PHP, problemas de implementar nuevas funcionalidades, seguridad, etc. Todo desapareció con WordPress, que me ha dado más libertad para dedicar más tiempo a involucrarme en el diseño y trabajar con los clientes.</p>
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

export default SobreMiPage