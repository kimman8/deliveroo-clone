import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
	return (
		<View>
			<View className="mt-4 flex-row items-center justify-between px-4">
				<Text className="font-bold text-lg">{title}</Text>
				<ArrowRightIcon color="#00CCBB" />
			</View>
			<Text className="text-xs text-gray-500 px-4">{description}</Text>
			<ScrollView
				horizontal
				contentContainerStyle={{
					paddingHorizontal: 15,
				}}
				showsHorizontalScrollIndicator={false}
				className="pt-4"
			>
				{/* Restaurant cards */}
				<RestaurantCard
					id={123}
					imgUrl="https://rs-menus-api.roocdn.com/images/128a8188-ab94-44b6-90c7-57a9dddc9744/image.jpeg?width=524&height=294&auto=webp&format=jpg&fit=crop&v="
					title="McDonald's Nunawading"
					rating={4.5}
					genre="Fast Food"
					address="123 Main St"
					short_description="This is a short description"
					dishes={[1]}
					long={20}
					lat={0}
				/>
				<RestaurantCard
					id={123}
					imgUrl="https://rs-menus-api.roocdn.com/images/128a8188-ab94-44b6-90c7-57a9dddc9744/image.jpeg?width=524&height=294&auto=webp&format=jpg&fit=crop&v="
					title="McDonald's Nunawading"
					rating={4.5}
					genre="Fast Food"
					address="123 Main St"
					short_description="This is a short description"
					dishes={[1]}
					long={20}
					lat={0}
				/>
				<RestaurantCard
					id={123}
					imgUrl="https://rs-menus-api.roocdn.com/images/128a8188-ab94-44b6-90c7-57a9dddc9744/image.jpeg?width=524&height=294&auto=webp&format=jpg&fit=crop&v="
					title="McDonald's Nunawading"
					rating={4.5}
					genre="Fast Food"
					address="123 Main St"
					short_description="This is a short description"
					dishes={[1]}
					long={20}
					lat={0}
				/>
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
