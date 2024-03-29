import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { global } from '../global';
import { FontAwesome5, FontAwesome, MaterialIcons } from '@expo/vector-icons';
const Item = ({ route = {} }) => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, []);
    const data = route?.params.param
    // console.log(data?.photo?.images?.large?.url, data?.open_now_text, data?.price_level, data?.price, data?.name, data?.location_string, data?.rating, data?.price_level, data?.price_level, data?.bearing, data?.description, data?.cuisine, data?.phone, data?.address)
    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <ScrollView className="flex-1 px-4 py-6">
                <View className="relative bg-white shadow-lg">
                    <Image
                        className="w-full h-72 object-cover rounded-2xl"
                        source={{ uri: data?.photo?.images?.large?.url || global.nullImage }}
                    />
                    <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                        <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-white" onPress={() => navigation.navigate("Discover")}>
                            <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
                        </TouchableOpacity>

                        <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                            <FontAwesome5 name="heartbeat" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6 gap-2">
                        <View className="flex-row space-x-2 items-center mr-3">
                            {
                                data?.price_level ? (<Text className="text-[12px] font-bold text-[#2C7379]">{data?.price_level || ""}</Text>) : <></>
                            }

                            {
                                data?.price ? (<Text className="text-[25px] font-bold text-[#2C7379]">{data?.price || ""}</Text>) : <></>
                            }

                        </View>
                        <View className="px-2 py-1 rounded-md bg-teal-100">
                            {data?.open_now_text ? <Text >{data?.open_now_text}</Text> : <></>}
                        </View>
                    </View>

                </View>

                <View className="mt-6">
                    {
                        data?.name ? <Text className="text-[#428288] text-[24px] font-bold">{data?.name}</Text> : <></>
                    }

                    <View className="flex-row items-center space-x-2 mt-2">
                        <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
                        {
                            data?.location_string ? (
                                <Text className="text-[#428288] text-[20px] font-bold">{data?.location_string}</Text>
                            ) : <></>
                        }

                    </View>
                </View>

                <View className="mt-4 flex-row items-center justify-between">
                    {
                        data?.rating ? (
                            <View className="flex-row items-center space-x-2">
                                <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                                    <FontAwesome name="star" size={24} color="#D58574" />
                                </View>
                                <View>
                                    <Text className="text-[#515151]">{data?.rating}</Text>
                                    <Text className="text-[#515151]">Ratings</Text>
                                </View>
                            </View>
                        ) : <></>
                    }

                    {
                        data?.price_level ? (
                            <View className="flex-row items-center space-x-2">
                                <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                                    <MaterialIcons name="attach-money" size={24} color="#D58574" />
                                </View>
                                <View>
                                    <Text className="text-[#515151]">{data?.price_level}</Text>
                                    <Text className="text-[#515151]">Price_Level</Text>
                                </View>
                            </View>
                        ) : <></>
                    }

                    {
                        data?.bearing ? (
                            <View className="flex-row items-center space-x-2">
                                <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                                    <FontAwesome5 name="map-signs" size={24} color="#D58574" />
                                </View>
                                <View>
                                    <Text className="text-[#515151]">{data?.bearing}</Text>
                                    <Text className="text-[#515151]">Bearing</Text>
                                </View>
                            </View>
                        ) : <></>
                    }


                </View>
                {
                    data?.description ? (
                        <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">{data?.description}</Text>
                    ) : <></>
                }

                {
                    data?.cuisine ? Array.isArray(data?.cuisine) && (
                        <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
                            {
                                data?.cuisine?.map((e, i) => {
                                    return <TouchableOpacity key={i} className="px-2 py-1 rounded-md bg-emerald-100">
                                        {
                                            e?.name && <Text className="">{e?.name}</Text>
                                        }

                                    </TouchableOpacity>
                                })
                            }
                        </View>
                    ) : <></>
                }

                <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
                    {
                        data?.phone ? (
                            <View className="items-center flex-row space-x-6">
                                <FontAwesome name="phone" size={24} color="#428288" />
                                <Text className="text-lg">{data?.phone}</Text>
                            </View>
                        ) : <></>
                    }

                    {
                        data?.email ? (
                            // <View className="items-center flex-row space-x-6">
                            <>
                                <FontAwesome name="envelope" size={24} color="#428288" />
                                <Text className="text-lg">{data?.email}</Text>

                            </>
                            // </View>
                        ) : <></>
                    }

                    {
                        data?.address ? (
                            <View className="items-center flex-row space-x-6">
                                <FontAwesome name="map-pin" size={24} color="#428288" />
                                <Text className="text-lg">{data?.address}</Text>
                            </View>
                        ) : <></>
                    }

                    <TouchableOpacity className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12" onPress={() => {

                        Alert.alert(
                            "OOPS...!",
                            "Development Goes On....Bro Ok Wa",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ],
                            { cancelable: false }
                        );
                    }}>
                        <Text className="text-2xl font-semibold uppercase tracking-wider text-gray-100">
                            Book Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Item

