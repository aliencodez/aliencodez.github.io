import React from 'react';

export default function Render(props) {
  let grid = null;
  if (props.view === "templates") {
    grid = < h1 className = "text" > Templates < /h1>
  } else if (props.view === "designs") {
    grid = < h1 className = "text" > Designs < /h1>
  } else {
    grid = null;
  }
  return ( <
    div className = "render-screen" >
    <
    div className = "button"
    onClick = {
      props.updateView.bind(this, 'panels')
    } > Back < /div> <
    div className = "grid" > {
      grid
    } <
    /div> < /
    div >
  );
}
