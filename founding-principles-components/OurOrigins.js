import React from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";

export default function OurOrigins() {
	return <View>{content}</View>;
}

const content = (
	<Text style={Styles.principleText}>
		After observing how much connections with youth leaders from around the
		world enhance one’s own commitments and having been enriched by such
		relationships themselves, three friends decided to partner together on a
		journey to consolidate an official network of youth leadership. These
		three partners were connected in their common bond of leadership,
		initiative, and a drive for change despite the thousands of kilometers
		between them, and they benefited greatly from it as one strengthened and
		enriched the projects of another. They realized that if even such a
		remote connection as their own warranted success, an official network
		committed to bringing leaders together like they were but would be all
		the better on a much larger scale. It would be a platform for change, a
		platform founded on youth leadership and the knowledge, passion, and
		adaptability of those leaders, a network for{" "}
		<Text style={{ fontWeight: "bold" }}>
			<Text style={{ fontStyle: "italic" }}>amplifying</Text> ambition
		</Text>{" "}
		and{" "}
		<Text style={{ fontWeight: "bold" }}>
			<Text style={{ fontStyle: "italic" }}>unifying</Text> potential
		</Text>{" "}
		to impact. It would be <Text style={{fontStyle: "italic"}}>Synergy Network International</Text>.
	</Text>
);
