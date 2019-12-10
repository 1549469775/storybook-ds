import React from 'react';
function Checkbox(props) {
    return (
        <label className={`gg-c-checkbox ${props.className}`}>
            <input onChange={props.changeHandler} checked={props.checked} type="checkbox" id="checkbox1" className="gg-c-checkbox__checkbox" name="/" />
            <span className="gg-c-checkbox__pseudo-checkbox"></span>
            {props.label}
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="51" className="gg-c-checkbox__shine">
                <g fillRule="evenodd">
                    <rect width="8" height="2" x="48" y="24" rx="2" />
                    <rect width="8" height="2" x="11.73" y="2.46" rx="2" transform="rotate(60 15.73 4.46)" />
                    <rect width="8" height="2" x="35.73" y="2.46" rx="2" transform="rotate(120 39.73 4.46)" />
                    <rect width="8" height="2" x="12" y="45" rx="2" transform="scale(1 -1) rotate(60 97.4 0)" />
                    <rect width="8" height="2" x="36" y="45" rx="2" transform="scale(-1 1) rotate(-60 0 116.28)" />
                    <rect width="8" height="2" y="24" rx="2" />
                </g>
            </svg>
        </label>
    )
}

export default Checkbox;