import logo from './logo.svg';
import './App.css';
import TodoList from './Component/TodoList';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="App">
      <TodoList></TodoList>
     </div>
    )
  }
}