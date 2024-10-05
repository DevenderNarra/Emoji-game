import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {score, status, onPlayAgain} = this.props
    const result = score === 12 ? 'Best Score' : 'Score'
    const imageUrl =
      status === 'won'
        ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

    return (
      <div className="result-card">
        <img src={imageUrl} alt="win or lose" className="result-image" />
        <h1 className="result-heading">
          {status === 'won' ? 'You Won' : 'You Lose'}
        </h1>
        <p>{result}</p>
        <p>{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onPlayAgain}
        >
          Play Again
        </button>
      </div>
    )
  }
}

export default WinOrLoseCard
