import React from 'react';

function Radiogroup(props) {

    return (
        <fieldset className={props.className}>
            <legend className="gg-c-radio__legend">{props.legend}</legend>
            {props.children}
        </fieldset>
    )
}

export default Radiogroup;