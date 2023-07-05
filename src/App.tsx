import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-center gap-4 m-10">
        <button
          className="border border-green-600 rounded-md
         py-2 px-3"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border border-red-600 rounded-md
         py-2 px-3"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment By Value
        </button>
        <div>{count}</div>
        <button
          className="border border-red-600 rounded-md
         py-2 px-3"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
