import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { screens } from '../constants/screens'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation: any = useNavigation()

    const data = [
        { id: 0, name: 'Tailwind', screen: screens.TAILWIND }
    ]
    return (
        <View className="bg-red-300">
            {data.map((item) =>
                <TouchableOpacity
                    key={item.id}
                    style={{
                        backgroundColor: '#4285F4',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        marginVertical: 10,
                    }}
                    onPress={() => navigation.navigate(item.screen)}
                >
                    <Text style={{ color: 'white' }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default Home