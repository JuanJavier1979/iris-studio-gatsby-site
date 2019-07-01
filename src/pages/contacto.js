import React from "react"
import Helmet from "react-helmet"

import Header from './layout/header'
import Footer from './layout/footer'

const ContactoPage = () => {
    return (
        <div id="page" className="site container">
            <Helmet>
                <html lang="es" />
                <title>Contacto – Iris Studio</title>
                <meta name="description" content="Contacta con Juan Javier de Iris Studio." />
                <link rel="alternate" href="https://www.iris-studio.es/contact" hrefLang="en" />
            </Helmet>
            <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <Header />

            <div id="content" className="contacto site-content">
                <section className="page-title row text-center">
                    <article className="large-8 large-centered columns">
                        <header>
                            <h1 className="entry-title">Contacto</h1>
                        </header>
                    </article>
                </section>
                <div id="primary" className="content-area row">
                    <main id="main" className="site-main large-12 columns">
                        <article id="post-559" className="post-559 page type-page status-publish post-password-required hentry">
                            <div className="entry-content text-center">
                                <p>
                                    Después de migrar mi web a Gatsby he decidido no tener un formulario de contacto. <br />
                                    La mejor manera de contactarme es a través de <a href="https://www.twitter.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">Twitter</a> <br />
                                    o en los enlaces del pie.
                                </p>
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

export default ContactoPage