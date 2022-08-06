import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10,
			}}
		>
			{/* Category card */}
			<CategoryCard
				title="Grocery"
				imgUrl="https://co-restaurants.roocdn.com/images/9c5609b55f14a205e3ebbd5ca2a8d1c17b835626/shortcut/grocery.png?width=334&height=176&fit=crop&bg-color=007e8a&auto=webp&format=png"
			/>
			<CategoryCard
				title="Pizza"
				imgUrl="https://co-restaurants.roocdn.com/images/9c5609b55f14a205e3ebbd5ca2a8d1c17b835626/shortcut/pizza.png?width=334&height=176&fit=crop&bg-color=00ccbc&auto=webp&format=png"
			/>
			<CategoryCard
				title="Thai"
				imgUrl="https://co-restaurants.roocdn.com/images/9c5609b55f14a205e3ebbd5ca2a8d1c17b835626/shortcut/thai.png?width=334&height=176&fit=crop&bg-color=440063&auto=webp&format=png"
			/>
			<CategoryCard
				title="Thai"
				imgUrl="https://co-restaurants.roocdn.com/images/9c5609b55f14a205e3ebbd5ca2a8d1c17b835626/shortcut/thai.png?width=334&height=176&fit=crop&bg-color=440063&auto=webp&format=png"
			/>
		</ScrollView>
	);
};

export default Categories;
