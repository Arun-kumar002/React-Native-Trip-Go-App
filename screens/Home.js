import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';
import * as Animatable from 'react-native-animatable';
const Home = () => {
    const navigate = useNavigation();

    useLayoutEffect(() => {
        navigate.setOptions({
            headerShown: false
        })
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            {/* Top First Section */}
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center ">
                    <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
            </View>
            {/* Second Content Section */}
            <View className="px-6 mt-8 space-y-3">
                <Text className="text-[#3c6072] text-[42px]">Enjoy the trip with</Text>
                <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moments</Text>
                <Text className="text-[#3C6072] text-base">
                    Man cannot discover new oceans unless he has the courage to lose sight of the shore.
                </Text>
            </View>
            {/* Circle Section */}
            <View className="w-[370px] h-[370px] bg-[#00BCC9] rounded-full absolute bottom-[10px] -right-40"></View>
            <View className="w-[370px] h-[370px] bg-[#E99265] rounded-full absolute -bottom-[95px] -left-36"></View>
            {/* Image Section */}
            <View className="flex-1 relative items-center justify-center -bottom-[15px]">
                <Animatable.Image
                    animation="fadeIn"
                    easing={"ease-in-out"}
                    source={HeroImage}
                    className="w-full h-full rounded-full"
                />
                <TouchableOpacity className="absolute bottom-20 w-25 h-25 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full" onPress={()=>{navigate.navigate("Discover")}}>
                    <Animatable.View animation={"pulse"} easing={"ease-in-out"} iterationCount={"infinite"} className="w-[90px] h-[90px] items-center justify-center rounded-full bg-[#00BCC9] ml-0.5 mt-1 mr-0.5">
                        <Text className="text-gray-50 text-[25px] font-semibold">Go</Text>
                    </Animatable.View>

                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default Home