import { View, Text } from 'react-native'
import React from 'react'
import { Svg } from 'react-native-svg';
import Column from './Column';

interface Data {
  value: number;
  title: string;
  content: string;
  color: string;
}

interface Props {
  data: Data[],
  width: number;
  height: number;
}

const ColumnChart = ({
  data,
  width,
  height,
}: Props) => {
  const PADDING_LEFT = 50
  const PADDING_BOTTOM = 0
  const WIDTH_CHART_COLUMN = width - PADDING_LEFT
  const HEIGH_CHART_COLUMN = height - PADDING_BOTTOM

  const maxValue = Math.max.apply(Math, data.map((item) => item.value))
  const minValue = Math.min.apply(Math, data.map((item) => item.value))
  const mediumValue = maxValue - minValue
  const sectionValue = HEIGH_CHART_COLUMN / mediumValue

  return (
    <View>
      <Svg
        width={width}
        height={height}
        style={{ backgroundColor: 'black' }}
      >
        <Column
          data={data}
          height={HEIGH_CHART_COLUMN}
          width={WIDTH_CHART_COLUMN}
          paddingLeft={PADDING_LEFT}
          minValue={minValue}
          sectionValue={sectionValue}
        />
      </Svg>
    </View>
  )
}

export default ColumnChart