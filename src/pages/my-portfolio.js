import React from "react"
import Helmet from "react-helmet"
import { Link } from 'gatsby'

import Header from './layout/header-en'
import Footer from './layout/footer-en'

const PortfolioPage = () => {
    return (
        <div id="page" className="site container">
            <Helmet>
                <html lang="en" />
                <title>Portfolio – Iris Studio</title>
                <meta name="description" content="What I have been working on, but it's not public." />
                <link rel="alternate" href="https://www.iris-studio.es/portfolio" hrefLang="es" />
            </Helmet>
            <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <Header />

            <div id="content" className="portfolio site-content">
                <section className="page-title row text-center">
                    <article className="large-8 large-centered columns">
                        <header>
                            <h1 className="entry-title">Protected: Portfolio</h1>
                        </header>
                    </article>
                </section>
                <div id="primary" className="content-area row">
                    <main id="main" className="site-main large-12 columns">
                        <article id="post-562" className="post-562 page type-page status-publish post-password-required hentry">
                            <div className="entry-content text-center">
                                <p>This content is protected. To view my portfolio get in <Link to="/contact/">contact</Link></p>
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