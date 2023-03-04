import React from 'react'
import { MovieLand, Pocketmon, ProfPort, Pokedex, ReadmeGen, DailyPlanner } from "../../assets/images"
import "./portfolio.css"

const Portfolio = () => {
  return (
    <div id="page">
      <h2>Portfolio</h2>
      <div class="projects">
        <div class="card">
          <div class="card-content">
            <div class="image">
            <img src={MovieLand} alt="Logo" />
            </div>
            <div class="name-skills">
              <span class="name">Movieland</span>
              <span class="skills">HTML,JS,React,CSS,Rest API</span>
            </div>
            <div class="button">
              <a href="https://richardbaier.github.io/movieland/" rel="noreferrer" target="_blank">
                <button class="deployed">Deployed</button>
              </a>
              <a href="https://github.com/RichardBaier/movieland" rel="noreferrer" target="_blank">
                <button class="repo">GitHub Repo</button>
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="image">
            <img src={Pocketmon} alt="Logo" />
            </div>
            <div class="name-skills">
              <span class="name">Pocketmon</span>
              <span class="skills">HTML, CSS, JavaScript, API's</span>
            </div>
            <div class="button">
              <a href="https://richardbaier.github.io/pocketmon/" rel="noreferrer" target="_blank">
                <button class="deployed">Deployed</button>
              </a>
              <a href="https://github.com/RichardBaier/pocketmon" rel="noreferrer" target="_blank">
                <button class="repo">GitHub Repo</button>
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="image">
            <img src={ProfPort} alt="Logo" />
            </div>
            <div class="name-skills">
              <span class="name">Original Portfolio</span>
              <span class="skills">HTML, JS, CSS</span>
            </div>
            <div class="button">
              <a href="https://rickbaier.dev/" rel="noreferrer" target="_blank">
                <button class="deployed">Deployed</button>
              </a>
              <a href="https://github.com/RichardBaier/professional-portfolio" rel="noreferrer" target="_blank">
                <button class="repo">GitHub Repo</button>
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="image">
            <img src={Pokedex} alt="Logo" />
            </div>
            <div class="name-skills">
              <span class="name">Pokedex</span>
              <span class="skills">HTML, JS, CSS, API</span>
            </div>
            <div class="button">
              <a href="https://richardbaier.github.io/pokedex/" rel="noreferrer" target="_blank">
                <button class="deployed">Deployed</button>
              </a>
              <a href="https://github.com/RichardBaier/pokedex" rel="noreferrer" target="_blank">
                <button class="repo">GitHub Repo</button>
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="image">
            <img src={ReadmeGen} alt="Logo" />
            </div>
            <div class="name-skills">
              <span class="name">Professional Readme Generator</span>
              <span class="skills">HTML, JS, CSS, Node.JS</span>
            </div>
            <div class="button">
              <a href="https://github.com/RichardBaier/readme-generator" rel="noreferrer" target="_blank">
                <button class="repo">GitHub Repo</button>
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="image">
            <img src={DailyPlanner} alt="Logo" />
            </div>
            <div class="name-skills">
              <span class="name">Daily Planner</span>
              <span class="skills">HTML, JS, CSS</span>
            </div>
            <div class="button">
              <a href="https://richardbaier.github.io/daily-planner/" rel="noreferrer" target="_blank">
                <button class="deployed">Deployed</button>
              </a>
              <a href="https://github.com/RichardBaier/daily-planner" rel="noreferrer" target="_blank">
                <button class="repo">GitHub Repo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
