import React from 'react'
import ProfilePic from "../../assets/images/profile.JPG"
import "./aboutMe.css"
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const AboutMe = () => {
  return (
    <div class="container">
      <div class="aboutme-card">
        <h2>About Me</h2>
        <img src={ProfilePic} alt="Logo" />
        <p>Full Stack Web Developer with a background in Sales and a life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among staff for strong wit and attention to detail no matter the complexity of the project.</p>
      </div>
      <div class="icons">
        <a href="https://github.com/RichardBaier"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/rick-baier-0b2b95229/"><AiFillLinkedin /></a>
        <a href="https://www.youtube.com/channel/UCvkG15GnDH5LcFRU8QxGK0Q"><AiFillYoutube /></a>
      </div>
    </div>
  )
}

export default AboutMe
