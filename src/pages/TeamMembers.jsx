import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SingleTeam from '../components/SingleTeam'

const TeamMembers = () => {
  return (
    <div>
      <Navbar/>
      <SingleTeam/>
      <SingleTeam/>
      <SingleTeam/>
      <Footer/>
    </div>
  )
}

export default TeamMembers
