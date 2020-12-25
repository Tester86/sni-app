import React, { useState } from "react";
import {
	View,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Dimensions,
} from "react-native";
import DotStatusBar from "../frontend-utils/DotStatusBar";
import StaffMember from "../frontend-utils/StaffMember";

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
			>
				<StaffMember imageLink="https://firebasestorage.googleapis.com/v0/b/sni-app-971f2.appspot.com/o/Vedant.jpeg?alt=media&token=6aadd225-6f35-4967-81be-8d5d4512e1da" role="CEO" biography="Born in the green prados of Australia, he enjooyed of such a freedom none of us have even dreamtn of before" quote="Never give up on your dreams"/>
				<StaffMember />
				<StaffMember />
			</ScrollView>
			<DotStatusBar selected={selected} Ndots={3} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
