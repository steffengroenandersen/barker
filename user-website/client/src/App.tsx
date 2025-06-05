import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to Barker</h1>
      <div>
        <Link to="/signup">Go to signup</Link>
      </div>
      <div>
        <Link to="/login">Go to login</Link>
      </div>
    </>
  );
}

export default App;
