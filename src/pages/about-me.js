import React from "react"
import Helmet from "react-helmet"

import Header from './layout/header-en'
import Footer from './layout/footer-en'

const SobreMiPage = () => {
    return (
        <div id="page" className="site container">
            <Helmet>
                <html lang="es" />
                <title>About me – Iris Studio</title>
                <meta name="description" content="Read this if you want to know more about Juan Javier & Iris Studio :-)" />
            </Helmet>
            <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <Header />

            <div id="content" className="site-content">
                <section className="page-title row text-center">
                    <article className="large-8 large-centered columns">
                        <header>
                            <h1 className="entry-title">About me…</h1>
                        </header>
                    </article>
                </section>
                <div id="primary" className="content-area row">
                    <main id="main" className="site-main large-12 columns">
                        <article id="post-564" className="post-564 page type-page status-publish post-password-required hentry">
                            <div className="entry-content">
                                <p>Hola! I am Javier Moreno and I am a passionated web developer.</p>
                                <p>I am specially focused on WordPress and custom theme development. I am actually working on Pragmatic Agency from the UK.</p>
                                <p>I live in Malaga, work remotely and love it.</p>
                                <h2>About me…</h2>
                                <p>I am developing web sites since 1999, when I started (I was young) I was using Hot Metal Pro, since then till now I've been producing websites following the evolution of this industry: from the first WYSIWYG editors, the first sites using CSS, the Flash era, XHTML &amp; validation, then HTML5-CSS3-jQuery and lastly in love with PWAs and Gatsby.</p>
                                <p>Previously I created sites using my own cusomt CMS, but since I discovered WordPress back in 2009 my career changed. I left PHP fights, problems implementing new features, security, etc. All that disappeared using WordPress, that CMS has given me more freedom and time to get deeper involvement with theme design and relations with the client.</p>
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