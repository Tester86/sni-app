import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";

export default function StaffMember({
	imageLink,
	role,
	biography,
	quote,
	author,
	name,
}) {
	return (
		<View style={styles.container}>
			<Image
				style={styles.memberImage}
				source={{
					uri: imageLink,
				}}
			/>
			<View style={{ marginTop: 10, left: 0 }}>
				<Text style={styles.details}>
					<Text style={{ fontWeight: "bold" }}>Name: </Text>
					{name}
				</Text>
				<Text style={styles.details}>
					<Text style={{ fontWeight: "bold" }}>Role: </Text>
					{role}
				</Text>
				<Text style={styles.details}>
					<Text style={{ fontWeight: "bold" }}>Biography: </Text>
					{biography}
				</Text>
				<Text style={styles.details}>
					<Text style={{ fontWeight: "bold" }}>Quote: </Text>
					{quote}
				</Text>
				<Text
					style={[styles.author, author ? {} : { display: "none" }]}
				>{`~ ${author}`}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: Dimensions.get("window").height,
		width: Dimensions.get("window").width,
		display: "flex",
		padding: 20,
		backgroundColor: "white",
	},
	memberImage: {
		height: 200,
		width: 200,
		borderRadius: 20,
		marginTop: 20,
		alignSelf: "center",
	},
	details: {
		fontSize: 18,
		marginTop: 20,
	},
	author: {
		fontSize: 16,
		marginTop: 10,
	},
});
