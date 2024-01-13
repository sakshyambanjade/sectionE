import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'
import Team1 from '../src/pages/Teams/Team1'
import Team2 from '../src/pages/Teams/Team2'
import Team3 from '../src/pages/Teams/Team3'
import Team4 from '../src/pages/Teams/Team4'
import Team5 from '../src/pages/Teams/Team5'
import Team6 from '../src/pages/Teams/Team6'

export default class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/team1" element={<   Team1  />}/>
        <Route path="/team2" element={<   Team2  />}/>
        <Route path="/team3" element={<   Team3  />}/>
        <Route path="/team4" element={<   Team4  />}/>
        <Route path="/team5" element={<   Team5  />}/>
        <Route path="/team6" element={<   Team6  />}/>
      </Routes>
    )
  }
}
