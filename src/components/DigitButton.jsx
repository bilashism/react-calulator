import React from "react";
import { calculatorActions } from "../reducers/calculatorReducer";

/**
 * DigitButton is a React component that renders a button that, when clicked, dispatches an action to
 * add a digit to the calculator's display.
 * @returns A button with a digit and aria-label.
 */
const DigitButton = ({ dispatch, digit, ariaLabel }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center aspect-square p-2 bg-stone-200"
      aria-label={ariaLabel}
      onClick={() =>
        dispatch({ type: calculatorActions.addDigit, payload: { digit } })
      }>
      {digit}
    </button>
  );
};

export default DigitButton;
