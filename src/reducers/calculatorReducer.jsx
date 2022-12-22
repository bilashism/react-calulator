const calculatorActions = {
  addDigit: "add-digit",
  clear: "clear",
  delete: "delete",
  chooseOperation: "choose-operation",
  evaluate: "evaluate"
};

const calculatorReducer = (state, { type, payload }) => {
  switch (type) {
    // adding a digit
    case calculatorActions?.addDigit:
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
      if (!state?.currentOperand) return state;
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
  }
};
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
export { calculatorReducer, calculatorActions };
