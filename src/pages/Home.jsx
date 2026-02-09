import { Link } from "react-router-dom";
import "../styles/Home.css";

const topImages = [
  "/assets/images/ethanlogo1.gif",
  "/assets/images/ethanlogo2.gif",
  "/assets/images/ethanlogo3.gif",
  "/assets/images/ethanlogo4.gif",
];

const apps = [
  {
    name: "About",
    path: "/about",
    image: "/assets/images/beaker.jpg",
    x: "10%",
    y: "20%",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    image: "/assets/images/castle.png",
    x: "40%",
    y: "30%",
  },
  {
    name: "Music",
    path: "/music",
    image: "/assets/images/boombox gif.gif",
    x: "20%",
    y: "70%",
  },
  {
    name: "Contact",
    path: "/contact",
    image: "/assets/images/bird.png",
    x: "80%",
    y: "65%",
  },
];

export default function Home() {
  return (
    <div className="home-page desktop">
      <div className="scrolling-top-row">
        <div className="scrolling-track">
          {topImages.concat(topImages).map((src, i) => (
            <img key={i} src={src} alt="" className="scrolling-image" />
          ))}
        </div>
      </div>

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
