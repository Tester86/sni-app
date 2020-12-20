import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function SuggestionBoxScreen({ navigation }) {
	const [suggestion, setSuggestion] = useState("");

	const _submit = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.background}>
			<View style={styles.form__container}>
				<TextInput
					style={styles.textInput}
					placeholder="I suggest..."
					multiline={true}
					value={suggestion}
					onChangeText={(text) => setSuggestion(text)}
				/>
				<TouchableOpacity style={styles.submitButton} onPress={_submit}>
					<Text style={styles.submitText}>Submit</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	form__container: {
		width: "80%",
		height: "90%",
		backgroundColor: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	textInput: {
		flex: 0.4,
		backgroundColor: "white",
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 12,
		fontSize: 18,
		textAlignVertical: "top",
		padding: 20,
	},
	submitButton: {
		height: "25%",
		backgroundColor: "blue",
		marginTop: "10%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
	},
	submitText: {
		color: "white",
		fontSize: 17,
	},
});
