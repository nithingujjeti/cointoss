import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossResultUrl: 'https:assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      latestHeadsCount += 1
    } else {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      latestTailsCount += 1
    }
    this.setState({
      tossResultUrl: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultUrl, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails </p>
          <img
            src={tossResultUrl}
            alt="toss result"
            className="toss-result-image"
          />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total: {totalCount}</p>
            <p className="total">Heads: {headsCount}</p>
            <p className="total">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
