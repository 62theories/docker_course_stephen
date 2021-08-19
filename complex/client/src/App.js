import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Fib from "./Fib";
import OtherPage from "./OtherPage";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="App">
        <header className="App-header">
          <Link to="/">Home test</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
