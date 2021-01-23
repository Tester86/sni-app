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
				<StaffMember
					name="Vedant"
					imageLink="https://firebasestorage.googleapis.com/v0/b/sni-app-971f2.appspot.com/o/Vedant.jpeg?alt=media&token=6aadd225-6f35-4967-81be-8d5d4512e1da"
					role="Vice Director of Workshops"
					biography="Vedant is an expert presenter, an experienced sportsperson, a youth action enthusiast, and a student Leader from India"
					quote="Be yourself; everyone else is already taken"
					author="Oscar Wilde"
				/>
				<StaffMember
					name="Moksha Shivaji"
					imageLink="https://firebasestorage.googleapis.com/v0/b/sni-app-971f2.appspot.com/o/moksha.jpg?alt=media&token=efd70ac0-ba2d-4ad4-8628-6057162f2cb0"
					role="Vice Director of Conferences"
					biography="A committed Indian student who aspires to be a lawyer"
					quote="Success is when your signature becomes an autograph"
					author="APJ Abdul Kalam"
				/>
				<StaffMember
					name="Mostafa"
					imageLink="https://firebasestorage.googleapis.com/v0/b/sni-app-971f2.appspot.com/o/Mostafa.jpg?alt=media&token=439d811d-7174-404f-9870-6e6fe859df3a"
					biography="Mostafa is a certified Model UN Director, coach, English debate panellist, and judge, as well as a certified digital marketer and a value-driven leader"
					quote="If you want to achieve something in your life, then take the initiative today, because tomorrow never comes!"
					author=""
				/>
				<StaffMember
					name="Jayasurya Viswanathan"
					imageLink="https://firebasestorage.googleapis.com/v0/b/sni-app-971f2.appspot.com/o/Jayasurya%20Viswanathan.JPG?alt=media&token=e93d08c4-b844-4ab7-8d3d-14b49c0c8d4a"
					biography=""
					quote=""
				/>
				<StaffMember
					name="Alexander Kim"
					imageLink="https://firebasestorage.googleapis.com/v0/b/sni-app-971f2.appspot.com/o/Alexander.jpg?alt=media&token=9d594c25-da54-4407-b799-d74600c1d30e"
					biography=""
					quote=""
					author=""
				/>
			</ScrollView>
			<DotStatusBar selected={selected} Ndots={5} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
