import { Link, Outlet } from "react-router-dom";

const App = () => (
   <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          paddingTop: "0.5rem",
          backgroundcolor:"green"
        }}
      >
        <Link to="/">Dashboard</Link> | {" "}
        <Link to="/Kennzahlen">Kennzahlen</Link> | {" "}
        <Link to="/Visualisierungen">Visualisierungen</Link>
      </nav>
      <Outlet />
   </div>
);

export default App;
