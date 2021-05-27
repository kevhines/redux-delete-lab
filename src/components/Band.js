import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        {this.props.band.name}
        <button onClick={() => this.props.delBand(this.props.band.id)}>Delete This Band</button>
      </li>
    );
  }
};

export default Band;
