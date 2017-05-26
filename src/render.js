import React from 'react';

export default function Render(props){
  let grid=null;
  return(
    <div>
      <div className="button" onClick={props.updateView.bind(this,'panels')}>Back</div>
      <div className="grid">
          {grid}
      </div>
    </div>
  );
}
