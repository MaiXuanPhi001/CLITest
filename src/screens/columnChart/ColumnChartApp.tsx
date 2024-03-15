import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import ColumnChart from './ColumnChart'

const ColumnChartApp = () => {
  const { width } = Dimensions.get('screen')

  const data = [
    { value: 16000, title: 'Marketing', content: '10 viec lam', color: 'white' },
    { value: 8575, title: 'Marketing', content: '15 viec lam', color: 'blue' },
    { value: 5690, title: 'Marketing', content: '20 viec lam', color: 'green' },
    { value: 5321, title: 'Marketing', content: '20 viec lam', color: 'red' },
  ]

  return (
    <View style={{marginTop: 20}}>
      <ColumnChart
        data={data}
        width={width - 50}
        height={200}
      />
    </View>
  )
}

export default ColumnChartApp