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
          <img src="/assets/images/ethanbio.png" alt="Profile Pic" />
        </div>

        <div className="bio-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <BackButton />
        </div>
      </div>
    </div>
  );
}
