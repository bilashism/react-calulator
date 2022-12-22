import { integerFormatter } from "../utilities/utilities";

const calculatorActions = {
  addDigit: "add-digit",
  clear: "clear",
  delete: "delete",
  chooseOperation: "choose-operation",
  evaluate: "evaluate"
};

/**
 * The function takes in a state and an action, and returns a new state based on the action.
 * @returns The state of the calculator.
 */
const calculatorReducer = (state, { type, payload }) => {
  switch (type) {
    // adding a digit
    case calculatorActions?.addDigit:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        };
      }
      if (state.currentOperand === "0" && payload.digit === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state?.currentOperand || ""}${payload?.digit}`
      };
    // clearing the calculator
    case calculatorActions?.clear:
      return {};
    // delete a digit
    case calculatorActions?.delete:
      if (state?.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null
        };
      }
      if (!state?.currentOperand) return state;
      if (state?.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }
      return {
        ...state,
        currentOperand: `${state?.currentOperand?.slice(0, -1)}`
      };

    // operational calculations
    case calculatorActions?.chooseOperation:
      if (state?.currentOperand == null && state?.previousOperand == null) {
        return state;
      }
      if (state?.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation
        };
      }
      if (state?.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null
        };
      }
      return {
        ...state,
        operation: payload.operation,
        previousOperand: evaluate(state),
        currentOperand: null
      };
    // evaluating the result
    case calculatorActions?.evaluate:
      if (
        state?.previousOperand == null ||
        state?.currentOperand == null ||
        state?.operation == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      };
  }
};
/**
 * It takes an object with three properties, and returns a string.
 * @returns The computed value is being returned.
 */
const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const prev = Number(previousOperand);
  const current = Number(currentOperand);
  let computed = "";
  if (isNaN(prev) || isNaN(current)) return computed;
  switch (operation) {
    case "+":
      computed = prev + current;
      break;
    case "-":
      computed = prev - current;
      break;
    case "/":
      computed = prev / current;
      break;
    case "*":
      computed = prev * current;
      break;
  }
  return computed.toString();
};

/**
 * It takes a string, splits it into an array of two strings, and then formats the first string and
 * returns the first string concatenated with the second string.
 * @returns the formatted integer and decimal.
 */
const formatOperand = operand => {
  if (!operand) return;
  const [integer, decimal] = operand.split(".");
  if (!decimal) return integerFormatter.format(integer);
  return `${integerFormatter.format(integer)}.${decimal}`;
};

export { calculatorReducer, calculatorActions, formatOperand };
