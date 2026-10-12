import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> {" | "}

      <Link to="/about">About</Link> {" | "}

       <Link to="/contact">contact</Link> {" | "}

        

      <Link to="/students">Students</Link>
    </nav>
  );
}

export default Navbar;
