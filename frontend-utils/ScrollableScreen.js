import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	Dimensions,
} from "react-native";

export default function ScrollableScreen({
	quote,
	author,
	bgColor,
	buttonText,
	onPress,
}) {
	return (
		<View style={[styles.container, { backgroundColor: bgColor }]}>
			<View style={styles.quoteContainer}>
				<Text style={styles.quote}>{`"${quote}"`}</Text>
				<Text style={styles.author}>{`~ ${author}`}</Text>
			</View>
			<TouchableHighlight style={styles.button} onPress={onPress} underlayColor={"gray"}>
				<Text style={styles.buttonText}>{buttonText}</Text>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: Dimensions.get("window").height,
		width: Dimensions.get("window").width,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	quoteContainer: {
		flex: 0.7,
		justifyContent: "center",
		padding: 20,
	},
	quote: {
		textAlign: "center",
		fontSize: 30,
		color: "white",
		fontStyle: "italic",
	},
	author: {
		fontSize: 20,
		marginTop: 35,
		marginLeft: 30,
		color: "white",
	},
	button: {
		height: 60,
		width: 150,
		backgroundColor: "white",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		textAlign: "center",
	},
});
