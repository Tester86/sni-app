import React, { useState } from "react";
import {
	View,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Dimensions,
} from "react-native";
import DotStatusBar from "../frontend-utils/DotStatusBar";

export default function StaffMembers() {
	const [selected, setSelected] = useState(0);
	const _handleScroll = (event) => {
		const PAGE_WIDTH = Dimensions.get("window").width;
		const index = Math.round(
			event.nativeEvent.contentOffset.x / PAGE_WIDTH
		);
		setSelected(index);
	};
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView
				style={{ flex: 1 }}
				horizontal={true}
				scrollEventThrottle={16}
				pagingEnabled={true}
				onMomentumScrollEnd={_handleScroll}
			></ScrollView>
			<DotStatusBar selected={selected} Ndots={3}/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
