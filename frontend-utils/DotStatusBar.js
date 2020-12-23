import React from "react";
import { View, StyleSheet } from "react-native";

export default function DotStatusBar({ selected, Ndots, alternativeColors }) {
	const dotRange = [...Array(Ndots).keys()];
	return (
		<View
			style={[
				styles.container,
				Ndots > 2
					? { justifyContent: "space-between" }
					: { justifyContent: "space-around" },
				{ width: Ndots * 25 },
			]}
		>
			{dotRange.map((index) => {
				return (
					<View
						style={[
							styles.dot,
							selected === index
								? alternativeColors ? { backgroundColor: alternativeColors[0] } : {backgroundColor: "white"}
								: alternativeColors ? { backgroundColor: alternativeColors[1] } : {backgroundColor: "gray"}
						]}
					></View>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 13,
		position: "absolute",
		alignSelf: "center",
		bottom: 40,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between", //space between if dots > 2
	},
	dot: {
		height: 13,
		width: 13,
		backgroundColor: "white",
		borderRadius: 20,
	},
});

{
	/*<View style={styles.container}>
			<View
				style={[
					styles.dot,
					selected === 0
						? { backgroundColor: "black" }
						: { backgroundColor: "white" },
				]}
			></View>

			<View
				style={[
					styles.dot,
					selected === 1
						? { backgroundColor: "black" }
						: { backgroundColor: "white" },
				]}
			></View>
		</View> */
}
