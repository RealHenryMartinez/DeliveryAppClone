import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon, } from 'react-native-heroicons/outline'


import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
// import { 
//     UserIcon,
//     ChevronDownIcon,
//     SearchIcon,
//     AdjustmentsIcon,
// } from 'react-native-heroicons/outline';

// home screen under folder screens
const HomeScreen = () => {
    // navigation object -> this is a hook that gives access to navigation object
    const navigation = useNavigation();

    // whenever the page loads, do something
    // whatver the variable changes, inside the array, it will re-fire
    useLayoutEffect(() => {
        
        // allows to modify the default items of the expo project
        navigation.setOptions({
            headerShown: false,
        });
    }, []) 

  return (
    // makes sure the text is pushed into a good position of the screen and not all the way above
    // everything is in flex column 
    <SafeAreaView className="bg-white pt-5 ">
      <View>
        {/* HEADER */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
            <Image source={{uri: "https://links.papareact.com/wru",

        
            }} 
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

            {/* Flex-1 makes the view take the whole room of the row */}
            <View className="flex-1">
                {/* LOCATION TEXT FOR HEADER AND ICON */}
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">Current Location
                    <ChevronDownIcon size={20} color="#00CCBB" />
                </Text>


            </View>
            {/* USER ICON */}
            <UserIcon size={35} color="00CCBB" />
        </View>

            {/* SEARCH */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <SearchIcon color="gray" size={20}/>
                    <TextInput placeholder="Restaurants and cuisines" keyboardType='default' />
                </View>

                <AdjustmentsIcon color="00CCBB" size={10} />
            </View>


            {/* BODY  */}

            <ScrollView className="bg-gray-100"
                contentContainerStyle={{paddingBottom: 100,}}
            >
               
                


                {/* Components for Categories */}
                <Categories />

                {/* Featured Rows representing Offers near you and the Featured row */}

                <FeaturedRow
                    title="Featured"
                    description="Paid Placements from our partners"
                    id="1"
                />
                 <FeaturedRow
                    title="Featured"
                    description="Paid Placements from our partners"
                    id="2"
                />
                 <FeaturedRow
                    title="Featured"
                    description="Paid Placements from our partners"
                    id="3"
                />
                 <FeaturedRow
                    title="Featured"
                    description="Paid Placements from our partners"
                    id="4"
                />
                 <FeaturedRow
                    title="Featured"
                    description="Paid Placements from our partners"
                    id="5"
                />
            </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen