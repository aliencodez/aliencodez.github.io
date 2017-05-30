import React from 'react';
import Grid from './grid.js';

export default class Render extends React.Component {
  constructor() {
    super();
    this.state = {
      web: [
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
      logo: [],
    }
  }
  render() {
    let view=this.props.view;
    let grid = <Grid title={this.props.view.toUpperCase()}  elems={this.state[view]} />
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
