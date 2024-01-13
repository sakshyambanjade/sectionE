import React, { Component } from 'react'
import '../Style/Navbar.css'
import DropNav from '../components/DropNav'
export default class Navbar extends Component {
  render() {
    return (
      <>
      <div class="topnav" id="myTopnav">
      <a href="#home" class="active">SECTION-E</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
      </>
    )
  }
}
