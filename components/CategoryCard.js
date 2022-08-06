import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'



//  PROPS can be used for anything and re used and pass them through the parameters // basically parameters  
const CategoryCard = ({ imgUrl, title }) => {


  return (

    <TouchableOpacity>

{/* Passing props */}
        <Image
            source={{uri: imgUrl,
            
            }}
            className="h-20 w-20 rounded scroll-px-3"
        />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard