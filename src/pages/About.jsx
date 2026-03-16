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
            Hello and welcome to my page. I make music and help people with
            their projects. I am from cleveland, ohio which is the greatest
            place ever. Currently 23 years old. My favorite things ever are
            cats, cookies, and the appalachian mountains.
          </p>

          <BackButton />
        </div>
      </div>
    </div>
  );
}
