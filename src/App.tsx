import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <>
      <div className="flex items-center gap-4 m-10">
        <button
          className="border border-green-600 rounded-md
         py-2 px-3"
        >
          Increment
        </button>
        <div>{count}</div>
        <button
          className="border border-red-600 rounded-md
         py-2 px-3"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
