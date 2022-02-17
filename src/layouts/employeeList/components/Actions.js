import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid, Button, Stack } from "@mui/material";
import MDBox from "components/MDBox";
function Actions() {

  return (
    <div className="App">
      <Grid >
        <Grid xs={12}>
          <MaterialTable
            title="Employee Master"
            columns={[
              { title: 'OB ID', field: 'obid',width:"7%"},
              { title: 'Emp ID', field: 'empid'},
              { title: 'Full Name', field: 'name'},
              { title: 'Email', field: 'email', type: 'email' },
              { title: 'Phone No.', field: 'phone', type:'numeric' },
              { title: 'Joining Date', field: 'jdate', type: 'numeric' },
              { title: 'Report Manager', field: 'rm'},

            ]}
            data={[
              {obid: '101', empid: 'ATPL001', name: 'Sumalatha Chinthala', email: 'sumalatha.chinthala@gmail.com', phone: '9234567890', jdate:'12-04-2022', rm:'Revanth Kumar' },
              {obid: '102', empid: 'ATPL002', name: 'Kumara Swamy Kummara', email: 'kumar.kummara@gmail.com', phone: '9898767890', jdate:'13-04-2022',rm:'Revanth Kumar' },
              {obid: '103', empid: 'ATPL003', name: 'Mallesh Piduguralla', email: 'mallesh.piduguralla@gmail.com', phone: '7654567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
              {obid: '104', empid: 'ATPL004', name: 'Supraja Aavula', email: 'supraja.aavula@gmail.com', phone: '7864567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
              {obid: '105', empid: 'ATPL005', name: 'Ram Bindhu', email: 'ram.bindhu@gmail.com', phone: '6234567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
              {obid: '106', empid: 'ATPL006', name: 'Somnath Chakravarthi', email: 'somnath.chakravarthi@gmail.com', phone: '9234567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
              {obid: '107', empid: 'ATPL007', name: 'Sumalatha Chinthala', email: 'sumalatha.chinthala@gmail.com', phone: '9234567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
              {obid: '108', empid: 'ATPL008', name: 'Kumara Swamy Kummara', email: 'kumar.kummara@gmail.com', phone: '9898767890', jdate:'13-04-2022',rm:'Revanth Kumar' },
              {obid: '109', empid: 'ATPL009', name: 'Mallesh Piduguralla', email: 'mallesh.piduguralla@gmail.com', phone: '7654567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
            ]}
            
            components={{
              Action: props => (
                <Stack spacing={1} direction="row">
                  <Button
                    onClick={(event) => props.action.onClick(event, props.data)}
                    
                    variant="contained"
                    style={{ textTransform: 'none', color:"#FFFFFF", background:"#FF3333", borderRadius:"10%" }}
                    size="small"
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={(event1) => props.action.onClick(event1, props.data)}
        
                    variant="contained"
                    style={{ textTransform: 'none', color:"#FFFFFF", background:"#47E02E", borderRadius:"10%" }}
                    size="small"
                  >
                    Reject
                  </Button>
                </Stack>
              ),
            }}
            options={{
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              },
              rowStyle: {
                backgroundColor: '#EEE',fontSize:14
              },
              actionsColumnIndex: -1
            }}
            detailPanel={[
              {
                tooltip: 'Show Name',
                render: rowData => {
                  return (
                    <MDBox py={2} pr={2}
                      style={{
                        fontSize: 14,
                        textAlign: 'center',
                        mr:"30rem",
                        color: 'black',
                        backgroundColor: '#ffffff',
                      }}
                    ><Grid container>
                      <Grid item xs={12}>Full Name : {rowData.name}</Grid>
                      <Grid item xs={12}>Emp ID : {rowData.empid}<br/></Grid>
                      OB ID : {rowData.obid}<br/>
                      Email : {rowData.email}<br/>
                      Phone No. : {rowData.phone}<br/>
                      Joining Date : {rowData.jdate}<br/>
                      Reporting Manager : {rowData.rm}<br/>
                      </Grid>
                    </MDBox>
                  )
                },
              }
            ]}
          />
        </Grid>
      </Grid>
      
    </div>
  );
}

export default Actions;
