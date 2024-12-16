"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [ bodyElement, setBodyElement ] = useState(null);

  useEffect(() => {
    setBodyElement(document.querySelector("body"));
  }, [bodyElement]);

  function switchTheme() {
    bodyElement.classList.contains("light") ? bodyElement.classList.remove("light") : bodyElement.classList.add("light");
  }

  return (
    <nav>
      <div className="navbar">
        <h1 className="navbar__heading">Where in the world?</h1>
        <button className="navbar__theme-switcher" onClick={switchTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="theme-switcher__icon" viewBox="0 0 16 16">
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
          </svg>
          <p className="theme-switcher__text">Dark Mode</p>
        </button>
      </div>
    </nav>
  );
}