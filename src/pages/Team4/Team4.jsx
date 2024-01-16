import React, { Component } from 'react'
import Navbars from '../../components/Navbar';
import Image from '../Team4/Components/Image'
import Members from '../Team4/Components/Members'
// import Loading from '../../components/Loading'
import Footer from '../../components/footer'
export default class Team4 extends Component {
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
