import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XIcon } from "react-native-heroicons/solid";
const DeliveryScreen = () => {
	const navigation = useNavigation();
	const restaurant = useSelector(selectRestaurant);

	return (
		<View className="bg-[#00CCBB] flex-1">
			<SafeAreaView className="z-50">
				<View className="flex-row justify-between p-4 items-center">
					<TouchableOpacity onPress={() => navigation.navigate("Home")}>
						<XIcon color="white" size={30} />
					</TouchableOpacity>
					<Text className="text-white text-lg font-light">Order Help</Text>
				</View>
				<View className=" bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
					<View className="flex-row justify-between">
						<View>
							<Text className="text-gray-400 text-lg">Esimated Arrival</Text>
							<Text className="text-4xl font-bold">45-55 Minutes</Text>
						</View>
						<Image
							source={{
								uri: "https://links.papareact.com/fls",
							}}
							className="h-20 w-20"
						/>
					</View>
					<Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
					<Text className="text-gray-400 mt-3">
						Your Order at {restaurant.title} is being Prepared
					</Text>
				</View>
			</SafeAreaView>
			<MapView
				className="flex-1 -mt-10 z-0"
				mapType="mutedStandard"
				initialRegion={{
					latitude: restaurant.lat,
					longitude: restaurant.long,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				}}
			>
				<Marker
					coordinate={{
						latitude: restaurant.lat,
						longitude: restaurant.long,
					}}
					title={restaurant.title}
					description={restaurant.short_description}
					identifier="origin"
					pinColor="#00CCBB"
				/>
			</MapView>
			<SafeAreaView className="flex-row items-center h-28 space-x-4 bg-white">
				<Image
					className="h-12 w-12 bg-gray-300 rounded-full ml-5"
					source={{ uri: "https://links.papareact.com/wru" }}
				/>
				<View className="flex-1">
					<Text className="text-black text-lg font-bold">Kim Yuen</Text>
					<Text className="text-gray-500">Your Rider</Text>
				</View>
				<Text className="text-lg mr-5 text-[#00CCBB] font-bold">Call</Text>
			</SafeAreaView>
		</View>
	);
};

export default DeliveryScreen;
