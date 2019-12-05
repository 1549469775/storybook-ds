import React from 'react';
import './DayMonthYear.scss';

function DayMonthYear() {
    return (
        <>
            <label style={{ marginTop: '24px' }} htmlFor="firstinput" style={{ marginTop: '24px' }} className="gg-c-form__label">Date of birth</label>
            <div className="gg-c-input--daymonthyear">
                <input placeholder="DD" id="firstinput" type="text" inputMode="numeric" className="gg-c-form__input gg-c-input--numeric"></input>
                <span>/</span>
                <input placeholder="MM" type="text" inputMode="numeric" className="gg-c-form__input gg-c-input--numeric"></input>
                <span>/</span>
                <input placeholder="YYYY" type="text" inputMode="numeric" className="gg-c-form__input gg-c-input--numeric gg-c-input--daymonthyear__year"></input>
            </div>

            <label style={{ marginTop: '24px' }} htmlFor="firstinput" style={{ marginTop: '24px' }} className="gg-c-form__label">Date of birth</label>
            <div className="gg-c-input--daymonthyear">
                <input placeholder="DD" id="firstinput" type="text" inputMode="numeric" className="gg-c-form__input gg-c-input--numeric"></input>
                <span>/</span>
                <input placeholder="MM" type="text" inputMode="numeric" className="gg-c-form__input gg-c-input--numeric"></input>
                <span>/</span>
                <input placeholder="YYYY" type="text" inputMode="numeric" className="gg-c-form__input gg-c-input--numeric gg-c-input--daymonthyear__year"></input>
            </div>

            <label htmlFor="firstinput" style={{ marginTop: '24px' }} className="gg-c-form__label">Date of birth</label>
            <p>This is some helpful text. It is optional!</p>
            <input id="firstinput" style={{ width: "140px" }} className="gg-c-form__input gg-c-input--numeric" placeholder="DD/MM/YYYY" type="text"></input>

            <label htmlFor="secondinput" style={{ marginTop: "24px" }} className="gg-c-form__label">Date of birth</label>
            <p style={{ color: "#666666", fontSize: "14px" }}>DD/MM/YYYY</p>
            <input id="secondinput" style={{ width: "140px" }} className="gg-c-form__input" type="text"></input>

        </>
    )
}

export default DayMonthYear;