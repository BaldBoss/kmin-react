import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { HashLink } from 'react-router-hash-link';
export default function Home(props) {
    const [Name,setName] = useState("");
    const [Request,setRequest] = useState("");
    const [Email,setEmail] = useState("");
    const handleNameChange = (e) =>{
        setName(e.target.value);
    }
    const handleRequestChange = (e) =>{
        setRequest(e.target.value);
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }
    const sendData = () =>{
        props.ParentCallBack(Name,Request,Email);
    }
    return(  
        <div className="HomeContainer" >
             <div className="navBar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                        <HashLink to="/#Contact">Contact</HashLink>
                        </li>
                    </ul>
                </div>
            
            <Carousel>
                <Link to="/Info">
                 <div>
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg"  />
                    <p className="legend">Legend 1</p>
                </div>
                </Link>
                <Link to="/Info">
                 <div>
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg"  />
                    <p className="legend">Legend 1</p>
                </div>
                </Link>
                <Link to="/Info">
                 <div>
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg"  />
                    <p className="legend">Legend 1</p>
                </div>
                </Link>
            </Carousel>
            
            <form id="Contact">
                <legend>Request Form</legend>
                <label>Your Name</label>
                <input className="form-control" type="text" onChange={handleNameChange} required></input>
                <label>Request</label>
                <input className="form-control" type="text" onChange={handleRequestChange}></input>
                <label>Email</label>
                <input className="form-control" type="Email" onChange={handleEmailChange}></input>
                <Link to={"/Submit?name="+Name+"&email="+Email} onClick={sendData}><button>Submit</button></Link>
            
            </form>
            
            {Request}
            {Email}
        </div>
    )
};
