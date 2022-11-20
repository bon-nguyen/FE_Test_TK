import React from "react";
import CustomTableBody from "./CustomTableBody";
import CustomTableHead from "./CustomTableHead";

const CustomTable = ({ columns = [], dataSource = [] }) => {
  console.log("columns", columns);
  const tableHead =
    columns.length > 0 &&
    columns.map((column, index) => (
      <CustomTableHead key={`columns-${index}`} column={column} />
    ));
  const tableBody2 = dataSource.map((data) => (
    columns.map((column, index) => (
        <CustomTableBody column={column} row={data} />
    ))
  ));

  return (
    <table className="table-wrap bg-white w-full text-3.25 font-semibold">
      <thead className="border-b-2 border-[#64748B]">{tableHead}</thead>
      <tbody>{tableBody2}</tbody>
    </table>
  );
};

export default CustomTable;
