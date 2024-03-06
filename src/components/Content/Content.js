import { Outlet } from "react-router-dom";
import contentCSS from "./content.module.css";

function Content() {
  return (
    <main className={contentCSS.content}>
      <Outlet />
    </main>
  );
}

export default Content;
