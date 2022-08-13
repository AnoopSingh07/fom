// import logo from './logo.svg';
import './App.css';
import Header, { Poster } from "./components/Header";
import Products from "./components/Products";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<>
            <Poster />
            <h1>Our Products</h1>
            <Products />
          </>} />
          <Route exact path="/about" element={<>
            <h1>About Us</h1>
          </>} />
          <Route exact path="/more" element={<>
            <h1>More</h1>
          </>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
