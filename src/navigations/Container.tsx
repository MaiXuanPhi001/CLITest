import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { screens } from '../constants/screens'
import Tailwind from '../tailwind/Tailwind'
import Home from '../screens/home/Home'
import ColumnChartApp from '../screens/columnChart/ColumnChartApp'

const Stack = createNativeStackNavigator()

const Container: React.FunctionComponent = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screens.HOME} component={Home} />
                <Stack.Screen name={screens.TAILWIND} component={Tailwind} />
                <Stack.Screen name={screens.COLUMN_CHART_APP} component={ColumnChartApp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Container