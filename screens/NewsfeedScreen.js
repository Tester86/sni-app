import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AnimatedLoader from "react-native-animated-loader";
import NewWindow from "../frontend-utils/NewWindow";
import { WebView } from "react-native-webview";
import { DeviceEventEmitter } from "react-native";
import { View } from "react-native";

/*
	const event = DeviceEventEmitter.addListener(
			"buttonPressed",
			this.redirectToLink
		);
 */

export default class NewsfeedScreen extends React.Component {
	constructor({ navigation }) {
		super();
		this.state = { data: [] };
	}

	componentDidMount() {
		const response = fetch(
			"https://newsapi.org/v2/everything?q=leadership&apiKey=91532a0e8f5f45a38b367fbae723ebac"
		)
			.then((res) => res.json())
			.then((json) => this.setState({ data: json }))
			.catch((err) => console.log(err));
	}

	render() {
		const articles = this.state.data.articles;
		let buttonIndex = -1;

		while (articles == undefined) {
			return (
				<AnimatedLoader
					visible={true}
					speed={1}
					overlayColor="rgba(255,255,255,0.75)"
					animationStyle={styles.lottie}
				></AnimatedLoader>
			);
		}
		return (
			<ScrollView
				contentContainerStyle={{ alignItems: "center" }}
				style={styles.container}
			>
				{/*console.log(articles[0].title)*/}
				{Object.entries(articles).map(([key, value]) => {
					buttonIndex += 1;
					return (
						<NewWindow value={value} buttonIndex={buttonIndex} />
					);
				})}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
	},
	lottie: {
		width: 100,
		height: 100,
	},
});
