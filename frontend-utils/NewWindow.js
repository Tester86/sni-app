import React from "react";
import {
	View,
	StyleSheet,
	TouchableHighlight,
	Image,
	Text,
} from "react-native";

export default function NewWindow({ imageSource, title }) {
	return (
		<TouchableHighlight style={styles.container}>
			<View>
				<Image
					source={{
						uri: imageSource,
					}}
					style={styles.image}
				/>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{title}</Text>
				</View>
				<View style={styles.websiteTitleContainer}>
					<Image
						source={{
							uri:
								"https://assets.entrepreneur.com/static/20180424102507-entrepreneur-logo-black.svg",
						}}
						style={{ height: 20, width: 50 }}
					/>
				</View>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 350,
		backgroundColor: "white",
		flexDirection: "column",
		borderRadius: 12,
		alignItems: "center",
		marginTop: 30,
		shadowColor: "#000",
		shadowOffset: {
			height: 2,
			width: 0,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	image: {
		width: 300,
		height: 200,
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
	},
	titleContainer: {
		margin: 15,
		flex: 0.9,
		justifyContent: "center",
		alignContent: "center",
	},
	title: {
		color: "black",
		fontSize: 20,
		alignSelf: "center",
		textAlign: "center",
	},
	websiteTitleContainer: {
		flex: 0.2,
		backgroundColor: "white",
	},
});
