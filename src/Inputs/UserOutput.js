import React from 'react';
import './output.css'

const output = (props) => {
    return (
        <div className="output">
            <p>Hi {props.uname} </p>
            <p>{props.children}</p>
        </div>
     );
}

export default output;