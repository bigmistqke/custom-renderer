import { createSignal } from "solid-js";
import { render } from "./renderer";

const App = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Click {count()}</button>
    </div>
  );
};

render(App, document.getElementById("app"));
