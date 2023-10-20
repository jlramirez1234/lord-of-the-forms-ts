import React, { useState, useRef } from 'react';


export default function FunctionalPhoneInput() {
    const [phoneInputState, setPhoneInputState] = useState(["", "", "", ""]);

    const refs = [useRef(), useRef(), useRef(), useRef()];
    const ref0 = refs[0];
    const ref1 = refs[1];
    const ref2 = refs[2];
    const ref3 = refs[3];



    const onChangeHandler = (index: number) => (e) => {
        const lengths = [2, 2, 2, 1];
        const currentMaxLength = lengths[index];
        const nextRef = refs[index + 1];
        const prevRef = refs[index - 1];
        const value = e.target.value;

        if (value.length > currentMaxLength) {
            e.target.value = value.slice(0, currentMaxLength);
        }

        const shouldGoToNextRef = currentMaxLength === value.length && nextRef?.current;
        const shouldGoToPrevRef = value.length === 0;
        const newState = phoneInputState.map((phoneInput, phoneInputIndex) =>
            index === phoneInputIndex ? e.target.value : phoneInput
        );
        if (shouldGoToNextRef) {
            nextRef?.current.focus();
        }
        if (shouldGoToPrevRef) {
            prevRef?.current.focus();
        }
        setPhoneInputState(newState);
    };

    

    return (
        <div className="input-wrap">
            <label htmlFor="phone">Phone:</label>
            <div id="phone-input-wrap">
                <input ref={ref0} type="text" id="phone-input-1" placeholder="55" value={phoneInputState[0]} onChange={onChangeHandler(0)} />
                -
                <input ref={ref1} type="text" id="phone-input-2" placeholder="55" value={phoneInputState[1]} onChange={onChangeHandler(1)} />
                -
                <input ref={ref2} type="text" id="phone-input-3" placeholder="55" value={phoneInputState[2]} onChange={onChangeHandler(2)} />
                -
                <input ref={ref3} type="text" id="phone-input-4" placeholder="5" value={phoneInputState[3]} onChange={onChangeHandler(3)} />
            </div>
        </div>
    )
}
