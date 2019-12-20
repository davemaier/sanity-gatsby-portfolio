import { Link } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'
import { navigate } from '@reach/router';

import styles from './header.module.scss'
import logo from '../images/logo.png'

class Header extends React.Component {

  state = { showMenu: false }

  menuClickContact = () => {
    navigate("/#contact")
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {

    const menuActive = this.state.showMenu ? 'is-active' : '';
    const burgerActive = this.state.showMenu ? 'is-active' : '';
    
    return (
      <nav className="navbar is-fixed-top" style={{maxWidth: "1024px", marginLeft: "auto", marginRight: "auto"}}>
        <div className="navbar-brand">

        <a className="navbar-item" href="https://bulma.io" >
          <img src={logo} style={{maxHeight: "2.4rem", marginRight: "300px"}}/>
        </a>

          <div className={`navbar-burger burger ${burgerActive}`} onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navbar-menu ${menuActive}`} >
          
          <div className="navbar-start">
            
            <Link className="navbar-item" to="/archive" onClick={this.toggleMenu}>
              Home
            </Link>

            <Link className="navbar-item" to="/contact" onClick={this.toggleMenu}>
              Blog
            </Link>
            <a className="navbar-item" onClick={this.menuClickContact}>
              Contact
            </a>
          </div>
          <div className="navbar-end">
            <a className={`${styles.language} navbar-item`}>
              <span className={styles.language}>DE</span>
            </a>
            <a className={`${styles.language} navbar-item`}>
              EN
            </a>
          </div>
        </div>
      </nav>)
  }
};

export default Header;
