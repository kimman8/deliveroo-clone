import {
	ScrollView,
	TextInput,
	View,
	Text,
	SafeAreaView,
	Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	UserIcon,
	ChevronDownIcon,
	SearchIcon,
	AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	return (
		<SafeAreaView className="bg-white pt-5">
			{/* header */}
			<View className="flex-row pb-3 items-center mx-4 space-x-2">
				<Image
					source={{
						uri: "https://links.papareact.com/wru",
					}}
					className="h-7 w-7 bg-gray-300 p-4 rounded-full"
				/>
				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
					<Text className="font-bold text-xl">
						Current Location
						<ChevronDownIcon size={20} color="#00CCBB" />
					</Text>
				</View>
				<UserIcon size={35} color="#00CCBB" />
			</View>
			{/* Search */}
			<View className="flex-row items-center space-x-2 pb-2 mx-4">
				<View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 ">
					<SearchIcon color="gray" size={20} />
					<TextInput
						placeholder="Restaurants and Cuisines"
						keyboardType="default"
					/>
				</View>
				<AdjustmentsIcon color="#00CCBB" />
			</View>
			{/* body */}
			<ScrollView
				className="bg-gray-100"
				contentContainerStyle={{ paddingBottom: 100 }}
			>
				{/* categories */}
				<Categories />
				{/* featured rows */}
				<FeaturedRow
					title="Top picks in your neighbourhood"
					id="1"
					description="Paid placements from our partners"
				/>
				<FeaturedRow
					title="Offers near you"
					id="2"
					description="Why not support your local restaurant tonight"
				/>
				<FeaturedRow
					title="Delivery starting from $0"
					id="3"
					description="Everyone's been enjoying these juicy discounts"
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
