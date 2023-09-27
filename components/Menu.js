import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const Menu = ({ title, imageSrc, type, setType, keyVal }) => {
    const handlePress = () => {
        setType(title.toLowerCase());
    }
    return (
        <TouchableOpacity key={keyVal} className="items-center justify-center space-y-2" onPress={handlePress}>
            <View className={`w-24 h-24 p-2 shadow-sm items-center justify-center rounded-full ${type.toLowerCase() === title.toLowerCase() ? `bg-gray-200` : ``}`}>
                <Image
                    className="w-full h-full object-contain"
                    source={imageSrc}
                />
            </View>
            <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default Menu;
