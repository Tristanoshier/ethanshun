import BackButton from "./shared/BackButton";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <header className="retro-header">
        <h1>About Me</h1>
      </header>

      <div className="about-content">
        <div className="bio-photo">
          <img src="/assets/images/beaker.jpg" alt="Profile" />
        </div>

        <div className="bio-text">
          <p>
            Hello! I'm Ethan, a developer who loves retro design, pixel
            art, and recreating the nostalgia of the 90s web. When I'm not
            coding, you can find me listening to 90s music, collecting vintage
            tech, and making animated GIFs.
          </p>

          <p>
            This site is a throwback to the golden era of GeoCities, MSN pages,
            and neon backgrounds. I hope you enjoy the retro vibes!
          </p>

          <BackButton />
        </div>
      </div>
    </div>
  );
}
