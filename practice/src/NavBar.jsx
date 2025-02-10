import { Link, NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <div style={{display:'flex', gap:'10px'}}>
        <Link to="/clock">Clock</Link>
        <Link to="/clock/users">Clock and users</Link>
        <NavLink
          to="/clock/form"
          style={(e) => {
            return { color: e.isActive ? "red" : "green" };
          }}
        >
          Clock and Form
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
