import { View,ScrollView, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from 'react-currency-formatter'

const BasketScreen = () => {
	const restaurant = useSelector(selectRestaurant);
	const navigation = useNavigation();
	const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
	const dispatch = useDispatch();
	const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

	useEffect(() => {
		const groupedItems = items.reduce((results, item) => {
			(results[item.id] = results[item.id] || []).push(item);
			return results;
		}, {});
		setGroupedItemsInBasket(groupedItems);
	}, [items]);
	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="flex-1 bg-gray-200">
				<View className="p-5 border-b border-[#00CCBB] shadow-xs">
					<View>
						<Text className="text-lg font-bold text-center">Basket</Text>
						<Text className="text-center text-gray-400">
							{restaurant.title}
						</Text>
					</View>
					<TouchableOpacity
						onPress={navigation.goBack}
						className="rounded-full bg-gray-100 absolute top-3 right-5"
					>
						<XCircleIcon color="#00CCBB" height={50} width={50} />
					</TouchableOpacity>
				</View>
                <View className='flex-row items-center space-x-4 px-4 py-3 my-5 bg-white'>
                    <Image className='h-7 w-7 bg-gray-300 rounded-full p-4' source={{
                        uri: "https://links.papareact.com/wru",
                    }}/>
                <Text className='flex-1'>Deliver in 50-75mins</Text>
                <TouchableOpacity>
                    <Text className='text-[#00CCBB]'>
                        Change
                    </Text>
                </TouchableOpacity>
                </View>
                <ScrollView>
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className='flex-row space-x-4 items-center px-4 py-3 bg-white'>
                            <Text className='text-[#00CCBB]'>{items.length} x</Text>
                            <Image source={{
                                uri: urlFor(items[0]?.image).url()
                            }}
                            className='h-12 w-12 rounded-full'
                            />
                            <Text className='flex-1'>{items[0]?.name}</Text>
                            <Text className='text-gray-600'>
                                <Currency quantity={items[0]?.price} currency="AUD"/>
                            </Text>
                            <TouchableOpacity>
                                <Text className='text-[#00CCBB] text-xs' onPress={()=>dispatch(removeFromBasket({id:key}))}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                <View className='p-5 bg-white mt-5 space-y-4'>
                    <View className ='flex-row justify-between'>
                        <Text className='text-gray-500'>Subtotal</Text>
                        <Text className='text-gray-500'>
                        <Currency quantity={basketTotal} currency="AUD"/>
                        </Text>
                    </View>
                    <View className ='flex-row justify-between'>
                        <Text className='text-gray-500'>Delivery Fee</Text>
                        <Text className='text-gray-500'>
                        <Currency quantity={5.99} currency="AUD"/>
                        </Text>
                    </View>
                    <View className ='flex-row justify-between'>
                        <Text className='text-gray-500'>Order Total</Text>
                        <Text className='text-black font-extrabold'>
                        <Currency  quantity={basketTotal+5.99} currency="AUD"/>
                        </Text>
                    </View>
                    <TouchableOpacity className='bg-[#00CCBB] p-5 rounded-lg' onPress={()=>navigation.navigate('PreparingOrderScreen')}>
                            <Text className='text-center text-white font-bold text-lg'>Place Order</Text>
                    </TouchableOpacity>
                </View>
			</View>
		</SafeAreaView>
	);
};

export default BasketScreen;
