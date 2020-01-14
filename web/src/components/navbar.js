import { Link } from 'gatsby'
import React from 'react'
import { navigate } from '@reach/router'
import scrollTo from 'gatsby-plugin-smoothscroll';


import styled from "@emotion/styled"
import { css } from "@emotion/core"


const Navbar = styled.nav({
  position: 'absolute',
  width: '100%',
  
  '@media screen and (max-width: 769px)': {
    backgroundColor: "hsl(180, 18%, 82%)",
    position:'relative',
  }

})

const NavbarMenu = styled.div({
  justifyContent: 'center'
})  

const NavbarStart = styled.div({
  marginRight: 'unset'
})


const Burger = styled.div({
  marginRight: '0',
	marginLeft: 'auto',
})

class Header extends React.Component {

  state = { showMenu: false }

  

  menuClickContact = () => {
    scrollTo('#contact')
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
      <Navbar className={`navbar`} >
        <div className="navbar-brand">
        <Burger className={`navbar-burger burger ${burgerActive}`} onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </Burger>
        </div>

        <NavbarMenu className={`navbar-menu ${menuActive}`} >
          
          <NavbarStart className="navbar-start">

            <Link className="navbar-item is-size-4 is-family-monospace has-text-weight-semibold	" to="/" onClick={this.toggleMenu}>
              Home
            </Link>

            {/* <Link className="navbar-item is-size-4 is-family-monospace has-text-weight-semibold	" to="/blog" onClick={this.toggleMenu}>
              Blog
            </Link> */}
            <a className="navbar-item is-size-4 is-family-monospace has-text-weight-semibold	" onClick={this.menuClickContact}>
              Contact
            </a>

           
          </NavbarStart>

          
          
        </NavbarMenu>
      </Navbar>)
  }
};

export default Header;
