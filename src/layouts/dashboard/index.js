// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import Actions1 from './components/EmployeeList/Actions1';
import BedandBill from 'layouts/dashboard/components/BedandBIll';

function Dashboard() {

	return (
		<DashboardLayout>

			<DashboardNavbar />
			<MDBox py={3}>
				<Grid container >
					<Grid item xs={12}>
					<Actions1 />
					</Grid>
				</Grid>
			</MDBox>

			

			<Footer />
		</DashboardLayout>
	);
}

export default Dashboard;
