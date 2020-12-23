import React, { useState } from "react";
import { View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DotStatusBar from "./DotStatusBar";

export default function HorizontalScrollView(props) {
	const [selected, setSelected] = useState(0);

	const _handleOnMomentumScrollEnd = (event) => {
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
				pagingEnabled={true}
				scrollEventThrottle={16}
				onMomentumScrollEnd={_handleOnMomentumScrollEnd}
			>
				{props.children}
			</ScrollView>
			<DotStatusBar selected={selected} Ndots={props.Ndots} alternativeColors={props.alternativeColors}/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
