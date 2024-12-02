'use client'
import React from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import AgGridTable from '@/components/Tables/AgGridTable';
import MUITable from '@/components/Tables/MUITable';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const Users: React.FC = () => {
  const rowColumns : GridColDef[] = [
    { field: "name", headerName: 'Name',flex: 1 },
    { field: "phone", headerName: 'Phone', flex: 1 },
    { field: "email", headerName: 'Email', flex: 1 },
    { field: "role", headerName: 'Role',  flex: 1 },
    { field: "address", headerName: 'Address',flex: 1  },
    { field: "status", headerName: 'Status', flex: 1 },
    { field: "action", headerName: 'Action',flex: 1,
      sortable: false, 
      filterable: false, 
      disableColumnMenu: true, 
      disableReorder: true, 
      disableExport: true, 
      renderCell: (params) => (
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Edit</button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">Delete</button>
        </div>
      )},
  ];
  
  const data = [
    {id:1, name: "John Doe", phone: "123-456-7890", email: "john@example.com", role: "Admin", address: "123 Main St", status: "Active" },
    {id:2, name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com", role: "User", address: "456 Elm St", status: "Inactive" },
    {id:3, name: "Alice Brown", phone: "555-123-4567", email: "alice@example.com", role: "Editor", address: "789 Oak St", status: "Active" },
  ];
 
  return (
    <DefaultLayout>
      <div>
        {/* <MUITable  rowData={data} columns={rowColumns}/> */}
         {/* <AgGridTable  rowData={data}  /> */}

         {/* <TableTailwindOne columnDefs={rowColumns} data={data} /> */}
      </div>
    </DefaultLayout>
  )
}

export default Users;