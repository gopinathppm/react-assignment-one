import React from 'react';
import './input.css';

const UserInput = props => {
    return(
        <div className="input">
            <input type ="text" onChange={props.change} value={props.uname}/>
        </div>
    )
};

export default UserInput;
