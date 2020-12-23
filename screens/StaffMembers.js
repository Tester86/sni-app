import React, { useState } from "react";
import {
	View,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Dimensions,
} from "react-native";
import DotStatusBar from "../frontend-utils/DotStatusBar";

/* <Image source={{uri: "direccion de la imagen"} /> para las fotos de los staff members

Ejemplo:

<Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/sni-app-971f2.appspot.com/o/lion.jpg?alt=media&token=228d642a-ca9d-4a0b-95dc-a98ae765908f"}}/>

*/

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
			<DotStatusBar selected={selected} Ndots={3} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
