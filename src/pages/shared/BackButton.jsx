import { Link } from "react-router-dom";
import "../../styles/BackButton.css";

export default function BackButton() {
  return (
    <Link to="/" className="back-button">
      ← Back to Home
    </Link>
  );
}
