import { Link, Outlet } from "react-router-dom";

const App = () => (
   <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Dashboard</Link> | {" "}
        <Link to="/metrics">Metrics</Link> | {" "}
        <Link to="/visualizations">Visualizations</Link>
      </nav>
      <Outlet />
   </div>
);

export default App;
