import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore} = this.props

    return (
      <nav className="navbar">
        <img
          src="
https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1>Emoji Game</h1>
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      </nav>
    )
  }
}

export default NavBar
