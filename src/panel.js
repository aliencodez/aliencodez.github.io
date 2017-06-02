import React from "react";

export default function Panel(props) {
  return (
    <div className="panel" onClick={props.updateView.bind(this, props.view)}>
      <div className="panel-title">
        {props.title}
      </div>
    </div>
  );
}
