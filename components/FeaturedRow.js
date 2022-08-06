import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'


const FeaturedRow = ({ title, description, id}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>


      {/* Description */}

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        contentContainerStyle={{paddingHorizontal: 15, }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaraunt Cards */}

        <RestaurantCard 
            id={1}
            imgUrl="https://links.papareact.com/gn7"
            title={"YOO, sushi"}
            rating={4.7}
            genre="Japanese"
            address="123 alberqurque New Mexio"
            short_description="Awesome"
            dishes={[]}
            long={20}
            lat={30}
            />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow