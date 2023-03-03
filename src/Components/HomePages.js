import React from 'react'
import Categories from './Categories'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import './style.css'
import Trailer from './Trailer'
import { Helmet } from 'react-helmet'


const HomePages = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GAMESIDN | Thousands Sources</title>
      </Helmet>
      <Header />
      <menu>
        <Home />
        <Trailer />
        <Categories />
        <Footer />
      </menu>
    </div>
  );
}

export default HomePages