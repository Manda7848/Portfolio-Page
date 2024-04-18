import "./hero.css";

import React, {Component} from 'react';


class hero extends Component  {

    render(){
        return (
            <div className="hero-2">
                <div className="head-2">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
    
}

export default hero
