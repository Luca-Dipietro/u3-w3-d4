import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ArticleDetails/:id" element={<ArticleDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
