import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <ProSidebar
        style={{ height: "100vh", minHeight: "100vh", position: "fixed" }}
      >
        <Menu>
          <h5 style={{ textAlign: "center" }}>HK Dashboard</h5>
        </Menu>
        <Menu
          iconShape="square"
          style={{ justifyContent: "space-around", display: "flex" }}
        >
          <button className="btn btn-info m-1">
            Welcome Back
          </button>
        </Menu>
        <Menu
          iconShape="square"
        >
          <MenuItem>
            <Link to="/admin/addUser">Add User</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/admin/allUsers">All Users</Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
