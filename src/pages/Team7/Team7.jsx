import React, { Component } from 'react'
import Navbars from '../../components/Navbar';
import Image from '../Team7/Components/Image'
import Members from '../Team7/Components/Member'
// import Loading from '../../components/Loading'
import Footer from '../../components/footer'
export default class Team1 extends Component {
  render() {
    return (
      <>
       <Navbars/>
        <br></br>
        <div className='Image'><Image/></div>
        <br></br>
       <div className='members'><Members/></div> 
       <Footer/>
      </>
    )
  }
}

