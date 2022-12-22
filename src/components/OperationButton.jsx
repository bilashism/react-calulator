import React from "react";
import { calculatorActions } from "../reducers/calculatorReducer";

/**
 * OperationButton is a function that takes in a dispatch, operation, and ariaLabel as props and
 * returns a button that, when clicked, dispatches an action to the reducer.
 * @returns A function that takes in a dispatch function and returns a component.
 */

const OperationButton = ({ dispatch, operation, ariaLabel }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center aspect-square p-2 bg-stone-200"
      aria-label={ariaLabel}
      onClick={() =>
        dispatch({
          type: calculatorActions.chooseOperation,
          payload: { operation }
        })
      }>
      {operation}
    </button>
  );
};

export default OperationButton;
