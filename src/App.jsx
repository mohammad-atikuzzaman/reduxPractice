import { Counter } from "./components/Counter";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <h2 className="text-2xl text-center uppercase font-bold">Practice Redux with react</h2>
      <Counter />
      <Posts />
    </>
  );
}

export default App;
