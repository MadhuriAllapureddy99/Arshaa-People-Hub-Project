import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid, Button, Stack } from "@mui/material";
import MDBox from "components/MDBox";
function Actions() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'OB ID', field: 'obid', width: "7%" },
    { title: 'Emp ID', field: 'empid' },
    { title: 'Full Name', field: 'name' },
    { title: 'Personal Email', field: 'email', type: 'email' },
    { title: 'Phone No.', field: 'phone', type: 'tel' },
    { title: 'Joining Date', field: 'jdate', type: 'date' },
    

  ]);

  const [data, setData] = useState([
    { obid: 'OB101', empid: 'ATPL001', name: 'Sumalatha Chinthala', email: 'sumalatha.chinthala@gmail.com', phone: '9234567890', jdate: '12-04-2022', rm: 'Revanth Kumar' },
    { obid: 'OB102', empid: 'ATPL002', name: 'Kumara Swamy Kummara', email: 'kumar.kummara@gmail.com', phone: '9898767890', jdate: '13-04-2022', rm: 'Revanth Kumar' },
    { obid: 'OB103', empid: 'ATPL003', name: 'Mallesh Piduguralla', email: 'mallesh.piduguralla@gmail.com', phone: '7654567890', jdate: '12-04-2022', rm: 'Revanth Kumar' },
    { obid: 'OB104', empid: 'ATPL004', name: 'Supraja Aavula', email: 'supraja.aavula@gmail.com', phone: '7864567890', jdate: '12-04-2022', rm: 'Revanth Kumar' },
    { obid: 'OB105', empid: 'ATPL005', name: 'Ram Bindhu', email: 'ram.bindhu@gmail.com', phone: '6234567890', jdate: '12-04-2022', rm: 'Revanth Kumar' },
    { obid: 'OB106', empid: 'ATPL006', name: 'Somnath Chakravarthi', email: 'somnath.chakravarthi@gmail.com', phone: '9234567890', jdate: '12-04-2022', rm: 'Revanth Kumar' },
    { obid: 'OB107', empid: 'ATPL007', name: 'Sumalatha Chinthala', email: 'sumalatha.chinthala@gmail.com', phone: '9234567890', jdate: '12-04-2022', rm: 'Revanth Kumar' },
    { obid: 'OB108', empid: 'ATPL008', name: 'Kumara Swamy Kummara', email: 'kumar.kummara@gmail.com', phone: '9898767890', jdate: '13-04-2022', rm: 'Revanth Kumar' },
    { obid: 'OB109', empid: 'ATPL009', name: 'Mallesh Piduguralla', email: 'mallesh.piduguralla@gmail.com', phone: '7654567890', jdate: '12-04-2022', rm: 'Revanth Kumar' },
  ]);
  return (
    <div className="App">
      <Grid >
        <Grid xs={12}>
          <MaterialTable
            title="Employee Master"
            columns={columns}
            data={data}
            options={{
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              },
              rowStyle: {
                backgroundColor: '#EEE', fontSize: 14
              },
              actionsColumnIndex: -1
            }}

            detailPanel={[
              {
                tooltip: 'Show Data',
                render: rowData => {
                  return (
                    <MDBox py={2} pr={2} pl={20} sx={{ width: '100%' }}
                      style={{
                        fontSize: 14,
                        textAlign: 'left',
                        
                        color: 'black',
                        backgroundColor: '#ffffff',
                      }}
                    > <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                         <Grid item xs={6}>Full Name </Grid>
                         <Grid item xs={6}>{rowData.name}</Grid>
                         <Grid item xs={6}>Emp ID </Grid>
                         <Grid item xs={6}>{rowData.empid}</Grid>
                        <Grid item xs={6}>OB ID</Grid>
                        <Grid item xs={6}>{rowData.obid}</Grid>
                        <Grid item xs={6}>Email </Grid>
                        <Grid item xs={6}>{rowData.email}</Grid>
                        <Grid item xs={6}>Phone No. </Grid>
                        <Grid item xs={6}>{rowData.phone}</Grid>
                        <Grid item xs={6}>Joining Date </Grid>
                        <Grid item xs={6}>{rowData.jdate}</Grid>
                      </Grid>
                    </MDBox>
                  )
                },

              }
            ]}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);

                    resolve();
                  }, 1000)
                }),
            }}
          />
        </Grid>
      </Grid>

    </div>
  );
}

export default Actions;
