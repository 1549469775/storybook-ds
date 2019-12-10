import React from 'react';
import { white } from 'color-name';
import classNames from "classnames";


function Accordion(props) {
    let radioButtonClass = classNames(
        {
            'fake-radio-checked': props.open,
            "pink": true,
            "fake-radio-input": true
        }
    )
    return (
        <details onClick={props.handleToggle} className={`gg-c-accordion ${props.className}`} open={props.open}>
            <summary>
                <div style={{ backgroundColor: "white" }} className="gg-c-accordion__summary gg-u-text-speak-up">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="gg-c-accordion__marker gg-u-icon gg-u-icon--small"><path d="M15.5 6.1c-.7-.1-.7 0-2.2-.1-.7 0-1.1 0-1.8.1H9.6l-3.5-.2H4.5c-2.1.1-3.7.2-4.3.2l.1 3.1c1.7.1 2.2.3 4 .4l1.6.1 3.6.2h4.1c.8 0 .5 0 1.3.1.3 0 .4-.1.4-.1.5-.7.5-2.4.2-3.8z" /><path className="gg-c-accordion__marker-open" d="M6.1.5c-.1.7 0 .7-.1 2.2 0 .7 0 1.1.1 1.8v1.9l-.2 3.5v1.6c.1 2.1.2 3.7.2 4.3l3.1-.1c.1-1.7.3-2.2.4-4l.1-1.6.2-3.6V2.4c0-.8 0-.5.1-1.3 0-.3-.1-.4-.1-.4C9.2.2 7.5.2 6.1.5z" /></svg> */}
                    <div className={radioButtonClass} />
                    {props.label}
                </div>
            </summary>
            <div className="gg-c-accordion__content">
                {props.content}
            </div>
        </details>

    )
}

export default Accordion;