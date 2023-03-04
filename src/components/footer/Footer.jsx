import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import "./footer.css"

const Footer = () => {
  return (
    <footer class="icons">
        <a href="https://github.com/RichardBaier"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/rick-baier-0b2b95229/"><AiFillLinkedin /></a>
        <a href="https://www.youtube.com/channel/UCvkG15GnDH5LcFRU8QxGK0Q"><AiFillYoutube /></a>
      </footer>
  )
}

export default Footer
