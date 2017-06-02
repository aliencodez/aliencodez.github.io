import React from "react";

export default function Grid(props) {
  let grid = props.elems;
  grid = grid.map(item => (
    <div
      key={item.id}
      className="grid-element"
      onClick={props.click.bind(this, item.url)}
    >
      <div className="grid-elem-image">
        <img src={item.imageUrl} />
      </div>
      <div className="grid-elem-info">
        <h3 className="text">{item.title}</h3>
      </div>
    </div>
  ));
  return (
    <div>
      {grid}
    </div>
  );
}
