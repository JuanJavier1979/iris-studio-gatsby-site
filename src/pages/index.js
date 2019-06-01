import React from "react"

import Header from './layout/header'
import Footer from './layout/footer'

//import indexStyles from './index.module.scss'
import image994 from "../assets/images/featured-isotope.jpg"
import image995 from "../assets/images/featured-zircone.png"

const IndexPage = () => {
    return (
        <div id="page" className="home-page site container">
            <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <Header />

            <div id="hero-area">
                <div className="wrapper row">
                    <div className="large-12 columns">
                        <p className="headline">Hola!</p>
                        <p className="description"><strong>Soy Juan Javier</strong>, desarrollador WordPress <span className="alt-font">&amp;</span> front-end</p>
                    </div>
                </div>
            </div>

            <div id="content" className="site-content">
                <section className="page-title row text-center">
                    <article className="large-8 large-centered columns">
                        <header>
                            <h1 className="entry-title">Inicio</h1>
                        </header>
                    </article>
                </section>
                <div id="primary" className="content-area row">
                    <main id="main" className="site-main large-12 columns">
                        <article id="post-573" className="post-573 page type-page status-publish hentry">
                            <div className="entry-content">
                                <div className="row margin-bottom-60">
                                    <div className="large-12 columns text-center">
                                        <h3>Ahora trabajo en <a href="https://www.pragmatic.agency" target="_blank" rel="noopener noreferrer" className="highlight">Pragmatic Web</a> y NO estoy disponible para trabajos freelance.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row margin-bottom-80">
                                <div className="large-12 medium-12 small-12 columns text-center">
                                    <a href="https://wordpress.org/themes/zircone/" target="_blank" rel="noopener noreferrer">
                                        <img className="aligncenter size-full wp-image-995 shadow" src={image995} alt="Tema Zircone" width="880" height="443" />
                                    </a>
                                    <p></p>
                                    <h3 className="entry-title"><a href="https://wordpress.org/themes/zircone/" target="_blank" rel="noopener noreferrer">Tema Zircone</a></h3>
                                    <p>A simple, lightweight &amp; clean WordPress theme. Zircone is fully responsive based on Foundation CSS Framework.</p>
                                </div>
                            </div>
                            <div className="row margin-bottom-60">
                                <div className="large-12 columns text-center">
                                    <a href="https://wordpress.org/plugins/wanna-isotope/" target="_blank" rel="noopener noreferrer">
                                        <img className="aligncenter size-full wp-image-994 shadow" src={image994} alt="Plugin isotope" width="880" height="443" />
                                    </a>
                                    <p></p>
                                    <h3 className="entry-title"><a href="https://wordpress.org/plugins/wanna-isotope/" target="_blank" rel="noopener noreferrer">Plugin Isotope</a></h3>
                                    <p>A plugin to easily build Isotope/Masonry layouts with any content (posts, pages or custom post types). Responsive grids, filterable content.</p>
                                </div>
                            </div>
                            <div className="row margin-bottom-60">
                                <div className="large-12 columns"></div>
                            </div>
                        </article>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default IndexPage
