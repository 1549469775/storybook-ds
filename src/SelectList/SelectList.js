import React from 'react';

function SelectList(props) {
    return (
        <fieldset className={`gg-c-select-list ${props.className}`}>
            <legend className="gg-c-select-list__legend">{props.legend}</legend>
            <ol className="gg-c-select-list__options">

                {props.options.map(option =>
                    <li key={option.option} className="gg-c-select-list__option">
                        <input name="option" type="radio" id="option-2" className="gg-c-select-list__radio" value={props.value} />
                        <label className="gg-c-select-list__button" htmlFor="option-2">
                            <span className="gg-c-select-list__button-text">
                                {option.option}
                            </span>
                        </label>
                    </li>
                )}

            </ol>
        </fieldset>)
}

export default SelectList;