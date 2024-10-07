import React from "react";

const SideBar = () => {
  return (
    <div>
      <aside className="sidebar">
        <div className="sidebar-profile">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="profile-img"
          />
          <h3>Angelina Doe</h3>
          <p>Product Manager</p>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li className="active">Dashboard</li>
            <li>UI Elements</li>
            <li>Components</li>
            <li>Forms Stuff</li>
            <li>Data Table</li>
            <li>Icons</li>
            <li>Sample Page</li>
            <li>Extra</li>
          </ul>
        </nav>
        <button className="add-project-btn">Add Project</button>
      </aside>
    </div>
  );
};

export default SideBar;
