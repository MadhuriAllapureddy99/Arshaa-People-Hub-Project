// Material Dashboard 2 React layouts
import Dashboard from 'layouts/dashboard';
import OnBoardApproval from 'layouts/onBoardApproval';
import Profile from 'layouts/profile';
import SignIn from 'layouts/authentication/sign-in';
import Branch from 'layouts/branch/index';
import EmployeeList from 'layouts/employeeList';
import AllocateAssets from 'layouts/allocateAssets';

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
		name: 'On-Boarding Form',
		key: 'onboarding_Form',
		icon: <Icon fontSize="small">receipt_long</Icon>,
		route: '/onboarding_Form',
		component: <Profile />
	},
	{
		type: 'collapse',
		name: 'Document Validation',
		key: 'Document_Validation',
		icon: <Icon fontSize="small">assignment</Icon>,
		route: '/Document_Validation',
		component: <Branch />
	},
	{
		type: 'collapse',
		name: 'On-Boarding Approval',
		key: 'onboarding_Approval',
		icon: <Icon fontSize="small">receipt_long</Icon>,
		route: '/onboarding_Approval',
		component: <OnBoardApproval />
	},
	{
		type: 'collapse',
		name: 'Allocate Assets',
		key: 'allocate_Assets',
		icon: <Icon fontSize="small">store</Icon>,
		route: '/allocate_Assets',
		component: <AllocateAssets />
	},
	{
		type: 'collapse',
		name: 'Employee List',
		key: 'employee_List',
		icon: <Icon fontSize="small">assignment</Icon>,
		route: '/employee_List',
		component: <EmployeeList />
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
