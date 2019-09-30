import React, { Component } from 'react';

class Drawing extends Component {

  deleteButtonHandle = (event) => {
    fetch(`http://localhost:3000/drawings/${this.props.drawing.id}`,{
      method: "DELETE"
    }).then(res => res.json())
      .then(this.props.deleteDrawing(this.props.drawing.id))
  }

  render() {
    return (
      <div>
        <button onClick={this.deleteButtonHandle}>delete</button>
        <img src={this.props.drawing.image_url} alt='drawing' />
      </div>
    );
  }
}

export default Drawing;