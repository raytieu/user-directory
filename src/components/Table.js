import React from "react";

function Table(props) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Profile Pic</th>
            <th>Employee Name</th>
            <th>E-mail Address</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Table;