import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";

export default function YudLeads() {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/yud_leads.jpg")}
				style={styles.logo}
			/>
			<Text style={styles.description}>
				YudLeads is a non-profit organization, created and led by young
				people, focused on youth empowerment through research,
				consulting and the creation of tools, spaces and projects for
				the promotion and strengthening of youth participation,
				entrepreneurship and innovation Social. Aligned with the United
				Nations 2030 Agenda and its Youth 2030 Strategy, we seek to
				contribute to youth empowerment and leadership, focused on
				Sustainable Development in all its dimensions. For this we work
				with public, private and civil society institutions that carry
				out activities or have a relationship with girls, boys and young
				people.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		backgroundColor: "white",
		alignItems: "center",
	},
	logo: {
		width: 250,
		height: 70,
		top: 30,
	},
	description: {
		textAlign: "center",
		fontSize: 19,
		padding: 20,
		top: 60,
	},
});
