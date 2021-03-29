import React from "react";
import { DeviceEventEmitter } from "react-native";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NewWindow({ value, buttonIndex }) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			style={styles.container}
			onPress={() => {
				navigation.navigate("WebView");
			}}
		>
			<View>
				<Image
					source={
						value.urlToImage
							? { uri: value.urlToImage }
							: require("../assets/default_news_image.jpg")
					}
					style={styles.image}
				/>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{value.title}</Text>
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
		</TouchableOpacity>
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
