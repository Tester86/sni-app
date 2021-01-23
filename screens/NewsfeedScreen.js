import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NewWindow from "../frontend-utils/NewWindow";

/*
	1. Get full html code of the pages
	2. Use Jssoup to get a list of the images and related news (create a dict)
	3. Use uri prop to get the image
	4. Somehow get the text of the news
 */

export default class NewsfeedScreen extends React.Component {
	constructor() {
		super();
		this.state = { data: [] };
		this.sources = [
			"https://www.entrepreneur.com/topic/leadership",
			"https://www.forbes.com/leadership/?sh=3d4defd1d66d",
			"https://www.cnbc.com/leadership/",
			"https://www.bbc.com/worklife/tags/leadership",
		];
	}

	componentDidMount() {
		const response = fetch(
			"https://newsapi.org/v2/everything?q=leadership&apiKey=91532a0e8f5f45a38b367fbae723ebac"
		)
			.then((res) => res.json())
			.then((json) => this.setState({ data: json }))
			.catch((err) => console.log(err));

		/*.then((res) => res.json())
			.then((json) => this.setState({ data: json }))
			.catch((err) => console.error(err))
			.finally(() => console.log("1" + typeof(this.state.data.articles)));*/
	}
	render() {
		const articles = this.state.data.articles;
		while (articles === undefined) {
			return <></>;
		}
		return (
			<ScrollView
				contentContainerStyle={{ alignItems: "center" }}
				style={styles.container}
			>
				{console.log(articles[0].title)}
				{Object.entries(articles).map(([key, value]) => {
					return <Text>Hello</Text>
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
});
