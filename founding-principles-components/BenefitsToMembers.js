import React from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";

export default function BenefitsToMembers() {
	return <View>{content}</View>;
}

const content = (
	<Text style={Styles.principleText}>
		As a member of <Text style={{fontStyle: "italic"}}>SNI</Text>, you are a part of a moving force of youth
		leadership. You have a body of the world’s youngest and most incredible
		change-makers standing with you, supporting you with their own
		initiatives, and sharing their immeasurable advice, experience, and
		knowledge with you. They will develop your skills, fostering
		well-founded passion, and lighting a fire of triumph within you. You are
		a part of a network of ambition and progress, a movement that will give
		you a platform to raise and strengthen your voice. Together, you will
		impact; together, you will share success; and together, you will change
		the world.
	</Text>
);
