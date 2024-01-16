import React, { Component } from 'react';
import Nabars from '../components/Navbar';
import Carasoule from '../components/Carsoule';
// import Card from '../components/Card'
import Top from '../components/Top'
import Footer from '../components/footer'
import Accordion from '../components/Accordion'

export default class Home extends Component {
  render() {
    return (
      <>
      <Top/>
       <Nabars/>
        <div className='carasoule'><Carasoule/></div>
        <br></br>
        <Accordion/>
        <Footer/>
        <br></br>

      </>
    )
  }
}
