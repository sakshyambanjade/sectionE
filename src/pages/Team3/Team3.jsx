import React, { Component } from 'react'
import Navbars from '../../components/Navbar';
import Image from '../Team3/Components/Image'
import Members from '../Team3/Components/Members'
import Footer from '../../components/footer'
export default class Team3 extends Component {
  render() {
    return (
      <div>
         <Navbars/>
          <br></br>
          <div className='Image'><Image/></div>
         <br></br>
        <div className='members'><Members/></div> 
         <Footer/>     
        </div>
    )
  }
}
