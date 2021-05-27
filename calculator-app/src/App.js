                    
import './App.css';
import Button from './Component/Button';
import Screen from './Component/Screen';
import { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input:"",
      prevInput:"",
      curInput:"",
      operator:"",
      check: false
    }
  }
  addToInput = val =>{
    if(this.state.check === true){
      this.setState({input:"",check:false})
      
    }else{
      this.setState({input: this.state.input + val});
    }
    
  };
  addZero = val =>{
    // neu nhu state input khong empty thi add zero
    if(this.state.input !==""){
      this.setState({input: this.state.input + val});
    }
  };
  addDecimal = val =>{
    if(this.state.input.indexOf(".") === -1){
      this.setState({input: this.state.input + val});
    }
  }
  addClear = () =>{
    this.setState({input:"", check:false})
  }
  Add = () => {
    this.setState({prevInput: this.state.input});
    this.setState({input:""});
    this.setState({operator:"plus"})
  }
  Subtract = () => {
    this.setState({prevInput: this.state.input});
    this.setState({input:""});
    this.setState({operator:"minus"})
  }
  Multiply = () => {
    this.setState({prevInput: this.state.input});
    this.setState({input:""});
    this.setState({operator:"multiply"})
  }
  Devide = () => {
    this.setState({prevInput: this.state.input});
    this.setState({input:""});
    this.setState({operator:"devide"})
  }
  Evaluation = () => {
    this.state.curInput = this.state.input;
    if(this.state.operator === "plus"){
      this.setState({
        input: parseFloat(this.state.prevInput) + parseFloat(this.state.curInput),
        check: true,
      })
    }else if(this.state.operator ==="minus"){
      this.setState({
        input: parseFloat(this.state.prevInput) - parseFloat(this.state.curInput),
        check: true,
      })
    }else if(this.state.operator ==="multiply"){
      this.setState({
        input: parseFloat(this.state.prevInput) * parseFloat(this.state.curInput),
        check: true,
      })
    }else if(this.state.operator ==="devide"){
      if(parseInt(this.state.curInput) !== 0)
      {
        this.setState({
          input: parseFloat(this.state.prevInput) / parseFloat(this.state.curInput),
          check: true,
          })
      }else{
        this.setState({
          input: "Error",
          check: true,
        })
      }
      
    }
  }
  render(){
    return (
      <div className="App">
        <div className="cal-wrapper">
        <Screen>{this.state.input}</Screen>
        <div className="row">
          <Button onAdd={this.addToInput} name="7"></Button>
          <Button onAdd={this.addToInput} name="8"></Button>
          <Button onAdd={this.addToInput} name="9"></Button>
          <Button onAdd={this.Devide}  name="/"></Button>
        </div>
        <div className="row">
          <Button onAdd={this.addToInput} name="4"></Button>
          <Button onAdd={this.addToInput} name="5"></Button>
          <Button onAdd={this.addToInput} name="6"></Button>
          <Button onAdd={this.Multiply} name="X"></Button>
        </div>
        <div className="row">
          <Button onAdd={this.addToInput} name="1"></Button>
          <Button onAdd={this.addToInput} name="2"></Button>
          <Button onAdd={this.addToInput} name="3"></Button>
          <Button onAdd={this.Add} name="+"></Button>
        </div>
        <div className="row">
          <Button onAdd={this.addToInput} name="0"></Button>
          <Button onAdd={this.addDecimal} name="."></Button>
          <Button onAdd={this.Evaluation} name="="></Button>
          <Button onAdd={this.Subtract} name="-"></Button>
        </div>
        <div>
          <Button onAdd={this.addClear} name="clear"></Button>
        </div>
  
        </div>
        
      </div>
    );
  }
}

export default App;
