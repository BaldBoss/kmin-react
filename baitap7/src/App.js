
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Info from './Component/Info';
import Submit from './Component/Submit';
import Home from './Component/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
function App() {
  const [Name,setName] = useState("");
  const [Request,setRequest] = useState("");
  const [Email,setEmail] = useState("");
  const callbackFunction = (childName,ChildRequest,ChildEmail) => {
    setName(childName);
    setRequest(ChildRequest);
    setEmail(ChildEmail);
}
  return (
      <Router>
        
        <Switch>
          <Route exact path="/">
            {console.log(Name,Email,Request)}
            <Home ParentCallBack ={callbackFunction}></Home>
          </Route>
          <Route path="/Info">
            <Info></Info>
          </Route>
          <Route path="/Submit">
            <Submit Name={Name} Request={Request} Email = {Email}></Submit>
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
