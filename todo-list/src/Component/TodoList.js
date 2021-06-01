import React from 'react';
import CreateTask from './CreateTask';

export default class App extends React.Component{
    constructor(props){
      super(props)
      this.state ={
          check: false,
          task:["cho cho an","cho meo an",],
          input:"",
      }
      this.delete = this.delete.bind(this);
    }
    delete(id){
        this.setState(prevState => ({
            task: prevState.task.filter(el => el != id )
        }));
     }
    saveInput = (e) =>{
        this.setState({input:e.target.value})
    }
    addNewItem = () =>{
        let {task,input}=this.state;
        task.push(input);
        this.setState({check:false})
    }
    openPopUp = () =>{
        this.setState({check:true})
    }
    closePopUp = () =>{
        this.setState({check:false})
    }
    render(){
      return(
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-primary mt-2" onClick={this.openPopUp} >Create Task</button>
                
            </div>
            <div className="Task-container">
                <ul>
                    {this.state.task.map(tasks =>(
                        <li key={tasks}>{tasks} <a href="#" onClick={this.delete.bind(this,tasks)}>X</a></li>
                    ))}
                </ul>
                    
                
               
             </div> 
            {this.state.check === true ? <CreateTask onClose={this.closePopUp} saveInput={this.saveInput} addNewItem={this.addNewItem}></CreateTask> : null}
        </>
      )
    }
  }



