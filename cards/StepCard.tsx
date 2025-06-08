import * as React from 'react';
import {Dimensions, Pressable, Text, View} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = windowWidth - 22;

const dayData = [
    {day: 1, time: 12},
    {day: 2, time: 0},
    {day: 3, time: 0},
    {day: 4, time: 0},
    {day: 5, time: 0},
    {day: 6, time: 0},
    {day: 7, time: 0},
    {day: 8, time: 16},
    {day: 9, time: 24},
    {day: 10, time: 0},
    {day: 11, time: 0},
    {day: 12, time: 0},
    {day: 13, time: 52},
    {day: 14, time: 58},
    {day: 15, time: 12},
    {day: 16, time: 15},
    {day: 17, time: 3},
    {day: 18, time: 0},
    {day: 19, time: 0},
    {day: 20, time: 0},
    {day: 21, time: 0},
    {day: 22, time: 0},
    {day: 23, time: 0},
    {day: 24, time: 0},
];

const subscribeStepsPerHour = (setData: (data: any[]) => void) => {
    const stepsRef = firestore().collection('users').doc('0001').collection('steps');

    const unsubscribe = stepsRef.onSnapshot((snapshot) => {
        const hourBuckets = Array(24).fill(0);
        const now = new Date();

        const localYear = now.getFullYear();
        const localMonth = now.getMonth();
        const localDate = now.getDate();

        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.timestamp && data.count) {
                const date = new Date(data.timestamp);
                if (
                    date.getFullYear() === localYear &&
                    date.getMonth() === localMonth &&
                    date.getDate() === localDate
                ) {
                    const hour = date.getHours();
                    hourBuckets[hour] += data.count;
                }
            }
        });

        const result = hourBuckets.map((count, i) => ({
            day: i + 1,
            time: count,
        }));

        setData(result);
    });

    return unsubscribe;
};

function StepCard() {
    const navigation = useNavigation<any>();
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const unsubscribe = subscribeStepsPerHour(setChartData);
        return () => unsubscribe(); // cleanup listener
    }, []);

    return (
        <Pressable style={{alignItems: 'center', marginBottom: 11}} onPress={() => {navigation.navigate('StepPage');}}>
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
                    <Text style={{position: 'absolute', top: 147, left: 1, fontSize: 13, fontFamily:'Manrope-Medium'}}>00:00</Text>
                    <Text style={{position: 'absolute', top: 147, right: 1, fontSize: 13, fontFamily:'Manrope-Medium'}}>23:59</Text>
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
                            data={dayData}
                            // data={chartData.length > 0 ? chartData : dayData}
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
        </Pressable>
    )
}

export default StepCard;
