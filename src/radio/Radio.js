import React from 'react';
import './radio.scss';

function IndividualRadio(props) {
    return (
        <label className="gg-c-radio__label" htmlFor={props.id}>
            <input defaultChecked={props.checked} className="pink gg-c-radio__input" type="radio" id={props.id} name={props.name} value={props.value} /><span
                className="gg-c-radio__text">{props.label}</span>
        </label>
    )
}

function Radio(props) {
    return (
        <fieldset className={props.className}>
            <legend className="gg-c-radio__legend">{props.legend}</legend>
            {props.options.map(option => (<IndividualRadio id={option.id} checked={option.checked} label={option.label} name={props.name} value={option.value}></IndividualRadio>))}
        </fieldset>
    )
}

export default Radio;