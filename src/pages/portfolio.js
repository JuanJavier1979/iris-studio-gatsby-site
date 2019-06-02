import React from "react"
import Helmet from "react-helmet"
import { Link } from 'gatsby'

import Header from './layout/header'
import Footer from './layout/footer'

const PortfolioPage = () => {
    return (
        <div id="page" className="site container">
            <Helmet>
                <html lang="es" />
                <title>Portfolio – Iris Studio</title>
                <meta name="description" content="En lo que he trabajado, aunque no es público." />
            </Helmet>
            <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <Header />

            <div id="content" className="portfolio site-content">
                <section className="page-title row text-center">
                    <article className="large-8 large-centered columns">
                        <header>
                            <h1 className="entry-title">Protegido: Portfolio</h1>
                        </header>
                    </article>
                </section>
                <div id="primary" className="content-area row">
                    <main id="main" className="site-main large-12 columns">
                        <article id="post-562" className="post-562 page type-page status-publish post-password-required hentry">
                            <div className="entry-content text-center">
                                <p>Este contenido está restringido. Para ver mi portfolio ponte en <Link to="/contacto/">contacto</Link></p>
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

export default PortfolioPage