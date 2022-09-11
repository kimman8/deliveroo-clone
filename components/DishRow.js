import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
	selectBasketItems,
	removeFromBasket,
	addToBasket,
	selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, image, price }) => {
	const [isPressed, setIsPressed] = useState(false);
	const items = useSelector((state) => selectBasketItemsWithId(state, id));
	const dispatch = useDispatch();
	const addItemToBasket = () => {
		dispatch(addToBasket({ id, name, description, price, image }));
	};

	return (
		<>
			<TouchableOpacity
				className={`bg-white border ${
					isPressed && "border-b-0"
				} border-gray-200 p-4`}
				onPress={() => setIsPressed(!isPressed)}
			>
				<View className="flex-row ">
					<View className="flex-1 pr-2">
						<Text className="text-lg mb-1">{name}</Text>
						<Text className="text-gray-400">{description}</Text>
						<Text className="text-gray-400 mt-2">
							<Currency quantity={price} currency="AUD" />
						</Text>
					</View>
					<View>
						<Image
							style={{
								borderWidth: 1,
								borderColor: "#F3F3F4",
							}}
							source={{ uri: urlFor(image).url() }}
							className="h-20 w-20 bg-gray-300 p-4"
						/>
					</View>
				</View>
			</TouchableOpacity>
			{isPressed && (
				<View className="bg-white px-4">
					<View className="flex-row items-center space-x-2 pb-3">
						<TouchableOpacity onPress={removeFromBasket}>
							<MinusCircleIcon color="#00CCBB" size={40} />
						</TouchableOpacity>
						<View>
							<Text>{items.length}</Text>
						</View>
						<TouchableOpacity onPress={addItemToBasket}>
							<PlusCircleIcon color="#00CCBB" size={40} />
						</TouchableOpacity>
					</View>
				</View>
			)}
		</>
	);
};

export default DishRow;
