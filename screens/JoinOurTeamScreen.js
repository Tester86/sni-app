import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function JoinOurTeamScreen() {
    return <View style={styles.container}>
        <Image source={require("../assets/icon.png")} style={styles.icon}/>
    </View>
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#002557",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 200,
        height: 350,
    }
})