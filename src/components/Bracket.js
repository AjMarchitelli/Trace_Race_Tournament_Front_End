import React, { Component } from 'react'

export default class Bracket extends Component {

  state = {
    painting: false,
    bold: false,
    color: 'black'
  }

  boldButtonHandle = (event) => {
    this.setState({
      bold: !this.state.bold
    })
  }

  colorHandle = (event) => {
    this.setState({
      color: event.target.name
    })
  }

  eraseHandle = (event) => {
    this.setState({
      color: 'white'
    })
  }


  startPosition = (event) => {
    //const canvas = this.refs.canvas
    //const ctx = canvas.getContext("2d")

    this.setState({
      painting: true
    })

    this.draw(event)
  }

  finishPosition = () => {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    
    this.setState({
      painting: false,

    })
    ctx.beginPath()
  }


  draw = (event) => {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")

    if(this.state.painting) {
      //depending on the state, the lineWidth is either 1 or 5..aka bold or not bold
      this.state.bold===true ? ctx.lineWidth = 5 : ctx.lineWidth=1;
      if(this.state.color==='white'){ctx.lineWidth = 20};
      ctx.lineCap = "round"
      ctx.strokeStyle = this.state.color

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
    //const ctx = canvas.getContext("2d")
   
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
  }

  render() {
    return (
      <div>
        <canvas 
        onMouseDown={this.startPosition} 
        onMouseUp={this.finishPosition} 
        onMouseMove={this.draw} 

        ref="canvas" 
        />
        <button onClick={this.boldButtonHandle}>bold</button>
        <button name='black' onClick={this.colorHandle}>black</button>
        <button name='red' onClick={this.colorHandle}>red</button>
        <button name='blue' onClick={this.colorHandle}>blue</button>
        <button name='green' onClick={this.colorHandle}>green</button>
        <button name='yellow' onClick={this.colorHandle}>yellow</button>
        <button name='purple' onClick={this.colorHandle}>purple</button>
        <button onClick={this.eraseHandle}>eraser</button>

      </div>
    )
  }
}