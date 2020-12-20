import React from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";

export default function MissionStatement() {
	return <View>{content}</View>;
}

const content = (
	<Text style={Styles.principleText}>
		To <Text style={{ fontWeight: "bold" }}>unite</Text> and
		<Text style={{ fontWeight: "bold" }}>amplify</Text> youth voices.
		Synergy Network International seeks to amplify youth{" "}
		<Text style={{ fontWeight: "bold" }}>ambition</Text> by stimulating
		networking and cooperation among youth leaders from around the world.
		Through conferences, conventions, and resources on how to grow student
		initiatives, we spread youth knowledge and connections to unify the
		world's young leaders under a network that{" "}
		<Text style={{ fontWeight: "bold" }}>transforms</Text> their{" "}
		<Text style={{ fontWeight: "bold" }}>ambition</Text> into{" "}
		<Text style={{ fontWeight: "bold" }}>reality</Text>. We want to show the
		world that its youth are one, standing with one another as a mechanism
		for success so that, together, we make this a better place.
	</Text>
);
