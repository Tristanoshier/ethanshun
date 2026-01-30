import { Link } from "react-router-dom";
import "../styles/Home.css";

const apps = [
  {
    name: "About",
    path: "/about",
    image: "/icons/about.jpg",
    x: "10%",
    y: "20%",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    image: "/icons/portfolio.jpg",
    x: "35%",
    y: "40%",
  },
  {
    name: "Music",
    path: "/music",
    image: "/assets/images/boombox gif.gif",
    x: "60%",
    y: "25%",
  },
  {
    name: "Bakery",
    path: "/bakery",
    image: "/icons/bakery.jpg",
    x: "20%",
    y: "65%",
  },
  {
    name: "Contact",
    path: "/contact",
    image: "/icons/contact.jpg",
    x: "70%",
    y: "60%",
  },
];

export default function Home() {
  return (
    <div className="home-page desktop">
      {apps.map((app) => (
        <Link
          key={app.name}
          to={app.path}
          className="desktop-icon"
          style={{ top: app.y, left: app.x }}
        >
          <img src={app.image} alt={app.name} />
          <span>{app.name}</span>
        </Link>
      ))}
    </div>
  );
}
