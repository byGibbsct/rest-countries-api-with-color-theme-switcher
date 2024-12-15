import "./page.css";

import { AppContextProvider } from "./contexts/appContext";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import Display from "./components/Display";

export default function Home() {
  return (
    <>
      <NavBar />
      <AppContextProvider>
        <ToolBar />
        <main>
          <Display />
        </main>
      </AppContextProvider>
    </>
  );
}
