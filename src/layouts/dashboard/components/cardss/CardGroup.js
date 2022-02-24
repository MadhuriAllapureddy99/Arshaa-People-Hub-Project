import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MDBox from 'components/MDBox';

import { IconButton } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export default function CardGroup() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5}>
          <Card sx={{ minWidth: 275, maxHeight: 180, background: '#00008B' }}>
            <CardContent>
              <Typography color="Blue" mt={1} fontWeight="regular" style={{ fontSize: '2em' }}>
                140
              </Typography>
              <Typography color="green" fontWeight="light">
              Total Employees
              </Typography>
              <Divider variant="middle" />
              <Typography color="light"
                align="center"
                textTransform="capitalize"
                fontWeight="regular">
                More Info
                <IconButton>
                <Link to="/employee_Master"><ArrowCircleRightRoundedIcon fontSize="medium" /></Link>
                </IconButton>
              </Typography>
            </CardContent>

          </Card>
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5}>
          <Card sx={{ minWidth: 275, maxHeight: 180, background: '#00008B' }}>
            <CardContent>
              <Typography color="Blue" mt={1} fontWeight="regular" style={{ fontSize: '2em' }}>
                100
              </Typography>
              <Typography color="green" fontWeight="light">
              Approved Onboards
              </Typography>
              <Divider variant="middle" />
              <Typography color="light"
                align="center"
                textTransform="capitalize"
                fontWeight="regular">
                More Info
                <IconButton>
                <ArrowCircleRightRoundedIcon fontSize="medium" />
                </IconButton>
              </Typography>
            </CardContent>

          </Card>
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5}>
          <Card sx={{ minWidth: 275, maxHeight: 180, background: '#00008B' }}>
            <CardContent>
              <Typography color="Blue" mt={1} fontWeight="regular" style={{ fontSize: '2em' }}>
                40
              </Typography>
              <Typography color="green" fontWeight="light">
              Discarded Onboards
              </Typography>
              <Divider variant="middle" />
              <Typography color="light"
                align="center"
                textTransform="capitalize"
                fontWeight="regular">
                More Info
                <IconButton>
                  <ArrowCircleRightRoundedIcon fontSize="medium" />
                </IconButton>
              </Typography>
            </CardContent>

          </Card>
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5}>
          <Card sx={{ minWidth: 275, maxHeight: 180, background: '#00008B' }}>
            <CardContent>
              <Typography color="Blue" mt={1} fontWeight="regular" style={{ fontSize: '2em' }}>
                6
              </Typography>
              <Typography color="green" fontWeight="light">
              Pending Onboards
              </Typography>
              <Divider variant="middle" />
              <Typography color="light"
                align="center"
                textTransform="capitalize"
                fontWeight="regular">
                More Info
                <IconButton>
                <Link to="/Document_Validation"><ArrowCircleRightRoundedIcon fontSize="medium" /></Link>
                </IconButton>
              </Typography>
            </CardContent>

          </Card>
        </MDBox>
      </Grid>
    </Grid>
  );
}
