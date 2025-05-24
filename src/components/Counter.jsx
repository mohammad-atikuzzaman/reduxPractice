import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
       <h3 className="text-center text-4xl font-semibold">{count}</h3>
      <div className="flex items-center w-3/4 justify-center gap-4 mx-auto ">
        <button
          aria-label="Increment value"
          className="bg-gray-400 px-2 py-1 rounded-sm font-semibold text-white uppercase"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          className="bg-gray-400 px-2 py-1 rounded-sm font-semibold text-white uppercase"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by value"
          className="bg-gray-400 px-2 py-1 rounded-sm font-semibold text-white uppercase"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </>
  );
}
