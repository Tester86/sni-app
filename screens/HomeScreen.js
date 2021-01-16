import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import WidgetRow from "../frontend-utils/WidgetRow";

/* ORDER OF WIDGETS:

	1. About Us
	2. Events
	3. Newsfeed
	4. Collaborations
	5. Join Our Team
	6. Suggestion Box

*/

export default function HomeScreen({ navigation }) {
	return (
		<LinearGradient
			colors={["#C582EB", "#002557", "#5CE1E6"]}
			style={styles.background}
		>
			<StatusBar barStyle="dark-content"/>
			<View style={styles.widget__container}>
				<WidgetRow
					imageSrc1={require("../assets/sni_logo.jpg")}
					imageSrc2={require("../assets/events_icon.png")}
					label1={"About Us"}
					label2={"Events"}
					imageStyle1={styles.iconAboutUs}
					imageStyle2={styles.iconEvents}
					nav1={() => navigation.navigate("About Us")}
					nav2={() => navigation.navigate("Events")}
				/>
				<WidgetRow
					imageSrc1={require("../assets/news_icon.png")}
					imageSrc2={require("../assets/collaborations_icon.png")}
					label1={"Newsfeed"}
					label2={"Collaborations"}
					imageStyle1={styles.iconNewsfeed}
					imageStyle2={styles.iconCollaborations}
					nav1={() => navigation.navigate("Newsfeed")}
					nav2={() => navigation.navigate("Collaborations")}
				/>
				<WidgetRow
					imageSrc1={require("../assets/joinus_icon.png")}
					imageSrc2={require("../assets/suggestionBox_icon.png")}
					label1={"Join our Team"}
					label2={"Suggestion Box"}
					imageStyle1={styles.iconJoinOurTeam}
					imageStyle2={styles.iconSuggestionbox}
					nav1={() => navigation.navigate("Join Our Team")}
					nav2={() => navigation.navigate("Suggestion Box")}
				/>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	widget__container: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	iconAboutUs: {
		height: 70,
		width: 80,
		borderRadius: 10,
	},
	iconEvents: {
		height: 50,
		width: 50,
	},
	iconNewsfeed: {
		height: 50,
		width: 65,
	},
	iconCollaborations: {
		height: 50,
		width: 70,
	},
	iconJoinOurTeam: {
		height: 50,
		width: 55,
	},
	iconSuggestionbox: {
		height: 50,
		width: 50,
	},
	iconPartnerships: {
		height: 50,
		width: 50,
	},
});
