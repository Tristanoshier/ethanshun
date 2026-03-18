import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "./shared/BackButton";
import "../styles/Music.css";

const albums = [
  {
    title: "like this (forever)",
    cover: "/assets/images/like this (forever).png",
    link: "https://distrokid.com/hyperfollow/edizzy2/like-this-forever?ref=release",
  },
  {
    title: "Demos",
    cover: "/assets/images/demos.png",
    link: "https://untitled.stream/library/project/xyzig7ONTWAatnynQpOBP",
  },
  {
    title: "Hiding",
    cover: "/assets/images/hidingcoverart.jpeg",
    link: "https://distrokid.com/hyperfollow/edizzy2/hiding?ref=release",
  },
  {
    title: "No Direction EP",
    cover: "assets/images/no direction ep cover.png",
    link: "https://distrokid.com/hyperfollow/edizzy2/no-direction?ref=release",
  },
  {
    title: "Once",
    cover: "/assets/images/once cover.png",
    link: "https://distrokid.com/hyperfollow/edizzy2/once?ref=release",
  },
];

export default function Music() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const navigate = useNavigate();

  const next = () => {
    setCurrent((prev) => (prev + 1) % albums.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + albums.length) % albums.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleAlbumClick = (album) => {
    if (album.link.startsWith("/")) {
      // Internal route
      navigate(album.link);
    } else {
      // External link
      window.open(album.link, "_blank");
    }
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prev();
    if (diff < -50) next();
  };

  return (
    <div
      className="coverflow-page"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="back-button-wrapper">
        <BackButton />
      </div>

      <div className="coverflow">
        {albums.map((album, index) => {
          const rawOffset = index - current;
          const half = albums.length / 2;
          const offset =
            rawOffset > half
              ? rawOffset - albums.length
              : rawOffset < -half
                ? rawOffset + albums.length
                : rawOffset;

          return (
            <div
              key={index}
              className="cover"
              style={{
                transform: `
                    translate(-50%, -50%)
                    translateX(${offset * 30}vw)
                    rotateY(${offset * -45}deg)
                    scale(${index === current ? 1 : 0.75})
                  `,
                zIndex: albums.length - Math.abs(offset),
                opacity: Math.abs(offset) > 4 ? 0 : 1,
              }}
              onClick={() => handleAlbumClick(albums[index])}
            >
              <img src={album.cover} alt={album.title} />
              {index === current && (
                <div className="album-title">{album.title}</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="controls">
        <button onClick={prev}>◀</button>
        <button onClick={next}>▶</button>
      </div>
    </div>
  );
}
