import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Info (props) {
    
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
            <div className="InfoContent">
                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg"  />
                <h1>Trang Web ban hang cho cong ty ABC</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus eget nulla sodales, faucibus tortor eget, ornare nisl.
                     Interdum et malesuada fames ac ante ipsum primis in faucibus.
                      Aenean sit amet hendrerit erat. Etiam ac neque diam. Nunc eget purus turpis.
                       Phasellus ultricies aliquam luctus. Praesent faucibus consequat 
                       turpis elementum auctor. Interdum et malesuada fames ac ante ipsum 
                       primis in faucibus. Maecenas blandit, ex in accumsan commodo, libero 
                       lacus tempus neque, eget volutpat velit eros nec urna. Mauris congue 
                       ultrices enim, quis iaculis neque hendrerit in. Suspendisse vitae ullamcorper dolor. In fringilla diam iaculis arcu ultrices posuere. Sed nec ex a dui condimentum varius nec et dolor. Sed pulvinar, risus sit amet euismod molestie, 
                    nibh neque ullamcorper nisi, vel maximus massa nisl vitae nisl.</p>
            </div>
        </div>
    )
};
