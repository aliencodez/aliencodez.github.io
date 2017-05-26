import React from 'react';
import ReactDOM from 'react-dom';
import PanelContainer from "./panelcontainer.js";
import Render from "./render.js";

class Index extends React.Component{

  constructor(){
    super();
    this.state={
      view:'panels',
      panels:[
        {id:1,title:"Templates",view:"templates"},
        {id:2,title:"Designs",view:"designs"},
      ]
    };
    this.updateView = this.updateView.bind(this);
  }

  updateView(newView){
    this.setState({
      view:newView
    });
  }



 render(){
   let view=null;
   if(this.state.view==="panels"){
     view =<PanelContainer updateView={this.updateView} render={this.state.panels}/>
    }
 else{
   view=<Render updateView={this.updateView} view={this.state.view} />
  }
     return (
       <div>
       <div className="section-title">
         <h3 className="dark"><span className="teal">P</span>ortfolio</h3>
       </div>
       <div className="section-body">
          {view}
       </div>
       </div>
     );
   }
}

ReactDOM.render( <Index /> , document.getElementById('portfolio'));
