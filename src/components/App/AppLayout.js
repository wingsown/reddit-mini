import { useState } from "react";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

export default function AppLayout() {
  // State for managing search term and mobile navigation visibility
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Nav />

      <Content />

      <Footer />
    </div>
  );
}
