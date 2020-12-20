import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function WidgetRow({
	imageSrc1,
	imageSrc2,
	label1,
	label2,
	imageStyle1,
	imageStyle2,
	nav1,
	nav2
}) {
	return (
		<View style={styles.row}>
			<TouchableOpacity
				onPress={nav1}
				style={styles.widget}
			>
				<Image source={imageSrc1} style={imageStyle1} />
				<Text style={{fontSize: 15}}>{label1}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={nav2}
				style={styles.widget}
			>
				<Image source={imageSrc2} style={imageStyle2} />
				<Text style={{fontSize: 15}}>{label2}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flex: 0.2,
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginTop: 40,
	},
	widget: {
		backgroundColor: "white",
		width: Dimensions.get("window").width / 2.5,
		height: 110,
		borderRadius: 20,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
});
