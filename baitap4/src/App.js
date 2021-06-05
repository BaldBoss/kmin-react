
import React from "react";
import './App.css';
import Main from './Component/Main';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="App">
        <Main></Main>
     </div>
    )
  }
}
