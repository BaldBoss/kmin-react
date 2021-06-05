import React from "react";

export default class Contact extends React.Component {
    constructor(props){
        super(props)
        // this.state={
        //     fullname:"",
        //     phone:"",
        //     email:"",
        //     InfoCheck:false,
        // }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleName = (e) =>{
    //     this.setState({fullname:e.target.value})
    // }
    // handlePhone = (e) =>{
    //     this.setState({phone:e.target.value})
    // }
    // handleEmail = (e) =>{
    //     this.setState({email:e.target.value})
    // }
    // handleSubmit(event) {
    //     this.setState({InfoCheck:true})
    //     event.preventDefault();
    //   }
    
    renderUserInfo(){
        if(this.props.InfoCheck === true){
            return(
                <div className="container info-container">
                    <h3>Your information</h3>
                    <ul>
                        <li>Full Name: {this.props.fullname}</li>
                        <li>phone: {this.props.phone}</li>
                        <li>Email: {this.props.email}</li>
                    </ul>
                    <h5>We will contact you through your email at {this.props.email} or through phone number {this.props.phone}</h5>
                    <h5>Thank You for Choosing us!!!</h5>
                </div>
            )
        }

    }
    render(){
        return(
            <div className="container">
                <h1>Lien he voi chung toi</h1>
                <form>
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" onChange={this.props.handleName}></input>
                    <label className="form-label">Phone</label>
                    <input type="number" className="form-control" onChange={this.props.handlePhone}></input>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" onChange={this.props.handleEmail}></input>
                    <button className="btn-primary" onClick={this.props.handleSubmit}>Send Info</button>
                </form>
                {this.renderUserInfo()}
            </div>
            
        )
    }
};
