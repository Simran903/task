import React from "react";
import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";
import StatsCard from "./components/StatsCard";
import Table from "./components/Table"; // Import Table component
import Charts from "./components/Charts";

// Register the chart components

const App = () => {
  const [tableData, setTableData] = useState([
    {
      name: "Mike Strand",
      email: "mike@domain.com",
      userType: "Admin",
      joined: "25 Apr, 2018",
      status: "Pending",
    },
    {
      name: "Andrew Strauss",
      email: "andrew@domain.com",
      userType: "Editor",
      joined: "25 Apr, 2018",
      status: "Approved",
    },
    {
      name: "John Doe",
      email: "johndoe@domain.com",
      userType: "Creator",
      joined: "25 Apr, 2018",
      status: "Rejected",
    },
  ]);

  const validateTable = () => {
    const valid = tableData.every((row) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)
    );
    if (!valid) {
      alert("Some email addresses are invalid!");
    } else {
      alert("Table data is valid!");
    }
  };

  return (
    <div className="dashboard-container">
      <SideBar />
      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <input
            type="text"
            placeholder="Search Project"
            className="search-bar"
          />
          <div className="user-info">
            <img
              src="https://i.pravatar.cc/100"
              alt="User"
              className="user-avatar"
            />
            <p>Angelina Doe</p>
          </div>
        </header>

        <StatsCard />
        <Charts />
        <Table tableData={tableData} validateTable={validateTable} />
      </main>
    </div>
  );
};

export default App;
