import React from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";

export default function MessageToTheWorld() {
	return <View>{content}</View>;
}

const content = (
	<Text style={Styles.principleText}>
		Together we are stronger. Just as doctors come together and support one
		another to help save lives, we– the youth of the world– will unite to
		protect ourselves. We are one, standing with each other as we develop
		initiatives working against all the odds, defying expectations, and
		surpassing the barriers set up because of our ages. Together we can
		transform ambition into reality and thoughts into change. Our individual
		vitality, passion, and potential can and will change the world on their
		own; however,{" "}
		<Text style={{ fontWeight: "bold" }}>
			we shape the world when united.
		</Text>
	</Text>
);
