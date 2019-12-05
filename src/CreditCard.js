import React from 'react';
import './CreditCard.scss';

function CreditCard() {
    return (
        <>
            <label className="gg-c-form__label" htmlFor="creditcard">Creditcard</label>
            <div class="gg-c-form__element">
                <input id="creditcard" type="text" inputMode="numeric" className="gg-c-form__input gg-c-input--numeric"></input>
                <p class="gg-c-form__element-message gg-c-form__element-message--help-text">This is some helpful text</p>
            </div>


            {/* <label for="emailinput" class="gg-c-form__label">Email Input</label>
  <div class="gg-c-form__element">
    <input type="email" id="emailinput" class="gg-c-form__input" placeholder="Your email here" aria-describedby="email-message">
    <p id="email-message" class="gg-c-form__element-message gg-c-form__element-message--help-text">This is some helpful text</p>
  </div> */}
        </>
    )
}

export default CreditCard;