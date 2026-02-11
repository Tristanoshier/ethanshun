import { useState, useEffect } from "react";
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
    desktopX: "10%",
    desktopY: "20%",
    mobileX: "10%",
    mobileY: "65%",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    image: "/assets/images/castle.png",
    desktopX: "40%",
    desktopY: "30%",
    mobileX: "60%",
    mobileY: "0%",
  },
  {
    name: "Music",
    path: "/music",
    image: "/assets/images/boombox gif.gif",
    desktopX: "20%",
    desktopY: "70%",
    mobileX: "20%",
    mobileY: "75%",
  },
  {
    name: "Contact",
    path: "/contact",
    image: "/assets/images/bird.png",
    desktopX: "80%",
    desktopY: "65%",
    mobileX: "0%",
    mobileY: "45%",
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
