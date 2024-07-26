import React from "react";

function Button(props){
    return(
        <div>
            <button type={props.type}
            onClick={props.onClick}
            class={props.className} >{props.name}</button>
        </div>
    )
}
export default Button;