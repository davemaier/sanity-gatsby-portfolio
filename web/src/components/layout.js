import React from 'react'
import Header from './navbar'

import '../styles/bulma_custom.scss'
import Footer from './footer'
import { ThemeProvider } from 'emotion-theming'
import {lightGreen} from '../styles/theme'



const Layout = ({children}) => (
  <ThemeProvider theme={lightGreen}>
    <Header/>
    
    <div>{children}</div>
    <Footer></Footer>
  </ThemeProvider>
)

export default Layout
