const calculatorActions = {
  addDigit: "add-digit",
  clear: "clear",
  delete: "delete",
  chooseOperation: "choose-operation",
  evaluate: "evaluate"
};

const calculatorReducer = (state, { type, payload }) => {
  switch (type) {
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
  }
};
export { calculatorReducer, calculatorActions };
