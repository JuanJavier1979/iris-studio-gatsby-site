import React from "react"
import { Link } from 'gatsby'

import logo from "../../assets/images/iris-studio.png"

const Header = () => {
    return (
        <header id="mast-head" className="site-header row" role="banner">
            <div className="site-branding large-4 medium-4 columns">
                <Link to="/" rel="home">
                    <img src={logo} alt="Iris Studio" />
                </Link>
            </div>
            <nav id="main-menu" className="menu large-8 medium-8 columns" role="navigation">
                <div className="menu-principal_es-container">
                    <ul id="menu-principal_es-1" className="hide-for-small-only">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-575">
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-579">
                            <Link to="/portfolio/">Portfolio</Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-578">
                            <Link to="/sobre-mi/">Sobre mí…</Link>
                         </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-580">
                            <Link to="/contacto/">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
    
export default Header