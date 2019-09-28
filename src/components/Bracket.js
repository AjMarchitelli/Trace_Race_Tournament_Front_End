import React, { Component } from 'react'

export default class Bracket extends Component {

  state = {
    painting: false
  }

  startPosition = (event) => {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")

    this.setState({
      painting: true
    })

    this.draw(event)
  }

  finishPosition = () => {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    
    this.setState({
      painting: false
    })
    ctx.beginPath()
  }


  draw = (event) => {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")

    if(this.state.painting) {
      ctx.lineWidth = 5
      ctx.lineCap = "round"

      const rectangle = canvas.getBoundingClientRect()
      const height = event.clientY-rectangle.top

      ctx.lineTo(event.clientX, height)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(event.clientX, height)



    } 
  }

  componentDidMount(){
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
   

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
  }

  render() {
    return (
      <div>
        <canvas onMouseDown={this.startPosition} 
        onMouseUp={this.finishPosition} 
        onMouseMove={this.draw} 
        ref="canvas" 
        />
      </div>
    )
  }
}