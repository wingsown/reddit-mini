import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AppLayout from "./AppLayout";
import Category from "../../features/Category/Category";
import { Provider } from "react-redux";
import { store } from "./store";
import Search from "../../features/Search/Search";
import Article from "../../features/Article/Article";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Category />} />
            <Route path=":categoryName" element={<Category />} />
            <Route path="/search" element={<Search />} />
            <Route path="/articles/:id" element={<Article />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
