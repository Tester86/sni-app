import React from "react";
import App from "../App";
import firebase from "@react-native-firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCwR_QiuqaFsodOJEKu5l9LmSwAkrUbifY",
	authDomain: "sni-app-971f2.firebaseapp.com",
	databaseURL: "https://sni-app-971f2.firebaseio.com",
	projectId: "sni-app-971f2",
	storageBucket: "sni-app-971f2.appspot.com",
	messagingSenderId: "552650943009",
	appId: "1:552650943009:android:0c54735c7c169c0caf5160",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

function config() {
	console.log("Cool");
	return <App />;
}

export default config;
