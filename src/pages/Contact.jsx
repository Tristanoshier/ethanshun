import BackButton from "./shared/BackButton";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="retro-header">
        <h1>Contact Me</h1>
      </header>

      <div className="contact-box">
        <div className="contact-item">
          <h2>Instagram</h2>
          <a
            href="https://www.instagram.com/ethanshun"
            target="_blank"
            rel="noreferrer"
          >
            @ethanshun
          </a>
        </div>

        <div className="contact-item">
          <h2>Email</h2>
          <ul>
            <li>
              <a href="mailto:ethanshunwork@gmail.com">
                ethanshunwork@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <BackButton />
      </div>
    </div>
  );
}
