import React, { Component } from 'react'

export default class WhiteBoard extends Component {

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

    saveImage = (event) => {
      const canvas = this.refs.canvas
      if(canvas.getContext && this.props.currentUser) {
        let myImage = canvas.toDataURL('image/png')
        let userid = this.props.currentUser.id
        let myDrawing = {
          user_id: userid,
          image_url: myImage
        }
        fetch('http://localhost:3000/drawings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
          },
          body: JSON.stringify(myDrawing)
        }).then(res => res.json())
          .then(data => {this.props.addDrawing(data)})
      }
    }

  componentDidMount(){
    const canvas = this.refs.canvas
    //const ctx = canvas.getContext("2d")

    canvas.height = window.innerHeight-50
    canvas.width = window.innerWidth-50
  }

  render() {
    return (
        <div >
          <button onClick={this.boldButtonHandle}>bold</button>
          <button name='black' onClick={this.colorHandle}>black</button>
          <button name='red' onClick={this.colorHandle}>red</button>
          <button name='blue' onClick={this.colorHandle}>blue</button>
          <button name='green' onClick={this.colorHandle}>green</button>
          <button name='yellow' onClick={this.colorHandle}>yellow</button>
          <button name='purple' onClick={this.colorHandle}>purple</button>
          <button onClick={this.eraseHandle}>eraser</button>
          <button  className='save' onClick={this.saveImage}>Save Picture</button>

          <canvas 
          id="canvas"
          onMouseDown={this.startPosition} 
          onMouseUp={this.finishPosition} 
          onMouseMove={this.draw} 
          ref="canvas" 
          />

        </div>
    )
  }
}