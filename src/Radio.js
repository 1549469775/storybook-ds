import React from "react";
import './radio.scss';

function Radio(props) {
    return (
        <label className="gg-c-radio__label" htmlFor={props.id}>
            <input defaultChecked={props.checked} className="pink gg-c-radio__input" type="radio" id={props.id} name={props.name} value={props.value} /><span
                className="gg-c-radio__text">{props.label}</span>
        </label>
    )
}

export default Radio;