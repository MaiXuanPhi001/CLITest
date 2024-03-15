import { View, Text } from 'react-native'
import React from 'react'
import { G, Line, Text as TextSVG } from 'react-native-svg'
import { Data, StyleChart } from './ColumnChart';

interface Props {
    data: Data[];
    height: number;
    maxValue: number;
    mediumValue: number;
    width: number;
    paddingTop: number;
    paddingLeft: number;
    amountLine?: number;
    styleChart?: StyleChart;
    formatValue?: (value: number) => string;
}

const Specifications = ({
    data,
    height,
    maxValue,
    mediumValue,
    paddingTop,
    width,
    paddingLeft,
    amountLine,
    styleChart,
    formatValue,
}: Props) => {
    const SIZE = amountLine || 5

    return (
        <G>
            {Array.from({ length: SIZE }).map((item, index) => {
                let y = (height / (SIZE - 1)) * index
                const textValue = maxValue - (maxValue / (SIZE - 1)) * index

                return (
                    <G key={`G_Specifications_${index}`}>
                        <Line
                            x1={paddingLeft - 10}
                            y1={y}
                            x2={width + paddingLeft - 10}
                            y2={y}
                            stroke={styleChart?.strokeLine || 'gray'}
                            strokeWidth={styleChart?.strokeWidthLine || 0.5}
                            strokeDasharray={styleChart?.strokeDasharrayLine || '4'}
                        />
                        <TextSVG
                            x={0}
                            fill={styleChart?.textColor || 'black'}
                            y={y}
                            textAnchor={'start'}
                            fontSize={styleChart?.textSize || 9}
                        >
                            {formatValue ? formatValue(textValue) : textValue}
                        </TextSVG>
                    </G>
                )
            })}
        </G>
    )
}

export default Specifications