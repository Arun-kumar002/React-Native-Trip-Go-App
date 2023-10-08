import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar, Hotels, Restaurants, Attractions, NotFound } from '../assets';
import { global } from '../global';
import Menu from '../components/Menu';
import { FontAwesome } from '@expo/vector-icons';
import Card from '../components/Card';
import { getPlaces } from '../api';
import { dataEx } from './datas';
import { AntDesign } from '@expo/vector-icons';
const Discover = () => {
    const navigate = useNavigation();
    const [place, setPlace] = useState({
        placeName: "",
        latitude: 0,
        longitude: 0
    })

    const [type, setType] = useState("restaurants")
    const [isLoading, setIsLoading] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        if (place.placeName.length > 3) {
            async function getPlaceCoordinate() {
                try {
                    let places = await fetch(`${global.mapUrl}/${place.placeName}.json?access_token=${global.token}`);
                    let payload = await places.json();
                    if (payload.features && Array.isArray(payload.features) && payload.features.length > 0) {
                        const features = payload?.features[0];
                        const longitude = features?.geometry?.coordinates[0];
                        const latitude = features?.geometry?.coordinates[1];
                        let obj = { longitude, latitude, placeName: "" }
                        setPlace({ ...place, ...obj });
                    }
                } catch (error) {
                    console.log(error.message);
                }
            }
            getPlaceCoordinate()
        }
    }, [isClicked])

    useLayoutEffect(() => {
        navigate.setOptions({ headerShown: false });
    }, []);

    useEffect(() => {
        if (place.latitude > 0 && place.longitude > 0 && !isLoading) {
            setIsLoading(true);
            getPlaces({ ...place, type }).then((data) => { setData(data); setIsLoading(false); });
        }
    }, [place.latitude, place.longitude, type])
    return (
        <SafeAreaView className="flex-1 bg-white relative mt-7">
            <View className="flex-row items-center justify-between px-8">
                <View className="">
                    <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
                    <Text className="text-[#527283] text-[36px]">the beauty today</Text>
                </View>
                <View className="w-12 h-12 bg-slate-400 rounded-md items-center justify-center">
                    <Image
                        source={Avatar}
                        className="w-full h-full rounded-md object-cover"
                    />
                </View>
            </View>
            <View className="w-full h-20 bg-red  rounded-xl  px-4 shadow-lg  mt-5  justify-center">
                <TextInput
                    placeholder='Search'
                    className="border-b-2 border-gray-300 pb-1 width-full h-[65%] rounded-sm"
                    onChangeText={(val) => setPlace({ ...place, placeName: val })}
                    value={place.placeName}
                />
                <View className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-500 to-red-500 shadow-md">
                </View>
                <TouchableOpacity className="absolute right-5" onPress={() => { setIsClicked(!isClicked) }} >
                    <AntDesign name="search1" size={24} color="#0B646B" />
                </TouchableOpacity>
            </View>
            {/* menu container */}
            {
                isLoading ? <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size={"large"} color={"#0B646B"} />
                </View> : <ScrollView>
                    <View className="flex-row items-center justify-between px-8 mt-8">
                        <Menu
                            keyVal="hotels"
                            title="Hotels"
                            imageSrc={Hotels}
                            type={type}
                            setType={setType}
                        />

                        <Menu
                            keyVal="attractions"
                            title="Attractions"
                            imageSrc={Attractions}
                            type={type}
                            setType={setType}
                        />

                        <Menu
                            keyVal="restaurants"
                            title="Restaurants"
                            imageSrc={Restaurants}
                            type={type}
                            setType={setType}
                        />


                    </View>

                    <View>
                        <View className="flex-row items-center justify-between px-4 mt-8">
                            <Text className="text-[#2C7379] text-[28px] font-bold" >Top Trips</Text>
                            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                                <Text className="text-[#A0C4C7] text-[19px] font-bold">Explore</Text>
                                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
                            </TouchableOpacity>
                        </View>
                        <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                            {
                                data.length > 0 ?
                                    <>
                                        {
                                            data?.map((val, index) => {
                                                if (val?.photo?.images?.medium?.url) {
                                                    return (<Card keyVal={index} imageSrc={val?.photo?.images?.medium?.url} location={val?.location_string || false} title={val?.name || false} data={val} key={index} />)
                                                }
                                            })
                                        }

                                    </> : <>
                                        <View className="w-full h-[400px] items-center space-y-8 justify-center">
                                            <Image
                                                source={NotFound}
                                                className="w-32 h-32 object-cover"
                                            />
                                            <Text className="text-[#2C7379] text-[28px] font-bold" >OOPS!.. No Data Found </Text>

                                        </View>
                                    </>
                            }

                        </View>
                    </View>
                </ScrollView>
            }


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Discover;
