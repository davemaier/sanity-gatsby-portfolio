import React from 'react'
import Header from './header'

import '../styles/bulma_custom.scss'
import styles from './layout.module.css'
import Footer from './footer'

const Layout = ({children}) => (
  <>
    <Header/>
    
    <div className={styles.content}>{children}</div>
    <Footer></Footer>
  </>
)

export default Layout
