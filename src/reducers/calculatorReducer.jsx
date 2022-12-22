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
      return {
        ...state,
        currentOperand: `${currentOperand || ""}${payload?.digit}`
      };
  }
};

export { calculatorReducer, calculatorActions };
