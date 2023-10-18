import react from "react";
import { Link, useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>this is HOME PAGE</h1>
      <button onClick={() => navigate("/about")}>ABOUT</button>
    </div>
  );
}
export default HomePage;
