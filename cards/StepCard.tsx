import * as React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {VictoryBar,
    VictoryChart,
    VictoryPie,
    VictoryTheme,
    VictoryAxis,
    VictoryLabel,
    VictoryCandlestick} from 'victory-native';
import {useBluetooth} from '../BluetoothContext.tsx';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {RunningShoesIcon} from '@hugeicons/core-free-icons';

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = windowWidth * 0.87 + 22;

const dayData = [
    {day: 1, time: 6 * 60},
    {day: 2, time: 6 * 60 + 27},
    {day: 3, time: 7 * 60 + 18},
    {day: 4, time: 6 * 60 + 18},
    {day: 5, time: 7 * 60 + 34},
    {day: 6, time: 6 * 60 + 35},
    {day: 7, time: 6 * 60 + 36},
    {day: 8, time: 7 * 60 + 37},
    {day: 9, time: 6 * 60 + 38},
    {day: 10, time: 8 * 60 + 39},
    {day: 11, time: 6 * 60 + 40},
    {day: 12, time: 6 * 60 + 41},
    {day: 13, time: 6 * 60 + 57},
    {day: 14, time: 6 * 60 + 13},
    {day: 15, time: 0},
    {day: 16, time: 0},
    {day: 17, time: 0},
    {day: 18, time: 0},
    {day: 19, time: 0},
    {day: 20, time: 0},
    {day: 21, time: 0},
    {day: 22, time: 0},
    {day: 23, time: 0},
    {day: 24, time: 0},
];

function StepCard() {
    return (
        <View style={{alignItems: 'center', marginBottom: 11}}>
            <View style={{backgroundColor:'#EFF6FF', padding: 12, width: calculatedWidth, height: 180, borderRadius: 12}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#006AFF', padding: 5, width: 26, borderRadius: 7}}>
                        <HugeiconsIcon icon={RunningShoesIcon} color={'#FFFFFF'} size={16} />
                    </View>
                    <Text style={{fontSize: 15, lineHeight: 20, marginLeft: 10, fontFamily: 'Manrope-Medium'}}>Bước đi</Text>
                </View>
                <View
                    style={{ top: -35, alignItems: 'center' }}
                >
                    {/*<Text style={{position: 'absolute', top: 147, left: 1, fontSize: 13, fontFamily:'Manrope-Medium'}}>{range === '1' ? '00:00' : range === '2' ? 'Thứ hai' : '1'}</Text>*/}
                    {/*<Text style={{position: 'absolute', top: 147, right: 1, fontSize: 13, fontFamily:'Manrope-Medium'}}>{range === '1' ? '23:59' : range === '2' ? 'Chủ nhật' : '31'}</Text>*/}
                    <VictoryChart
                        height={190}
                        width={452}
                        domainPadding={{ x: 9 }}
                    >

                        <VictoryAxis
                            dependentAxis={false}
                            // tickValues={tickValues} //day = 24, week = 7, month = daysInMonth(month, year)
                            tickValues={[1, 24]}
                            tickFormat={(t) => (t === 1 ? ' ' : ' ')} // Đổi nhãn
                            tickLabelComponent={
                                <VictoryLabel />
                            }
                            offsetY={45}
                            style={{
                                axis: {stroke: '#006AFF'},
                            }}
                        />
                        <VictoryBar
                            // data={chartData}
                            data={dayData}
                            alignment="middle"
                            x = "day"
                            y = "time"
                            barWidth={10} //day: 10
                            cornerRadius={{topLeft: 3, topRight: 3, bottomLeft: 3, bottomRight: 3}}
                            style={{
                                data: { fill: '#006AFF' },
                            }}
                            animate={{
                                duration: 500,
                            }}
                        />
                    </VictoryChart>
                </View>
            </View>
        </View>
    )
}

export default StepCard;
