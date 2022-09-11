import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
const BasketIcon = ({
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
}) => {
	const items = useSelector(selectBasketItems);
	const navigation = useNavigation();
	const basketTotal = useSelector(selectBasketTotal);
	if (items.length === 0) return null;
	return (
		<View className="absolute bottom-10 w-full z-50">
			<TouchableOpacity
				className="mx-5 p-4 flex-row items-center space-x-1 bg-[#00CCBB] rounded-lg"
				onPress={() => {
					navigation.navigate("Basket", {
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
					});
				}}
			>
				<Text className="text-white font-extrabold text-lg bg-[#01A296] px-2 py-1">
					{items.length}
				</Text>
				<Text className="flex-1 text-center text-white font-extrabold text-lg">
					View Basket
				</Text>
				<Text className="text-lg text-white font-extrabold">
					<Currency quantity={basketTotal} currency="AUD" />
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BasketIcon;
