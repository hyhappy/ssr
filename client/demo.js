import React, {Component} from 'react'

export default class Demo extends Component {
  static getInitProps() {
    return {
      count: 200
    }
  }

  constructor(props) {
    super(props)
    // 此处仅仅是为了模拟测试，实际中尽量不要把props赋值给state
    this.state = {
      count: props.count
    }
  }

  update = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={this.update}>add</button>
      </>
    )
  }
}