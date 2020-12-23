import React from "react";
import ScrollableScreen from "../frontend-utils/ScrollableScreen";
import HorizontalScrollView from "../frontend-utils/HorizontalScrollView";

/* ORDER OF ABOUT US SCREENS:

1. STAFF
2. FOUNDING PRINCIPLES
3. 

*/

export default function AboutUsScreen({ navigation }) {

	return (
		<>
				<HorizontalScrollView Ndots={2}>
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
				</HorizontalScrollView>
		</>
	);
}
