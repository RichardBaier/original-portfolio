import React from 'react'
import ProfilePic from "../../assets/images/profile.JPG"
import "./aboutMe.css"

const AboutMe = () => {
  return (
    <div class="container">
      <div class="aboutme-card">
        <h2>About Me</h2>
        <img src={ProfilePic} alt="Logo" />
        <p>Full Stack Web Developer with a background in Sales and a life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among staff for strong wit and attention to detail no matter the complexity of the project.</p>
      </div>
    </div>
  )
}

export default AboutMe
