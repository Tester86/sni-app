import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";

export default function ClimateCardinals() {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/climate_cardinals.jpg")}
				style={styles.logo}
			/>
			<Text style={styles.description}>
				Climate Cardinals is an international youth-led nonprofit
				working to make the climate movement more accessible to those
				who don’t speak English. We aim to educate and empower a diverse
				coalition of people to tackle the climate crisis. We have over
				8,000 volunteers who are translating and sourcing climate
				information into over 100 languages. To date, this international
				movement spans 41 countries and has reached over 350,000 people
				with over 500, 000 words of climate information translated.{" "}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		backgroundColor: "black",
		alignItems: "center",
	},
	logo: {
		height: 90,
		width: 300,
		top: 50,
	},
	description: {
		textAlign: "center",
		fontSize: 19,
		padding: 20,
		top: 80,
		color: "white",
	},
});
