import React from "react"
import HeroStyles from "./hero.module.css"

const Hero = () => (
  <div className={HeroStyles.hero}>
    <span className={HeroStyles.hero__emphasis}>Web developer,</span><br></br>
    illustrator, designer,
    creator, popper, locker, doodler, artist, friend, gamer, dreamer, collaborator,<br></br>
    <span className={HeroStyles.hero__emphasis}>human</span>
  </div>
)

export default Hero
