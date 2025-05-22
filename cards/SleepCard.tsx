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
import {Route01Icon, Clock01Icon, Fire02Icon, Moon02Icon} from '@hugeicons/core-free-icons';

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = windowWidth - 22;

const dataSleep = [
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
];

function SleepCard() {
    return (
        <View style={{alignItems: 'center', marginBottom: 11}}>
            <View style={{backgroundColor:'#F7F6FF', padding: 12, width: calculatedWidth, height: 180, borderRadius: 12}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#6865FF', padding: 5, width: 26, borderRadius: 7}}>
                        <HugeiconsIcon icon={Moon02Icon} color={'#FFFFFF'} size={16} />
                    </View>
                    <Text style={{fontSize: 15, lineHeight: 20, marginLeft: 10, fontFamily:'Manrope-Medium'}}>Giấc ngủ</Text>
                </View>
                <View
                    style={{ top: -35, alignItems: 'center' }}
                >
                    <Text style={{position: 'absolute', top: 145, left: 1, fontSize: 13, fontFamily:'Manrope-Medium'}}>14 ngày trước</Text>
                    <Text style={{position: 'absolute', top: 145, right: 1, fontSize: 13, fontFamily:'Manrope-Medium'}}>Hôm nay</Text>
                    <VictoryChart
                        height={190}
                        width={452}
                        domainPadding={{ x: 9 }}
                    >
                        <VictoryAxis
                            dependentAxis={false}
                            tickValues={[ 1, 14 ]}
                            tickFormat={(t) => (t === 1 ? ' ' : ' ')} // Đổi nhãn
                            tickLabelComponent={
                                <VictoryLabel

                                />
                            }
                            offsetY={45}
                            style={{
                                tickLabels: {fontSize: 12},
                                axis: {stroke: '#6865FF'},
                            }}
                        />
                        <VictoryBar
                            data={dataSleep}
                            alignment="middle"
                            x = "day"
                            y = "time"
                            barWidth={20}
                            cornerRadius={{topLeft: 3, topRight: 3, bottomLeft: 3, bottomRight: 3}}
                            style={{
                                data: { fill: '#6865FF' },
                            }}
                        />
                    </VictoryChart>
                </View>

            </View>
        </View>
    );
}

export default SleepCard;
