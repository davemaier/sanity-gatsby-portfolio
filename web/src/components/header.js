import { Link } from 'gatsby'
import React from 'react'
import { navigate } from '@reach/router'


import styled from "@emotion/styled"
import { css } from "@emotion/core"


const Navbar = styled.nav`
  position: absolute; 
  margin-left: auto; 
  margin-right: auto;
  left:0; 
  right:0; 
  max-width: 200px;
`

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
      <Navbar className={`navbar is-transparent`} >
        <div className="navbar-brand">

        
          <div className={`navbar-burger burger ${burgerActive}`} onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navbar-menu ${menuActive}`} >
          
          <div className="navbar-start">
            
            <Link className="navbar-item is-size-4 is-family-monospace has-text-weight-semibold	" to="/" onClick={this.toggleMenu}>
              Home
            </Link>

            <Link className="navbar-item is-size-4 is-family-monospace has-text-weight-semibold	" to="/blog" onClick={this.toggleMenu}>
              Blog
            </Link>
            <a className="navbar-item is-size-4 is-family-monospace has-text-weight-semibold	" onClick={this.menuClickContact}>
              Contact
            </a>
          </div>
          
        </div>
      </Navbar>)
  }
};

export default Header;
