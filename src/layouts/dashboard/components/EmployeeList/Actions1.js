import React, { useState } from "react";

import MaterialTable from "material-table";
import { Grid, Button, Stack, Box } from "@mui/material";

function Actions1() {

  return (
    <Box>
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
              {obid: 'OB101', empid: 'ATPL001', name: 'Sumalatha Chinthala', email: 'sumalatha.chinthala@gmail.com', phone: '9234567890', jdate:'12-04-2022', rm:'Revanth Kumar' },
              {obid: 'OB102', empid: 'ATPL002', name: 'Kumara Swamy Kummara', email: 'kumar.kummara@gmail.com', phone: '9898767890', jdate:'13-04-2022',rm:'Revanth Kumar' },
              {obid: 'OB103', empid: 'ATPL003', name: 'Mallesh Piduguralla', email: 'mallesh.piduguralla@gmail.com', phone: '7654567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
              {obid: 'OB104', empid: 'ATPL004', name: 'Supraja Aavula', email: 'supraja.aavula@gmail.com', phone: '7864567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
              {obid: 'OB105', empid: 'ATPL005', name: 'Ram Bindhu', email: 'ram.bindhu@gmail.com', phone: '6234567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
              {obid: 'OB106', empid: 'ATPL006', name: 'Somnath Chakravarthi', email: 'somnath.chakravarthi@gmail.com', phone: '9234567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
              {obid: 'OB107', empid: 'ATPL007', name: 'Sumalatha Chinthala', email: 'sumalatha.chinthala@gmail.com', phone: '9234567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
              {obid: 'OB108', empid: 'ATPL008', name: 'Kumara Swamy Kummara', email: 'kumar.kummara@gmail.com', phone: '9898767890', jdate:'13-04-2022',rm:'Revanth Kumar' },
              {obid: 'OB109', empid: 'ATPL009', name: 'Mallesh Piduguralla', email: 'mallesh.piduguralla@gmail.com', phone: '7654567890', jdate:'12-04-2022',rm:'Revanth Kumar' },
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
          />
        </Grid>
      </Grid>
      </Box>
  );
}

export default Actions1;
