import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import GuestLoginForm from "./GuestLoginForm/components/GuestLoginForm";


function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <MDBox bgColor="white" py={0.01}>
        <MDBox>
          <Grid container spacing={6}>
            <Grid item xs={20} md={10} lg={20}>
              <GuestLoginForm />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
