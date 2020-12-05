import React from "react";
import Info from "./Info";

function Table({ users }) {
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
        <Info users={users} />
      </table>
    </div>
  );
}

export default Table;