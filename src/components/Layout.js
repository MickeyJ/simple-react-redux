import React, { Component } from 'react'

import Header from './Header/Header'
import TodoComponent from './Todos/TodoComponent'
import Footer from './Footer/Footer'

const Layout = () =>{
  require('../style/vendors/bs.css');
  require('../style/main.scss');
  return(
    <div id="layout">
      <Header />
      <TodoComponent />
      <Footer />
    </div>
  )
};

export default Layout