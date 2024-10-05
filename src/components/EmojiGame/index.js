import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojis: [],
    gameStatus: 'playing', // 'won' | 'lost' | 'playing'
  }

  componentDidUpdate() {
    const {score, topScore} = this.state

    if (score > topScore) {
      this.setState({topScore: score})
    }
  }

  // Move the shuffledEmojisList method below lifecycle methods
  shuffledEmojisList = () => {
    const {emojisList} = this.props // Destructure props here
    return emojisList.sort(() => Math.random() - 0.5)
  }

  handleEmojiClick = id => {
    const {clickedEmojis, score} = this.state
    const {emojisList} = this.props

    if (clickedEmojis.includes(id)) {
      // If the emoji has been clicked before
      this.setState({gameStatus: 'lost'})
    } else {
      // If it's a new emoji
      const newScore = score + 1
      this.setState(prevState => ({
        score: newScore,
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))

      if (newScore === emojisList.length) {
        // If all emojis have been clicked
        this.setState({gameStatus: 'won'})
      }
    }
  }

  handlePlayAgain = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      gameStatus: 'playing',
    })
  }

  render() {
    const {score, topScore, gameStatus} = this.state

    return (
      <div className="emoji-game">
        <NavBar score={score} topScore={topScore} />
        {gameStatus === 'playing' ? (
          <div className="emoji-container">
            {this.shuffledEmojisList().map(emoji => (
              <EmojiCard
                key={emoji.id}
                emoji={emoji}
                onClick={() => this.handleEmojiClick(emoji.id)}
              />
            ))}
          </div>
        ) : (
          <WinOrLoseCard
            score={score}
            status={gameStatus}
            onPlayAgain={this.handlePlayAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
