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
            <img
              src="/assets/images/oldinstalogo.png"
              alt="Instagram"
              className="icon"
            />
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
            <li>
              <a href="mailto:ethan@nickcheo.me">ethan@nickcheo.me</a>
            </li>
            <li>
              <a href="mailto:team@theunstable.co">team@theunstable.co</a>
            </li>
          </ul>
        </div>

        <BackButton />
      </div>
    </div>
  );
}
