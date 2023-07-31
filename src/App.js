import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter,Link} from "react-router-dom";
import { NotFound } from "./NotFound";
import { Apple } from "./Apple";
import { Home } from "./Home";

function App() {
  return (
    <BrowserRouter> {/*to tell browser to not render Routes as a component and use it only to map route*/}
    {/* <div className="page">
      <Link to="/">🏡</Link>
    </div> */}
    <div className="page"> {/*to create navigation bar*/}
      <Link to="/" className="link">Home</Link> {/* to render the given component without reloading the web app */}
      <Link to="/apple" className="link">Apple</Link>
      <Link to="/test" className="link">Test</Link>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/*if no route matches*/}
        <Route path="/apple" element={<Apple />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
