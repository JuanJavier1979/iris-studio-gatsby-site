import React from "react"
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer id="colophon" className="site-footer" role="contentinfo">
            <section className="row">
                <div className="site-info large-12 columns">
                    <div className="menu-social-container">
                        <ul id="menu-social">
                            <li id="menu-item-864" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-864">
                                <a href="https://www.twitter.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">Twitter</a>
                            </li>
                            <li id="menu-item-865" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-865">
                                <a href="https://es.linkedin.com/in/desarrolladorwordpress/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </li>
                            <li id="menu-item-977" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-977">
                                <a href="https://github.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </li>
                            <li id="menu-item-978" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-978">
                                <a href="https://profiles.wordpress.org/jjmrestituto/" target="_blank" rel="noopener noreferrer">WordPress.org</a>
                            </li>
                            <li id="menu-item-1009" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-1009">
                                <Link to="/politica-de-privacidad/">
                                    Política de privacidad
                                </Link>
                            </li>
                            <li id="menu-item-639" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-639">
                                <Link to="/politica-de-cookies/">
                                    Política de cookies
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <a href="https://gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Proudly powered by Gatsby</a>
                    <span className="sep"> | </span>
                    Theme: Zircone by <a href="https://www.twitter.com/JuanJavier1979" target="_blank" rel="designer noopener noreferrer">@JuanJavier1979</a>.			
                </div>
            </section>
        </footer>
    )
}
    
export default Footer