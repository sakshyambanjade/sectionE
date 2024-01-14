import React, { Component } from 'react'
import Navbars from '../../components/Navbar';
import Image from '../Team1/Components/Image'
import Members from '../Team1/Components/Members'
export default class Team1 extends Component {
  render() {
    return (
      <div>
        <Navbars/>
        <Image/>
        <br></br>
        <h1 className='text-center'>Team Members</h1>
        <Members/>
      </div>
    )
  }
}
