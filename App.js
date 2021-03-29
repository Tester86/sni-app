import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutUsSCreen from "./screens/AboutUsScreen";
import EventsScreen from "./screens/EventsScreen";
import NewsfeedScreen from "./screens/NewsfeedScreen";
import CollaborationsScreen from "./screens/CollaborationsScreen";
import JoinOurTeamScreen from "./screens/JoinOurTeamScreen";
import SuggestionBoxScreen from "./screens/SuggestionBoxScreen";
import StaffMembers from "./screens/StaffMembers";
import FoundingPrinciples from "./screens/FoundingPrinciples";
import WebViewScreen from "./screens/WebViewScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
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
				<Stack.Screen name="Staff Members" component={StaffMembers} />
				<Stack.Screen
					name="Founding Principles"
					component={FoundingPrinciples}
				/>
				<Stack.Screen name="WebView" component={WebViewScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
