import { useState } from "react";
import { Redirect } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Submit(props) {
    const {Name,Email,Request} = props;
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [second, setSecond] = useState(10);

    // An interval that will execute every 1 second
    const TenSecondRedirect = setInterval(() => {

        // Decrement our second variable
        // Remember it starts at 5 seconds
        setSecond(second - 1);

        // Once we hit 0 seconds
        // Let's redirect and clear the interval
        if (second == 0) {
        setShouldRedirect(true);
        clearInterval(TenSecondRedirect);
        }
    }, 1000);

    // Redirect to the login page when `shouldRedirect` is true
    if (shouldRedirect) return <Redirect to="/" />;

    return(
        <div>
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
            <div className="InfoContainer">
            
                <h3>Thank you {Name} for your Infomation</h3>
                <h5>Your Request to us is {Request}</h5>
                <h5>We will contact you through your Email {Email} asap</h5>

            
            </div>
        </div>
        
    )
    
};
