/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import Card from '@mui/material/Card';
// import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
// import IconButton from '@mui/material/IconButton';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard';

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from 'layouts/dashboard/components/OrdersOverview';
// import BuildingTwo from 'layouts/dashboard/components/BuildingTwo';
// import BuildingThree from 'layouts/dashboard/components/BuildingThree';
// import BuildingFour from 'layouts/dashboard/components/BuildingFour';
import BedandBill from 'layouts/dashboard/components/BedandBIll';
import Expenditures from 'layouts/dashboard/components/expenditures';
//import Chart from 'layouts/dashboard/components/charts';

function Dashboard() {
	// const { sales, tasks } = reportsLineChartData;

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<BedandBill total="7" info="Total Beds" more="More Info" />
					</Grid>
					<Grid item xs={12}>
						<Expenditures />
					</Grid>
				</Grid>
			</MDBox>
			<Footer />
		</DashboardLayout>
	);
}

export default Dashboard;
