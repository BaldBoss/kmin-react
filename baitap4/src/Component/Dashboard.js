import React from "react";

export default class Dashboard extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="Dash-Wrapper">
                <div className="Dash-Container">
                    <h5 className="mt-3 small-text">Total Sales</h5>
                    <h1 className="text-center mt-5">$100,000</h1>
                </div>
                <div className="Dash-Container">
                    <h5 className="mt-3 small-text">Customer Count</h5>
                    <h1 className="text-center mt-5">120</h1>

                </div>
                <div className="Dash-Container">
                    <h5 className="mt-3 small-text">Sales Percentage</h5>
                    <h1 className="text-center mt-5">15%</h1>

                </div>
            </div>
        )
    }
};
