import React, { Component } from 'react'
import '../Style/Drop.css'

export default class DropNav extends Component {
  render() {
    return (
    <div>
    <div class="dropdown">
    <button class="dropbtn">Dropdown</button>
    <div class="dropdown-content">
    <a href="./team1">Team1</a>
    <a href="./team2">Team2</a>
    <a href="./team3">Team3</a>
    <a href="./team4">Team4</a>
    <a href="./team5">Team5</a>
    <a href="./team6">Team6</a>

    </div>
    </div>
    </div>
    )
  }
}
