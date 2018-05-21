import React from 'react';

function Button(props) {
    return(
        <button onClick={props.handleClick}>
            CLICK ME PLEASE !
        </button>
    );
}
export default Button;