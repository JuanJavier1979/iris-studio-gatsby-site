import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'

import Header from './layout/header'
import Footer from './layout/footer'

import Img from 'gatsby-image'

const IndexPage = (props) => {
    return (
        <div id="page" className="home-page site container">
            <Helmet>
                <html lang="es" />
                <title>Iris Studio</title>
                <meta name="description" content="Antiguo estudio de desarrollo web de Juan Javier. WordPress, front-end y ahora React, Gatsby y PWAs." />
                <link rel="alternate" href="https://www.iris-studio.es/home" hrefLang="en" />
            </Helmet>
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
                            <div className="row margin-bottom-80">
                                <div className="large-12 medium-12 small-12 columns text-center">
                                    <a href="https://wordpress.org/themes/zircone/" target="_blank" rel="noopener noreferrer">
                                        <Img className="aligncenter size-full wp-image-995 shadow" fluid={props.data.imageZircone.childImageSharp.fluid} alt="Tema Zircone" />
                                    </a>
                                    <p></p>
                                    <h3 className="entry-title"><a href="https://wordpress.org/themes/zircone/" target="_blank" rel="noopener noreferrer">Tema Zircone</a></h3>
                                    <p>A simple, lightweight &amp; clean WordPress theme. Zircone is fully responsive based on Foundation CSS Framework.</p>
                                </div>
                            </div>
                            <div className="row margin-bottom-60">
                                <div className="large-12 columns text-center">
                                    <a href="https://wordpress.org/plugins/wanna-isotope/" target="_blank" rel="noopener noreferrer">
                                        <Img className="aligncenter size-full wp-image-994 shadow" fluid={props.data.imageIsotope.childImageSharp.fluid} alt="Plugin isotope" />
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

export const imagesQuery = graphql`
  query {
    imageHero: file(relativePath: { eq: "assets/images/photo-1429091967365-492aaa5accfe-b.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imageZircone: file(relativePath: { eq: "assets/images/featured-zircone.png" }) {
      childImageSharp {
        fluid(maxWidth: 880 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imageIsotope: file(relativePath: { eq: "assets/images/featured-isotope.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 880) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
  }
`
