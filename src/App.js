import { Suspense } from "react";
import About from "./components/About";

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <About />
      </div>
    </Suspense>
  );
}

export default App;
