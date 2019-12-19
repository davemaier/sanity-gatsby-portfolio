import { Link } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'
import { navigate } from '@reach/router';

import styles from './header.module.scss'

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
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="https://bulma.io/images/bulma-logo.png" style={{ width: '88px' }} alt="" />
          </Link>
          <div className={`navbar-burger burger ${burgerActive}`} onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navbar-menu ${menuActive}`} >
          <div className="navbar-end">
            <a className="navbar-link" onClick={this.menuClickContact}>
              Contact
            </a>
            <Link className="navbar-link" to="/archive" onClick={this.toggleMenu}>
              Blog
      </Link>
            <Link className="navbar-link" to="/contact" onClick={this.toggleMenu}>
              Contact
      </Link>
          </div>
        </div>
      </nav>)
  }
};

export default Header;
