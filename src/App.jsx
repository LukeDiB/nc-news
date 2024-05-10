import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import SingleArticle from '../components/SingleArticle'
import ErrorPage from "../components/ErrorPage";


function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="*"
          element={<ErrorPage/>}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/articles"
          element={<Home />}
        />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle />}
        />
      </Routes>
    </>
  );
}

export default App;
