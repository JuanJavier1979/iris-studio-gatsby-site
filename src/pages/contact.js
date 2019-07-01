import React from "react"
import Helmet from "react-helmet"

import Header from './layout/header-en'
import Footer from './layout/footer-en'

const ContactPage = () => {
    return (
        <div id="page" className="site container">
            <Helmet>
                <html lang="en" />
                <title>Contact – Iris Studio</title>
                <meta name="description" content="Contact Juan Javier from Iris Studio." />
            </Helmet>
            <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <Header />

            <div id="content" className="contacto site-content">
                <section className="page-title row text-center">
                    <article className="large-8 large-centered columns">
                        <header>
                            <h1 className="entry-title">Contact</h1>
                        </header>
                    </article>
                </section>
                <div id="primary" className="content-area row">
                    <main id="main" className="site-main large-12 columns">
                        <article id="post-559" className="post-559 page type-page status-publish post-password-required hentry">
                            <div className="entry-content text-center">
                                <p>
                                    After migrating to Gatsby I decided to not have a contact form. <br />
                                    The best way to get in contact is <a href="https://www.twitter.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">Twitter</a> <br />
                                    or the links at the footer.
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

export default ContactPage