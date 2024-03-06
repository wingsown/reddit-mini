import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AppLayout from "./AppLayout";
import Category from "../../features/Category/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
