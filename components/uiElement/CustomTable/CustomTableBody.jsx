import React from "react";

const CustomTableBody = ({ column, row }) => {
  return (
    <tr>
      {column.map((col, index) => {
        return (
          <td
            key={col.id}
            className="p-2.5 first:pl-4 border-b border-[#EDF2F7] font-normal text-left last:text-right text-[0.8125rem]"
          >
            {typeof col?.render === "function" ? (
              col.render(1, row)
            ) : (
              <div>123</div>
            )}
          </td>
        );
      })}
    </tr>
  );
};

export default CustomTableBody;
