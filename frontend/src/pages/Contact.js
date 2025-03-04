import React from "react";
import "./Contact.css";

const team = [
  {
    id: 1,
    name: "Maja",
    role: "Dierenarts",
    description: "Maja is onze toegewijde dierenarts met jarenlange ervaring in de zorg voor katten. Zij zorgt ervoor dat alle katten gezond en gelukkig zijn voordat ze naar hun nieuwe huis gaan.",
    image: require("../assets/C1.png"),
  },
  {
    id: 2,
    name: "Roy",
    role: "Asielbeheerder",
    description: "Roy houdt het asiel draaiende en zorgt ervoor dat alle katten de juiste verzorging en aandacht krijgen. Hij coördineert adopties en helpt bij het vinden van het perfecte thuis voor elke kat.",
    image: require("../assets/C2.png"),
  },
  {
    id: 3,
    name: "Alexander",
    role: "Vrijwilliger",
    description: "Alexander is een enthousiaste vrijwilliger die dagelijks helpt met het verzorgen van de katten. Van het schoonmaken van verblijven tot het spelen met de katten, hij doet het allemaal met veel liefde.",
    image: require("../assets/C3.png"),
  },
];

function Contact() {
  return (
    <div className="contact-container">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {team.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
