import React from "react";
import Panel from "./panel.js";

export default function PanelContainer(props) {
  let list = props.render;
  let panels = Object.keys(list).map(key => (
    <Panel
      updateView={props.updateView}
      key={list[key].id}
      title={list[key].title}
      view={list[key].view}
    />
  ));
  return (
    <div className="panel-container">
      {panels}
    </div>
  );
}
