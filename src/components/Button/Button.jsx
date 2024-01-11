import React from "react";

const Button = ({onClick}) => {
    return (
        <div>
            <button onClick={onClick}>
                <p>Load more</p>
            </button>
        </div>
    )

}

export default Button