import { useState, useRef } from "react";
import BackButton from "./shared/BackButton";
import "../styles/Music.css";

const albums = [
  { title: "Album One", cover: "/assets/images/randomAlbumCover.jpg" },
  { title: "Album Two", cover: "/assets/images/randomAlbumCover.jpg" },
  { title: "Album Three", cover: "/assets/images/randomAlbumCover.jpg" },
  { title: "Album Four", cover: "/assets/images/randomAlbumCover.jpg" },
  { title: "Album Five", cover: "/assets/images/randomAlbumCover.jpg" },
];

export default function Music() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % albums.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + albums.length) % albums.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
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
          const offset = index - current;

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
