import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutUsSCreen from "./screens/AboutUsScreen";
import EventsScreen from "./screens/EventsScreen";
import NewsfeedScreen from "./screens/NewsfeedScreen";
import CollaborationsScreen from "./screens/CollaborationsScreen";
import JoinOurTeamScreen from "./screens/JoinOurTeamScreen";
import SuggestionBoxScreen from "./screens/SuggestionBoxScreen";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{
						headerStyle: { backgroundColor: "black" },
						headerTitleStyle: { color: "white" },
					}}
				/>
				<Stack.Screen name="About Us" component={AboutUsSCreen} />
				<Stack.Screen name="Events" component={EventsScreen} />
				<Stack.Screen name="Newsfeed" component={NewsfeedScreen} />
				<Stack.Screen
					name="Collaborations"
					component={CollaborationsScreen}
				/>
				<Stack.Screen
					name="Join Our Team"
					component={JoinOurTeamScreen}
				/>
				<Stack.Screen
					name="Suggestion Box"
					component={SuggestionBoxScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
