import React, { useState } from 'react';
import './App.css';
import Radio from './radio/Radio';
import PasswordInput from './password/PasswordInput'
import Otherradio from './radio/OtherRadio';
import Checkbox from './checkbox/Checkbox';
import Accordion from './Accordion/Accordion';
import RadioAccordion from './RadioAccordion/RadioAccordion';

function LoginLabel() {
  return (<>
    <div>
      <h2 className="gg-u-text-speak-uo">Already a member</h2>
      <p className="gg-u-text-speak">Log in to your account</p>
    </div>
  </>)
}

function LoginContent() {
  return (
    <div>
      <label for="textinput" class="gg-c-form__label">Mobile number of membername</label>
      <div class="gg-c-form__element">
        <input type="text" id="textinput" class="gg-c-form__input" aria-describedby="textinput-message" />
        <p id="textinput-message" class="gg-c-form__element-message gg-c-form__element-message--help-text">This is some helpful text</p>
      </div>

      <label for="textinput" class="gg-c-form__label">Password</label>
      <div class="gg-c-form__element">
        <input type="text" id="textinput" class="gg-c-form__input" aria-describedby="textinput-message" />
        <p id="textinput-message" class="gg-c-form__element-message gg-c-form__element-message--help-text">This is some helpful text</p>
      </div>

      <button class="gg-c-btn gg-c-btn--primary">
        <span class="gg-c-btn__switch">Log in</span>
      </button>
    </div>
  )
}

function NewTogiffgaffLabel() {
  return (
    <>
      <div>
        <h2 className="gg-u-text-speak-up">New to giffgaff</h2>
        <p className="gg-u-text-speak">Get started</p>
      </div>
    </>
  )
}


function App() {
  const [phone, setPhone] = useState('Pixel');
  const [color, setColor] = useState('Orange');
  const [subscribed, setSubscribed] = useState(true);
  const [acceptedTCs, setAcceptedTCs] = useState(false);
  const [password, setPassword] = useState('');
  const [AccordionOpen, setAccordionOpen] = useState(true);

  return (
    <div className="App">
      <section className="gg-o-page-section">
        <form>
          <Otherradio className="mt40" name="phone" legend="Pick a phone" changeHandler={(event) => setPhone(event.target.value)}
            options={[
              { value: 'iPhone', label: 'iPhone', id: "iphone", checked: phone === 'iPhone' },
              { value: 'Pixel', label: 'Pixel', id: "pixel", checked: phone === 'Pixel' },
              { value: 'Galaxy', label: 'Galaxy', id: "galaxy", checked: phone === 'Galaxy', }]}>
          </Otherradio>

          {/* <Otherradio className="mt40" name="color" legend="Pick a phone" changeHandler={(event) => setColor(event.target.value)}
            options={[
              { value: 'Orange', label: 'Orange', id: "Orange", checked: color === 'Orange' },
              { value: 'Green', label: 'Green', id: "Green", checked: color === 'Green' },
              { value: 'Pink', label: 'Pink', id: "Pink", checked: color === 'Pink', }]}>
          </Otherradio> */}

          {/* <Radio className="mt16" name='fruit' legend="Select a Colour"
          options={[
            { value: 'Pink', label: 'Pink', id: 'pink' },
            { value: 'orange', label: 'Orange', id: 'orange' },
            { value: 'blue', label: 'Blue', id: 'blue' }
          ]}
        >
        </Radio>

        <Radio className="mt40" name="phone" legend="Pick a phone"
          options={[
            { value: 'iphone', label: 'iPhone', id: "iphone" },
            { value: 'galaxy', label: 'Galaxy', id: "galaxy", checked: true }]}>
        </Radio> */}


          {/* <Checkbox className="gg-u-mt-small" label="Subscribe to newsletter?" checked={subscribed} changeHandler={(event) => setSubscribed(event.target.checked)}></Checkbox>
          <Checkbox className="gg-u-mt-fine" label="Accept all Terms and Conditions?" checked={acceptedTCs} changeHandler={(event) => setAcceptedTCs(event.target.checked)}></Checkbox> */}


          <PasswordInput className="gg-u-mt-large gg-u-mb-large" value={password} handleChange={(event) => setPassword(event.target.value)}></PasswordInput>


        </form>

        {/* <RadioAccordion handleToggle={(event) => { event.preventDefault(); setAccordionOpen(!AccordionOpen) }} className="gg-u-mt-medium" label={<LoginLabel />} content="stuff about login" open={AccordionOpen}></RadioAccordion>
        <RadioAccordion handleToggle={(event) => { event.preventDefault(); setAccordionOpen(!AccordionOpen) }} className="gg-u-mt-medium" label={<NewTogiffgaffLabel />} content="stuff about login" open={AccordionOpen}></RadioAccordion> */}

        <RadioAccordion className="gg-u-mt-large" sections={[
          {
            label: <LoginLabel />,
            content: <LoginContent />,
            key: 1,
            open: true
          },
          {
            label: <NewTogiffgaffLabel />,
            content: "Stuff about signing up!",
            key: 2
          }
        ]}></RadioAccordion>
      </section>
    </div>
  );
}

export default App;
