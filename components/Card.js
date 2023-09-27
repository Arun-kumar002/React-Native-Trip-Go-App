import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Card = ({ keyVal, imageSrc, location, title, data }) => {
    const navigation = useNavigation()
    // console.log(keyVal)
    return (
        <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2  shadow-md bg-white w-[170px] my-2" key={keyVal + 1}
            onPress={() => navigation.navigate('Item', { param: data })}
        >
            <Image
                source={{ uri: imageSrc }}
                className="w-full h-40 rounded-md "
            />

            {
                title ? <Text>{title?.length > 14 ? `${title.slice(0, 14)}..` : title}</Text>
                    : <></>
            }

            {
                location ?
                    <View className="flex-row items-center space-x-1">
                        <FontAwesome name="map-marker" size={19} color="#8597A2" />
                        <Text className="text-[#428288] text-[14px] font-bold">{location?.length > 18 ? `${location.slice(0, 18)}..` : location}</Text>
                    </View>
                    : <></>
            }
        </TouchableOpacity>
    )
}

export default Card