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
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            <img
              src="/assets/images/instagram.png"
              alt="Instagram"
              className="icon"
            />
            @yourusername
          </a>
        </div>

        <div className="contact-item">
          <h2>Email</h2>
          <ul>
            <li>
              <a href="mailto:email1@example.com">email1@example.com</a>
            </li>
            <li>
              <a href="mailto:email2@example.com">email2@example.com</a>
            </li>
            <li>
              <a href="mailto:email3@example.com">email3@example.com</a>
            </li>
          </ul>
        </div>

        <BackButton />
      </div>
    </div>
  );
}
