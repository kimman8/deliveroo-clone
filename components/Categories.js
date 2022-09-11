import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`
				*[_type=="category"]
	    `
			)
			.then((data) => {
				setCategories(data);
			});
	}, []);

	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10,
			}}
		>
			{categories?.map((category) => (
				<CategoryCard
					title={category?.name}
					key={category._id}
					imgUrl={urlFor(category.image).width(200).url()}
				/>
			))}
		</ScrollView>
	);
};

export default Categories;
