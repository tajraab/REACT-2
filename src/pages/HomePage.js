import react from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <h1>this is HOME PAGE</h1>
      <Link to={"/about"}>IDI NA ABOUT PAGE</Link>
    </div>
  );
}
export default HomePage;
