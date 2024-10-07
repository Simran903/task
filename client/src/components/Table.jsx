import React from "react";
import PropTypes from "prop-types";

const Table = ({ tableData, validateTable }) => {
  return (
    <section className="data-table">
      <h2>Standard Table Design</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Joined</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.userType}</td>
              <td>{row.joined}</td>
              <td className={row.status.toLowerCase()}>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={validateTable} className="validate-btn">
        Validate Table Data
      </button>
    </section>
  );
};

// Prop validation (optional but recommended)
Table.propTypes = {
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      userType: PropTypes.string.isRequired,
      joined: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  validateTable: PropTypes.func.isRequired,
};

export default Table;
