import React from "react";

function Button(props) {
    let { children, status } = props;
    console.log(`props:`, props);
    return (
        <button onClick={ () => console.log(children)}
        disabled={status}>
            {children}
        </button>
    );
}

export default Button;
