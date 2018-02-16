import React from "react"
import { StackNavigator } from "react-navigation"

import Home from '../components/Home'
  
const StackNavigation = StackNavigator({
	Home: {
		screen: Home,
	}
})

export default StackNavigation