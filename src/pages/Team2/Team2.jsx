import React, { Component } from 'react'
import Navbars from '../../components/Navbar';
import Image from '../Team2/Components/Image'
import Members from '../Team1/Components/Members'
import Footer from '../../components/footer'
export default class Team2 extends Component {
  render() {
    return (
      <div>
        <Navbars/>
        <div className='Image'><Image/></div>
        <br></br>
       <div className='members'><Members/></div> 
       <Footer/>
      </div>
    )
  }
}
