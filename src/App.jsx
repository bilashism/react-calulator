import { useReducer } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import {
  calculatorActions,
  calculatorReducer
} from "./reducers/calculatorReducer";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    calculatorReducer,
    {}
  );

  return (
    <main className="">
      <div className="container mx-auto p-4 grid min-h-screen place-items-center">
        <div className="bg-slate-400 flex flex-col gap-4 text-2xl p-8">
          <output className="h-28 border flex flex-col items-end gap-2">
            <p className="">
              {previousOperand} {operation}
            </p>
            <p className="">{currentOperand}</p>
          </output>
          <div className="flex flex-wrap gap-4">
            <DigitButton dispatch={dispatch} ariaLabel="zero" digit="0" />
            <DigitButton dispatch={dispatch} ariaLabel="one" digit="1" />
            <DigitButton dispatch={dispatch} ariaLabel="two" digit="2" />
            <DigitButton dispatch={dispatch} ariaLabel="three" digit="3" />
            <DigitButton dispatch={dispatch} ariaLabel="four" digit="4" />
            <DigitButton dispatch={dispatch} ariaLabel="five" digit="5" />
            <DigitButton dispatch={dispatch} ariaLabel="six" digit="6" />
            <DigitButton dispatch={dispatch} ariaLabel="seven" digit="7" />
            <DigitButton dispatch={dispatch} ariaLabel="eight" digit="8" />
            <DigitButton dispatch={dispatch} ariaLabel="nine" digit="9" />
            <DigitButton dispatch={dispatch} ariaLabel="point" digit="." />
          </div>
          <div className="flex flex-wrap gap-4">
            <OperationButton
              dispatch={dispatch}
              ariaLabel="addition"
              operation="+"
            />
            <OperationButton
              dispatch={dispatch}
              ariaLabel="subtraction"
              operation="-"
            />
            <OperationButton
              dispatch={dispatch}
              ariaLabel="division"
              operation="/"
            />
            <OperationButton
              dispatch={dispatch}
              ariaLabel="multiply"
              operation="*"
            />
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="evaluate"
              onClick={() => dispatch({ type: calculatorActions.evaluate })}>
              =
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="clear"
              onClick={() => dispatch({ type: calculatorActions.clear })}>
              AC
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="delete"
              onClick={() => dispatch({ type: calculatorActions.delete })}>
              Del
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
}

export default App;
