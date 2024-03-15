import { View, Text } from 'react-native'
import React from 'react'
import { G, Svg } from 'react-native-svg';
import Column from './Column';
import Specifications from './Specifications';

export interface StyleChart {
  paddingLeft?: number,
  paddingBottom?: number,
  paddingTop?: number;
  textColor?: string;
  textSize?: number;
  strokeLine?: string;
  strokeWidthLine?: number;
  backgroundColor?: string;
  strokeDasharrayLine?: string;
  marginLeft?: number;
}

export interface Data {
  value: number;
  title: string;
  content: string;
  color: string;
}

interface Props {
  data: Data[],
  width: number;
  height: number;
  styleChart?: StyleChart;
  amountLine?: number;
  formatValue?: (value: number) => string;
}

const ColumnChart = ({
  data,
  width,
  height,
  styleChart,
  amountLine,
  formatValue,
}: Props) => {
  const PADDING_LEFT = styleChart?.paddingLeft || 50
  const PADDING_BOTTOM = styleChart?.paddingBottom || 20
  const PADDING_TOP = styleChart?.paddingTop || 10
  const WIDTH_CHART_COLUMN = width - PADDING_LEFT
  const HEIGH_CHART_COLUMN = height - PADDING_BOTTOM

  const maxValue = Math.max.apply(Math, data.map((item) => item.value))
  const minValue = 0
  const mediumValue = maxValue - minValue
  const sectionValue = HEIGH_CHART_COLUMN / mediumValue

  return (
    <View>
      <Svg
        width={width}
        height={height}
        style={{
          backgroundColor: styleChart?.backgroundColor || 'none',
          marginLeft: styleChart?.marginLeft || 0,
        }}
      >
        <G y={PADDING_TOP}>
          <Specifications
            data={data}
            height={HEIGH_CHART_COLUMN}
            maxValue={maxValue}
            mediumValue={mediumValue}
            paddingTop={PADDING_TOP}
            width={WIDTH_CHART_COLUMN}
            paddingLeft={PADDING_LEFT}
            formatValue={formatValue}
            amountLine={amountLine}
            styleChart={styleChart}
          />
          <Column
            data={data}
            height={HEIGH_CHART_COLUMN}
            width={WIDTH_CHART_COLUMN}
            paddingLeft={PADDING_LEFT}
            minValue={minValue}
            paddingTop={PADDING_TOP}
            sectionValue={sectionValue}
          />
        </G>
      </Svg>
    </View>
  )
}

export default ColumnChart