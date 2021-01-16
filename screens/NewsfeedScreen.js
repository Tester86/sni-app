import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NewWindow from "../frontend-utils/NewWindow";
export default function NewsfeedScreen() {
	// Getting news images
	const sources = [
		"https://www.entrepreneur.com/topic/leadership",
		"https://www.forbes.com/leadership/?sh=3d4defd1d66d",
		"https://www.cnbc.com/leadership/",
		"https://www.bbc.com/worklife/tags/leadership",
	];

	

	return (
		<ScrollView
			contentContainerStyle={{ alignItems: "center" }}
			style={styles.container}
		>
			<NewWindow imageSource={require("../assets/logo.png")} />
			<NewWindow imageSource={require("../assets/logo.png")} />
			<NewWindow imageSource={require("../assets/logo.png")} />
			<NewWindow imageSource={require("../assets/logo.png")} />
			<NewWindow imageSource={require("../assets/logo.png")} />
			<NewWindow imageSource={require("../assets/logo.png")} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
	},
});
