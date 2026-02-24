import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const topImages = [
  "/assets/images/ethanlogo1.png",
  "/assets/images/ethanlogo2.png",
  "/assets/images/ethanlogo3.png",
  "/assets/images/ethanlogo4.png",
];

const apps = [
  {
    name: "About",
    path: "/about",
    image: "/assets/images/beaker.png",
    desktopX: "10%",
    desktopY: "20%",
    mobileX: "18%",
    mobileY: "72%",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    image: "/assets/images/castle.png",
    desktopX: "40%",
    desktopY: "30%",
    mobileX: "64%",
    mobileY: "22%",
  },
  {
    name: "Music",
    path: "/music",
    image: "/assets/images/boombox gif.gif",
    desktopX: "20%",
    desktopY: "70%",
    mobileX: "36%",
    mobileY: "84%",
  },
  {
    name: "Contact",
    path: "/contact",
    image: "/assets/images/bird.png",
    desktopX: "80%",
    desktopY: "65%",
    mobileX: "82%",
    mobileY: "48%",
  },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          style={{
            top: isMobile ? app.mobileY : app.desktopY,
            left: isMobile ? app.mobileX : app.desktopX,
          }}
        >
          <img src={app.image} alt={app.name} />
          <span>{app.name}</span>
        </Link>
      ))}
    </div>
  );
}
