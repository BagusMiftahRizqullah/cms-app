import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // or another theme

const AgGridTable: React.FC = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "make", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
  ]);

  return (
    <div className="ag-theme-alpine h-full w-full">
      <AgGridReact 
        rowData={rowData} 
        columnDefs={columnDefs} 
        />
    </div>
  );
};

export default AgGridTable;
