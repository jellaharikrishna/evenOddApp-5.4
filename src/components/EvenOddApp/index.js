import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEvenOdd: 'Even'}

  isBtnClicked = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    if (randomNum % 2 === 0) {
      this.setState(() => ({count: randomNum, isEvenOdd: 'Even'}))
    } else {
      this.setState(() => ({count: randomNum, isEvenOdd: 'Odd'}))
    }
  }

  render() {
    const {count, isEvenOdd} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="descrpition">Count is {isEvenOdd} </p>
          <button type="button" className="button" onClick={this.isBtnClicked}>
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
