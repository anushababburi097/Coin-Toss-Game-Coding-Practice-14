// Write your code here
import {Component} from 'react'
import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {tossResultImg: headImgUrl, headsCount: 0, tailsCount: 0}

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let updatedHeadCount = headsCount
    let updatedTailsCount = tailsCount

    if (toss === 0) {
      tossImg = headImgUrl
      updatedHeadCount += 1
    } else {
      tossImg = tailsImgUrl
      updatedTailsCount += 1
    }
    this.setState({
      tossResultImg: tossImg,
      headsCount: updatedHeadCount,
      tailsCount: updatedTailsCount,
    })
  }

  render() {
    const {tossResultImg, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="coin-game-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={tossResultImg} className="img" alt="toss result" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="coin-count-container">
            <p className="total-count">Total:{totalCount}</p>
            <p className="heads-count">Heads:{headsCount}</p>
            <p className="tails-count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
