import React from "react";
import { useState } from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	StatusBar,
	SafeAreaView,
	Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DotStatusBar from "../frontend-utils/DotStatusBar";
import ScrollableScreen from "../frontend-utils/ScrollableScreen";
import StaffMembers from "./StaffMembers";

/* ORDER OF ABOUT US SCREENS:

1. STAFF
2. FOUNDING PRINCIPLES
3. 

*/

export default function AboutUsScreen({ navigation }) {
	const [selected, setSelected] = useState(0);

	const _handleScroll = (event) => {
		const PAGE_WIDTH = Dimensions.get("window").width;
		const index = Math.round(
			event.nativeEvent.contentOffset.x / PAGE_WIDTH
		);
		setSelected(index);
	};

	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView
					style={{ flex: 1 }}
					horizontal={true}
					scrollEventThrottle={16}
					pagingEnabled={true}
					onMomentumScrollEnd={_handleScroll}
				>
					<ScrollableScreen
						quote="Coming together is a beginning. Keeping together is progress. Working together is success"
						author="Henry Ford"
						bgColor="#CC2851"
						buttonText="Meet our team"
						onPress={() => navigation.navigate("Staff Members")}
					/>
					<ScrollableScreen
						quote="A building is only as strong as its foundation"
						author="Ibiyemi Afekhide"
						bgColor="#0b61ad"
						buttonText="Founding Principles"
						onPress={() =>
							navigation.navigate("Founding Principles")
						}
					/>
				</ScrollView>
				<DotStatusBar selected={selected} Ndots={2}/>
			</SafeAreaView>
		</>
	);
}
