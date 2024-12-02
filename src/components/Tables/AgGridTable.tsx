import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // or another theme
import { AiOutlineMore } from 'react-icons/ai';

const AgGridTable = (props: {
  rowData: Array<any> | undefined;
}) => {

  const columnDefs = [
    { field: 'name', headerName: 'name' },
    { field: 'phone', headerName: 'phone' },
    { field: 'email', headerName: 'email' },
    { field: 'role', headerName: 'role' },
    { field: 'address', headerName: 'address' },
    { 
      field: 'status', 
      headerName: 'status',
      cellRendererFramework: () => (
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Active
          </span>
        </div>
      )
    },
    {
      field: 'action',
      headerName: 'action',
      cellRendererFramework: () => (
        <div className="flex items-center justify-center">
          <AiOutlineMore className="fill-current text-gray-500 w-6 h-6 cursor-pointer hover:text-blue-500" style={{ fontSize: '24px' }} />
        </div>
      ),
    },
  ];


  const onGridReady = (params) => {
    const gridApi = params.api;
    gridApi.sizeColumnsToFit(); // Automatically adjusts columns to fit the grid width
  };

  return (
    <div
        className="ag-theme-alpine"
        style={{ height: "83vh", width: "100%", }}
      >
      <AgGridReact 
        pagination={true}
        paginationPageSize={10}
        onPaginationChanged={(params) => {
          console.log("Current page size:", params.api.paginationGetPageSize());
        }}
        rowSelection="multiple"
        animateRows={true}
        suppressRowClickSelection={true}

        rowData={props.rowData} 
        columnDefs={columnDefs} 
        onGridReady={onGridReady}
      />
  </div>
  );
};

export default AgGridTable;
