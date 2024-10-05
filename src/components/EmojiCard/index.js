import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {emoji, onClick} = this.props

    return (
      <li>
        <button type="button" className="emoji-card" onClick={onClick}>
          <img src={emoji.emojiUrl} alt={emoji.emojiName} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
