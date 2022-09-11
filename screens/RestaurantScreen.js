import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { urlFor } from "../sanity";
import {
	ArrowLeftIcon,
	ChevronRightIcon,
	LocationMarkerIcon,
	StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import { setRestaurant } from "../features/restaurantSlice";
import BasketIcon from "../components/BasketIcon";

const RestaurantScreen = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const {
		params: {
			id,
			imgUrl,
			title,
			rating,
			genre,
			address,
			short_description,
			dishes,
			long,
			lat,
		},
	} = useRoute();
	useEffect(() => {
		dispatch(
			setRestaurant({
				id,
				imgUrl,
				title,
				rating,
				genre,
				address,
				short_description,
				dishes,
				long,
				lat,
			})
		);
	}, [dispatch]);
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	return (
		<>
			<BasketIcon />
			<ScrollView>
				<View className="relative">
					<Image
						source={{
							uri: urlFor(imgUrl).url(),
						}}
						className="w-full h-56 bg-gray-300 p-4"
					/>
					<TouchableOpacity
						className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
						onPress={navigation.goBack}
					>
						<ArrowLeftIcon size={20} color={"#00CCBB"} />
					</TouchableOpacity>
				</View>
				<View className="bg-white">
					<View className="px-4 pt-4">
						<Text className="font-bold text-3xl">{title}</Text>
						<View className="flex-row space-x-2 my-1">
							<View className="flex-row items-center space-x-1">
								<StarIcon size={22} color="green" opacity={0.5} />
								<Text className="text-gray-500 text-xs">
									<Text className="text-green-500">{rating}</Text> · {genre}
								</Text>
							</View>
							<View className="flex-row items-center space-x-1">
								<LocationMarkerIcon size={22} color="gray" opacity={0.4} />
								<Text className="text-gray-500 text-xs">
									Nearby · {address}
								</Text>
							</View>
						</View>
						<Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
					</View>
					<TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
						<QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
						<Text className="font-bold pl-2 text-md flex-1">
							Have a food allergy?
						</Text>
						<ChevronRightIcon color="#00CCBB" opacity={0.6} size={20} />
					</TouchableOpacity>
					<View className="pb-36">
						<Text className="text-xl font-bold px-4 pt-6 mb-3">Menu</Text>
						{/* Dishrows */}
						{dishes.map((dish) => (
							<DishRow
								key={dish._id}
								id={dish._id}
								name={dish.name}
								description={dish.short_description}
								price={dish.price}
								image={dish.image}
							/>
						))}
					</View>
				</View>
			</ScrollView>
		</>
	);
};

export default RestaurantScreen;
