import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoIncrement = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaIncrement = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="inside-container">
          <h1 className="heading">
            Bob ate <span className="span-item">{mango}</span> mangoes
            <span className="span-item">{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="single-item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image-width"
                alt="mango"
              />
              <button
                className="button-fruit"
                type="button"
                onClick={this.mangoIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="single-item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image-width"
                alt="banana"
              />
              <button
                className="button-fruit"
                type="button"
                onClick={this.bananaIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
