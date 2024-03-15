import { View, Text } from 'react-native'
import React from 'react'
import { G, Line, Rect } from 'react-native-svg';
import { Data } from './ColumnChart';

interface Props {
    data: Data[];
    width: number;
    height: number;
    paddingLeft: number;
    minValue: number;
    sectionValue: number;
    paddingTop: number;
}

const Column = ({
    data,
    width,
    height,
    paddingLeft,
    minValue,
    paddingTop,
    sectionValue,
}: Props) => {
    const HEIGH_COLUMN_ITEM = 20
    const WIDTH_COLUMN_ITEM = width / data.length / 1.5

    return (
        <G>
            {data.map((item, index) => {
                let x = (width / data.length) * index + paddingLeft
                let y = height - ((item.value - 0) * sectionValue)

                return (
                    <Rect
                        key={`L_x_line_${index}`}
                        x={x}
                        y={y}
                        height={height - y}
                        width={WIDTH_COLUMN_ITEM}
                        fill={item.color}
                    />
                )
            })}
        </G>
    )
}

export default Column