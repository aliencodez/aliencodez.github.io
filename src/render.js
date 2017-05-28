import React from 'react';
import Grid from './grid.js';

export default class Render extends React.Component {
  constructor() {
    super();
    this.state = {
      templates: [
        {
          id: 1,
          title: 'Dark Nova',
          imageUrl: "http://lorempixel.com/400/200/"
        },
        {
          id:2,
          title:'Minimal Material',
          imageUrl:'http://lorempixel.com/400/200/'
        }
      ],
      designs: []
    }
  }
  render() {
    let grid = null;
    if (this.props.view === "templates") {
      grid = <Grid title="Templates" elems={this.state.templates}/>
    } else if (this.props.view === "designs") {
      grid = <Grid title="Designs" elems={this.state.designs}/>
    } else {
      grid = null;
    }
    return (
      <div className="render-screen">
        <div className="button" onClick={this.props.updateView.bind(this, 'panels')}>Back</div>
        <div className="render-content">
          <div className="render-title text"><h3>{this.props.view.toUpperCase()}</h3></div>
          <div className="grid">{grid}</div>
        </div>
      </div>
    );

}
}
