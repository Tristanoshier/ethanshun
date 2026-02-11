import { useState } from "react";
import BackButton from "./shared/BackButton";
import "../styles/Portfolio.css";

const clients = [
  {
    name: "Client One",
    description:
      "This is sample information about Client One. Built with cutting edge 1998 technology.",
    image: "/assets/images/randomAlbumCover.jpg",
  },
  {
    name: "Client Two",
    description:
      "Client Two needed a totally radical website with animated GIFs and MIDI background music.",
    image: "/assets/images/randomAlbumCover.jpg",
  },
  {
    name: "Client Three",
    description:
      "For Client Three we designed a sleek, corporate 90s aesthetic with heavy bevels.",
    image: "/assets/images/randomAlbumCover.jpg",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(clients[0]);

  return (
    <div className="portfolio-page">
      <header className="retro-header">
        <h1>My Portfolio</h1>
      </header>

      <div className="portfolio-container">
        <div className="client-list">
          <h2>Clients</h2>
          {clients.map((client) => (
            <div
              key={client.name}
              className={`client-item ${
                selected.name === client.name ? "active" : ""
              }`}
              onClick={() => setSelected(client)}
            >
              {client.name}
            </div>
          ))}
        </div>

        <div className="client-details">
          <h2>{selected.name}</h2>
          <img src={selected.image} alt={selected.name} />
          <p>{selected.description}</p>
        </div>
      </div>

      <BackButton />
    </div>
  );
}
