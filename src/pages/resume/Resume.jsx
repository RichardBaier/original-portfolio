import React from 'react'
import { AiOutlineFile } from "react-icons/ai";
import Download from "../../assets/downloadable/resume.pdf"
import "./resume.css"

const Resume = () => {
  return (
    <div class="content">
      <h2>Resume</h2>
      <div class="resume">
        <p>Download resume here:</p>
        <a href={ Download } target="blank">
          <AiOutlineFile />
        </a>
      </div>
      <div class="list">
        <h3>Front End --</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>AJAX</li>
          <li>React</li>
          <li>Angular</li>
          <li>JQuery</li>
        </ul>
      </div>
      <div class="list">
        <h3>Back End --</h3>
        <ul>
          <li>Node.JS</li>
          <li>Express.JS</li>
          <li>Sequelize</li>
          <li>MySQL</li>
          <li>FireBase</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume
