import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AppLayout from "./AppLayout";
import Category from "../../features/Category/Category";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
