import React, { useState } from 'react';
import classNames from "classnames";


function SingleRadioAccordion(props) {

    let radioClass = classNames(
        {
            "gg-c-accordion": true,
            "fake-radio--checked": props.open
        }
    )


    let radioButtonClass = classNames(
        {
            'fake-radio-input--checked': props.open,
            "fake-radio-input": true
        }
    )
    return (
        <details onClick={props.handleToggle} className={radioClass} open={props.open}>
            <summary style={{ padding: 2 }}>
                <div style={{ backgroundColor: "white" }} className="gg-c-accordion__summary gg-u-text-speak-up">
                    <div className={radioButtonClass} />
                    {props.label}
                </div>
            </summary>
            <div className="gg-u-p-small">
                {props.content}
            </div>
        </details>
    )
}

function RadioAccordion(props) {
    const [currentlyOpenElement, setCurrentlyOpenElement] = useState(props.sections.filter(section => section.open === true)[0]);

    return (
        props.sections.map((section, index) => <SingleRadioAccordion handleToggle={(event) => { event.preventDefault(); setCurrentlyOpenElement(section) }} key={section.key} index={index} open={currentlyOpenElement.key === section.key} label={section.label} content={section.content} />)
    )
}

export default RadioAccordion;