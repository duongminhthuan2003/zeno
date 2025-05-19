import * as React from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {ArrowLeft02Icon, RunningShoesIcon } from '@hugeicons/core-free-icons';
import {useNavigation} from '@react-navigation/native';
import {useBluetooth} from '../BluetoothContext.tsx';
import {VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryPie} from 'victory-native';
import {useState} from "react";
import {Dropdown} from "react-native-element-dropdown";

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = windowWidth * 0.87 + 22;

const data = [
    { label: 'Ngày', value: '1' },
    { label: 'Tuần', value: '2' },
    { label: 'Tháng', value: '3' },
];

const DropdownComponent = () => {
    const [range, setRange] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (range || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#006AFF' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                containerStyle={styles.listContainer}
                itemTextStyle={styles.listText}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Ngày'}
                value={range}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setRange(item.value);
                    setIsFocus(false);
                }}
                fontFamily={'Manrope-Medium'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '23%',
        alignSelf: 'center',
    },
    listContainer: {
        backgroundColor: '#006AFF',
        borderRadius: 12,
    },
    listText: {
        fontSize: 14,
    },
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 12,
        paddingHorizontal: 10,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 999,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
    },
    selectedTextStyle: {
        fontSize: 14,
        marginBottom: 2,
        marginLeft: 5,
    },
});

const weekData = [
    {day: 1, time: 6 * 60},
    {day: 2, time: 6 * 60 + 27},
    {day: 3, time: 7 * 60 + 18},
    {day: 4, time: 6 * 60 + 18},
    {day: 5, time: 7 * 60 + 34},
    {day: 6, time: 6 * 60 + 35},
    {day: 7, time: 6 * 60 + 36},
];

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
const StepPage = () => {
    const navigation = useNavigation<any>();

    const { stepCount } = useBluetooth();
    let stepTarget = 5000;
    let stepRemaining = stepTarget - stepCount;

    let rangeSelector = 0; //0: day, 1: week, 2: month
    return (
        <SafeAreaView>
            <View style={{alignItems:'center', marginBottom: 12}}>
                <Text style={{fontFamily: 'Manrope-Bold', marginBottom: -3, fontSize: 20}}>zeno</Text>
                <Text style={{fontFamily: 'Manrope-Regular', fontSize: 13, color:'#006AFF'}}>Bước đi</Text>
            </View>

            <Pressable style={{position:'absolute', flexDirection:'row', marginHorizontal: 11, marginTop: 17}} onPress={() => {navigation.goBack()}}>
                <HugeiconsIcon icon={ArrowLeft02Icon} size={20}></HugeiconsIcon>
                <Text style={{fontFamily: 'Manrope-Medium', marginHorizontal: 8, fontSize: 15, marginTop: -2}}>Trở về</Text>
            </Pressable>

            <View style={{backgroundColor: '#FFFFFF', justifyContent:'center', marginBottom: -10, alignItems:'center'}}>
                <VictoryPie
                    data={[
                        { x: 'Counted', y: stepCount },
                        { x: 'Remaining', y: stepRemaining },
                    ]}
                    colorScale={['#006AFF', '#EFF6FF']}
                    labels={[]}
                    radius={110}
                    cornerRadius={20}
                    startAngle={-135}
                    endAngle={135}
                    innerRadius={100}
                    animate={{
                        duration: 2000,
                    }}
                    height={225}
                />

                <View style={{position: 'absolute', marginTop: -5}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                        <Text style={{fontSize: 50, lineHeight: 45, fontFamily:'Manrope-Bold'}}>{stepCount}</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 16, fontFamily: 'Manrope-Medium'}}>/{stepTarget}</Text>
                    </View>
                </View>

                <Text style={{fontFamily: 'Manrope-Medium', marginHorizontal:'auto', fontSize: 16, position: 'absolute', bottom: 30}}>Hôm nay</Text>
            </View>

            <View style={{alignItems: 'center', marginBottom: 11}}>
                <View style={{backgroundColor:'#EFF6FF', padding: 12, width: calculatedWidth, height: 180, borderRadius: 12}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{backgroundColor: '#006AFF', padding: 5, width: 26, borderRadius: 7}}>
                            <HugeiconsIcon icon={RunningShoesIcon} color={'#FFFFFF'} size={16} />
                        </View>
                        <Text style={{fontSize: 15, lineHeight: 20, marginLeft: 10, fontFamily: 'Manrope-Medium'}}>Thống kê</Text>
                    </View>
                    <View
                        style={{ top: -35, alignItems: 'center' }}
                    >
                        <Text style={{position: 'absolute', top: 147, left: 1, fontSize: 13, fontFamily:'Manrope-Medium'}}>14 ngày trước</Text>
                        <Text style={{position: 'absolute', top: 147, right: 1, fontSize: 13, fontFamily:'Manrope-Medium'}}>Hôm nay</Text>
                        <VictoryChart
                            height={190}
                            width={452}
                            domainPadding={{ x: 9 }}
                        >

                            <VictoryAxis
                                dependentAxis={false}
                                tickValues={[ 1, 24 ]} //day = 24, week = 7, month = daysInMonth(month, year)
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

            <DropdownComponent />
        </SafeAreaView>
    );
};

export default StepPage;
