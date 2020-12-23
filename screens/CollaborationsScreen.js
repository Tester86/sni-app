import React from "react";
import HorizontalScrollView from "../frontend-utils/HorizontalScrollView";
import ClimateCardinals from "../collaborations-components/ClimateCardinals";
import YudLeads from "../collaborations-components/YudLeads";

export default function CollaborationsScreen() {
	return (
		<HorizontalScrollView Ndots={2} alternativeColors={["yellow", "gray"]}>
			<ClimateCardinals />
            <YudLeads />
		</HorizontalScrollView>
	);
}
