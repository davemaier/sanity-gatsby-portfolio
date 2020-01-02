import React from 'react'
import Header from './header'

import '../styles/bulma_custom.scss'
import Footer from './footer'

const Layout = ({children}) => (
  <>
    <Header/>
    
    <div>{children}</div>
    <Footer></Footer>
  </>
)

export default Layout
