import "@/app/page.css";

import NavBar from "@/app/components/NavBar";
import Panel from "../components/Panel";

export default async function CountryPage( { params }) {
  const { cname: queryCountry } = await params;

  return (
    <>
      <NavBar />
      <main>
        <Panel queryCountry={decodeURI(queryCountry)} />
      </main>
    </>
  );
}