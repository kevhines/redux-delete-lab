import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

    renderBands = () => this.props.bands.map((band) => <Band key={band.id} band={band} delBand={this.props.delBand} />)


  render() {
    return(
      <div>
        {this.renderBands()}
      </div>
    );
  }
};

export default Bands;
