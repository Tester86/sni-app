import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { ExpandableListView } from "react-native-expandable-listview";
import "../founding-principles-components/VisionStatement";
import VisionStatement from "../founding-principles-components/VisionStatement";
import MissionStatement from "../founding-principles-components/MissionStatement";
import OurOrigins from "../founding-principles-components/OurOrigins";
import BenefitsToMembers from "../founding-principles-components/BenefitsToMembers";
import MessageToTheWorld from "../founding-principles-components/MessageToTheWorld";

export default function FoundingPrinciples() {
	const _handleInnerItemClick = ({ innerIndex, item, itemIndex }) => {};
	const _handleItemClick = ({ index }) => {};
	const customLoader = (
		<View>
			<ActivityIndicator />
		</View>
	);
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<ExpandableListView
				customLoader={customLoader}
				animated={false}
				data={CONTENT}
				onInnerItemClick={_handleInnerItemClick}
				onItemClick={_handleItemClick}
				innerItemContainerStyle={{
					padding: 30,
					backgroundColor: "white",
				}}
				itemContainerStyle={{backgroundColor: "white"}}
			/>
		</View>
	);
}

const CONTENT = [
	{
		id: "1", // required, id of item
		categoryName: "Vision Statement", // label of item expandable item
		subCategory: [
			// required, array containing inner objects
			{
				customInnerItem: <VisionStatement />,
			},
		],
	},
	{
		id: "2",
		categoryName: "Mission Statement",
		subCategory: [
			{
				customInnerItem: <MissionStatement />,
			},
		],
	},
	{
		id: "3",
		categoryName: "Our Origins",
		subCategory: [
			{
				customInnerItem: <OurOrigins />,
			},
		],
	},
	{
		id: "4",
		categoryName: "Benefits to Members",
		subCategory: [
			{
				customInnerItem: <BenefitsToMembers />,
			},
		],
	},
	{
		id: "5",
		categoryName: "Our Message to the World",
		subCategory: [
			{
				customInnerItem: <MessageToTheWorld />,
			},
		],
	},
];

const styles = StyleSheet.create({});
