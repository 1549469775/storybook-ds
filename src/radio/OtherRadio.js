import React from 'react';
import './radio.scss';

function Radio(props) {
    return (
        <label className="gg-c-radio__label" htmlFor={props.id}>
            <input className="pink gg-c-radio__input" type="radio" id={props.id} value={props.value} checked={props.checked} onChange={props.changeHandler} name={props.name} /><span
                className="gg-c-radio__text">{props.label}</span>
        </label>
    )
}

function Otherradio(props) {
    return (
        <fieldset className={props.className}>
            <legend className="gg-c-radio__legend">{props.legend}</legend>
            {props.options.map(option => (<Radio key={option.value} id={option.id} label={option.label} value={option.value} changeHandler={props.changeHandler} checked={option.checked} name={props.name}></Radio>))}
        </fieldset>
    )
}

export default Otherradio;