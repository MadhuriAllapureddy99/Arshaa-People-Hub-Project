// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import IconButton from '@mui/material/IconButton';
import { CardContent, Divider } from '@mui/material';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import cardData from './data/cardData.json';


function BedandBill(props) {
  const [ data, setData ] = useState('');
	return (
    <Box>
      <Grid item xs={12} md={6} lg={3}>
        <h4>Employee Details</h4>
      </Grid>
	  <br/>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <MDBox mb={1.5}>
            <Card sx={{ minWidth: 275, minHeight: 100, background: "#2E8B57" }}>
              <CardContent sx={{ align: "center" }}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ fontSize: "2em" }}
                >
                  140
                </MDTypography>
                <MDTypography color="light" fontWeight="light">
                  Total Employees
                </MDTypography>
                <Divider variant="insent" fullWidth />
                <MDTypography
                  color="light"
                  align="center"
                  textTransform="capitalize"
                  fontWeight="regular"
                >
                  More Info
                  <IconButton>
                    <ArrowCircleRightRoundedIcon fontSize="medium" />
                  </IconButton>
                </MDTypography>
              </CardContent>
            </Card>
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MDBox mb={1.5}>
            <Card sx={{ minWidth: 275, minHeight: 100, background: "#FF6347" }}>
              <CardContent sx={{ align: "center" }}>
                <MDTypography
                  color="light"
                  mt={1}
                  fontWeight="regular"
                  style={{ fontSize: "2em" }}
                >
                  100
                </MDTypography>
                <MDTypography color="light" fontWeight="light">
                 Approved Onboards
                </MDTypography>
                <Divider variant="insent" fullWidth />
                <MDTypography
                  color="light"
                  align="center"
                  textTransform="capitalize"
                  fontWeight="regular"
                >
                  More Info
                  <IconButton>
                    <ArrowCircleRightRoundedIcon fontSize="medium" />
                  </IconButton>
                </MDTypography>
              </CardContent>
            </Card>
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
					<MDBox mb={1.5}>
						<Card sx={{ minWidth: 275, minHeight: 100, background: '#2F4F4F' }}>
							<CardContent sx={{ align: 'center' }}>
								<MDTypography color="light" mt={1} fontWeight="regular" style={{ fontSize: '2em' }}>
									10
								</MDTypography>
								<MDTypography color="light" fontWeight="light">Discarded Onboards</MDTypography>
								<Divider variant="insent" fullWidth />
								<MDTypography
									color="light"
									align="center"
									textTransform="capitalize"
									fontWeight="regular"
								>
									More Info
									<IconButton>
										<ArrowCircleRightRoundedIcon fontSize="medium" />
									</IconButton>
								</MDTypography>
							</CardContent>
						</Card>
					</MDBox>
				</Grid>
      </Grid>
      </Box>
  );
}
export default BedandBill;
