import "./page.css";

import NavBar from "./components/NavBar";
import Display from "./components/Display";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Display />
      </main>
    </>
  );
}
