import React from "react"
import { Link } from 'gatsby'

import logo from "../../assets/images/logo.png"

const Header = () => {
    return (
        <header id="mast-head" className="site-header" role="banner">
            <div className="row">
                <div className="site-branding large-4 medium-4 columns">
                    <Link to="/home/" rel="home">
                        <img src={logo} alt="Iris Studio" />
                    </Link>
                </div>
                <nav id="main-menu" className="menu large-8 medium-8 columns" role="navigation">
                    <div className="menu-principal_es-container">
                        <ul id="menu-principal_es-1">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-575">
                                <Link to="/home/">Home</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-579">
                                <Link to="/my-portfolio/">Portfolio</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-578">
                                <Link to="/about-me/">About me…</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-580">
                                <Link to="/contact/">Contact</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-575">
                                <Link to="/">Web en español</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
    
export default Header