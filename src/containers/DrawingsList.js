import React, { Component } from 'react';
import Drawing from '../components/Drawing.js'

class DrawingsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.currentUser.drawings.map(drawing => 
            <div><li className='whiteLi'><Drawing 
              deleteDrawing={this.props.deleteDrawing} 
              key={drawing.id} 
              drawing={drawing}/></li>
            <br></br><br></br></div>)
          }
        </ul>
      </div>
    );
  }
}

export default DrawingsList;