import { Link } from "react-router-dom";
import "../../styles/BackButton.css";

export default function BackButton() {
  return (
    <Link to="/" className="retro-back-button">
      ← Back to Home
    </Link>
  );
}