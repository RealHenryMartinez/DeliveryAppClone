import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 15,
        }} horizontal showsHorizontalScrollIndicator={false}
    >
        {/* Category Card - reusable component */}

      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing"/>
    </ScrollView>
  )
}

export default Categories