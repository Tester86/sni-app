import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Styles from "./Styles";

export default function VisionStatement() {
	return <View>{content}</View>;
}

const content = (
	<Text style={Styles.principleText}>
		Synergy Network International aspires to be the{" "}
		<Text style={{ fontWeight: "bold" }}>consolidation</Text> of global
		youth <Text style={{ fontWeight: "bold" }}>leadership</Text> and{" "}
		<Text style={{ fontWeight: "bold" }}>potential</Text>. Our vision is to
		be a center for the empowerment of youth voices through a network of
		young leaders, each supporting one another in one common bond: to change
		the world. This change will come through every resource, piece of
		advice, and initiative shared by our members as priceless passion is
		exchanged and strengthened throughout our platform for impact. We are
		the youth <Text style={{ fontWeight: "bold" }}>foundation</Text> for
		<Text style={{ fontWeight: "bold" }}>change</Text>,{" "}
		<Text style={{ fontWeight: "bold" }}>progress</Text>, and{" "}
		<Text style={{ fontWeight: "bold" }}>success</Text>.
	</Text>
);
