import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        D&D Yonder
      </Link>
    </nav>
  );
}