import "./page.css";

import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import Display from "./components/Display";

export default function Home() {
  return (
    <>
      <NavBar />
      <ToolBar />
      <main>
        <Display />
      </main>
    </>
  );
}
