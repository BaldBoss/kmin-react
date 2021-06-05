import React from "react";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import News from "./News";

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            site:"",
            fullname:"",
            phone:"",
            email:"",
            InfoCheck:false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onDash = () => {
        this.setState({site:"Dashboard"})
    }
    onNews = () => {
        this.setState({site:"News"})
    }
    onContact = () => {
        this.setState({site:"Contact"})
    }
    handleName = (e) =>{
        this.setState({fullname:e.target.value})
    }
    handlePhone = (e) =>{
        this.setState({phone:e.target.value})
    }
    handleEmail = (e) =>{
        this.setState({email:e.target.value})
    }
    handleSubmit(event) {
        this.setState({InfoCheck:true})
        event.preventDefault();
      }
    render(){
        return(
            <div className="wrapper">
                <div className="menu">
                    {this.state.InfoCheck===true ? <h4 className="text-center">Xin Chao <br></br> {this.state.fullname}</h4> : null}
                    <div className="aList">
                        <a href="#" onClick={this.onDash}>Dashboard</a>
                        <a href="#" onClick={this.onNews}>News</a>
                        <a href="#" onClick={this.onContact}>Contact</a>
                    </div>
                    
                </div>
                <div className="Content">
                   {this.state.site === "Dashboard" ? <Dashboard></Dashboard> : this.state.site === "News" ? <News></News> :
                   this.state.site === "Contact" ? <Contact handleName={this.handleName} handlePhone={this.handlePhone
                   } handleEmail ={this.handleEmail} handleSubmit={this.handleSubmit} {...this.state}></Contact> : null}
                </div>
            </div>
        )
    }
};
