import { useState, useRef } from "react";
import BackButton from "./shared/BackButton";
import "../styles/Demos.css";

const demoTracks = [
  { title: "8demo v2 w ethan stuff", file: "/assets/audio/8demo v2 w ethan stuff.wav" },
  { title: "Burden Demo 1", file: "/assets/audio/burden demo 1.wav" },
  { title: "Do You Ever", file: "/assets/audio/do you ever.wav" },
  { title: "Do You Remember", file: "/assets/audio/do you remember_.wav" },
  { title: "Exomeo Demo", file: "/assets/audio/exomeo demo.m4a" },
  { title: "Fairy", file: "/assets/audio/fairy.wav" },
  { title: "Getting Alone", file: "/assets/audio/getting alone v2.wav" },
  { title: "How Is It Stopping", file: "/assets/audio/how is it stopping.wav" },
  { title: "I Hate The Hellp", file: "/assets/audio/i hate the hellp.wav" },
  {
    title: "REANIMATE 170 GLP NICKCHEO EDIZ DC",
    file: "/assets/audio/REANIMATE 170 GLP NICKCHEO EDIZ DC.m4a",
  },
  { title: "Rough Idea 3", file: "/assets/audio/roughidea3_.wav" },
  { title: "Stay With Me", file: "/assets/audio/stay with me.wav" },
  { title: "Sweet Sounds", file: "/assets/audio/sweet sounds.wav" },
  { title: "Talk To Me v2", file: "/assets/audio/talk to me v2.wav" },
  { title: "TRY AGAIN v3", file: "/assets/audio/TRY AGAIN v3.wav" },
];

export default function Demos() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playTrack = (track) => {
    if (currentlyPlaying === track.title) {
      // Same track - toggle play/pause
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      // Different track - start playing new track
      setCurrentlyPlaying(track.title);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = track.file;
        audioRef.current.play();
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentlyPlaying(null);
  };

  return (
    <div className="demos-page">
      <div className="demos-header">
        <h1>Demos</h1>
        <p>Click play to listen</p>
      </div>

      <div className="demos-list">
        {demoTracks.map((track, index) => (
          <div key={index} className="demo-track">
            <div className="track-info">
              <span className="track-title">{track.title}</span>
              {currentlyPlaying === track.title && isPlaying && (
                <span className="now-playing">▶ Now Playing</span>
              )}
            </div>
            <button className="play-button" onClick={() => playTrack(track)}>
              {currentlyPlaying === track.title && isPlaying ? "⏸" : "▶"}
            </button>
          </div>
        ))}
      </div>

      <audio ref={audioRef} onEnded={handleAudioEnded} preload="none" />

      <BackButton />
    </div>
  );
}
