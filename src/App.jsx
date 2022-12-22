import { useReducer } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { calculatorReducer } from "./reducers/calculatorReducer";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    calculatorReducer,
    {}
  );

  return (
    <main className="">
      <div className="container mx-auto p-4 grid min-h-screen place-items-center">
        <div className="bg-slate-400 flex flex-col gap-4 text-2xl p-8">
          <output className="h-28 border">
            <p className="">
              {previousOperand} {operation}
            </p>
            <p className="">{currentOperand}</p>
          </output>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="one">
              1
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="two">
              2
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="three">
              3
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="four">
              4
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="five">
              5
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="six">
              6
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="seven">
              7
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="eight">
              8
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="nine">
              9
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="zero">
              0
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="point">
              .
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="addition">
              +
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="subtraction">
              -
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="division">
              /
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="multiply">
              *
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="evaluate">
              =
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="clear">
              AC
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square p-2 bg-stone-200"
              aria-label="delete">
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
