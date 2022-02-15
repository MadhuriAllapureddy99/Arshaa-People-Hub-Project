// Material Dashboard 2 React layouts
import Dashboard from 'layouts/dashboard';
import documentApproval from 'layouts/documentApproval';
import Profile from 'layouts/profile';
import SignIn from 'layouts/authentication/sign-in';
import Branch from 'layouts/branch/index';
import employeeList from 'layouts/employeeList'

// @mui icons
import Icon from '@mui/material/Icon';


const routes = [
	{
		type: 'collapse',
		name: 'Dashboard',
		key: 'dashboard',
		icon: <Icon fontSize="small">dashboard</Icon>,
		route: '/dashboard',
		component: <Dashboard />
	},
	{
		type: 'collapse',
		name: 'Onboarding Form',
		key: 'onboardingForm',
		icon: <Icon fontSize="small">receipt_long</Icon>,
		route: '/onboardingForm',
		component: <Profile />
	},
	{
		type: 'collapse',
		name: 'Confirm Onboarding',
		key: 'branch',
		icon: <Icon fontSize="small">assignment</Icon>,
		route: '/branch',
		component: <Branch />
	},
	{
		type: 'collapse',
		name: 'Document Approvals',
		key: 'documentApproval',
		icon: <Icon fontSize="small">receipt_long</Icon>,
		route: '/document_Approval',
		component: <documentApproval />
	},
	{
		type: 'collapse',
		name: 'Allocate Assets',
		key: 'allocateAssets',
		icon: <Icon fontSize="small">store</Icon>,
		route: '/Allocate_Assets',
		component: <inventory />
	},
	{
		type: 'collapse',
		name: 'Employee List',
		key: 'employeeList',
		icon: <Icon fontSize="small">assignment</Icon>,
		route: '/employeeList',
		component: <employeeList />
	},

	{
		type: 'collapse',
		name: 'Sign Out',
		key: 'sign-out',
		icon: <Icon fontSize="small">logout</Icon>,
		route: '/authentication/sign-in',
		component: <SignIn />
	}
];
export default routes;
