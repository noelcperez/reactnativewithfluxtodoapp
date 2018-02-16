import StackNavigation from '../navigation/StackNavigator'

const initialState = StackNavigation.router.getStateForAction(StackNavigation.router.getActionForPathAndParams("Home"));

const navReducer = (state = initialState, action) => {
	const newState = StackNavigation.router.getStateForAction(action, state);
	return newState || state;
}

export default navReducer