import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welkom bij het kattenasiel Science Park!</h1>
      <div dangerouslySetInnerHTML={{ __html: '<!-- <footer>Vergeten prive telefoonnummer in de footer écht te wissen! FLAG0612345678</footer> -->' }} />
    </div>
  );
}

export default Home;
