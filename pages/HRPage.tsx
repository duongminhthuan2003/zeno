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
import {ArrowLeft02Icon, FavouriteIcon, Moon02Icon} from '@hugeicons/core-free-icons';
import {useNavigation} from '@react-navigation/native';
import {useBluetooth} from '../BluetoothContext.tsx';
import {
    VictoryAxis,
    VictoryBar,
    VictoryCandlestick,
    VictoryChart,
    VictoryLabel,
    VictoryPie,
    VictoryTheme
} from 'victory-native';
import {useState} from 'react';

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = windowWidth - 22;
const calculatedWidthHalf = (windowWidth - 11 * 3) / 2;
const fixWidth = 12;
const cardHeight = 200;
const cardHeightHalf = (cardHeight - 11) / 2;

const dataHeart = [
    {
        x: '1',
        open: 76,
        close: 83,
        low: 76,
        high: 83,
    },
    {
        x: '2',
        open: 72,
        close: 82,
        low: 72,
        high: 82,
    },
    {
        x: '3',
        open: 71,
        close: 94,
        low: 71,
        high: 94,
    },
    {
        x: '4',
        open: 78,
        close: 86,
        low: 78,
        high: 86,
    },
    {
        x: '5',
        open: 73,
        close: 84,
        low: 73,
        high: 84,
    },
    {
        x: '6',
        open: 77,
        close: 93,
        low: 77,
        high: 93,
    },
    {
        x: '7',
        open: 71,
        close: 104,
        low: 71,
        high: 104,
    },
    {
        x: '8',
        open: 75,
        close: 83,
        low: 75,
        high: 83,
    },
    {
        x: '9',
        open: 72,
        close: 78,
        low: 72,
        high: 78,
    },
    {
        x: '10',
        open: 82,
        close: 94,
        low: 82,
        high: 94,
    },
    {
        x: '11',
        open: 73,
        close: 83,
        low: 73,
        high: 83,
    },
    {
        x: '12',
        open: 74,
        close: 83,
        low: 74,
        high: 83,
    },
    {
        x: '13',
        open: 81,
        close: 87,
        low: 81,
        high: 87,
    },
    {
        x: '14',
        open: 83,
        close: 94,
        low: 83,
        high: 94,
    },
];

function HRPage() {
    const navigation = useNavigation<any>();

    return (
        <View>
            <View style={{alignItems:'center', marginBottom: 12}}>
                <Text style={{fontFamily: 'Manrope-Bold', marginBottom: -3, fontSize: 20}}>zeno</Text>
                <Text style={{fontFamily: 'Manrope-Regular', fontSize: 13, color:'#FF2450'}}>Nhịp tim</Text>
            </View>

            <Pressable style={{position:'absolute', flexDirection:'row', marginHorizontal: 11, marginTop: 17}} onPress={() => {navigation.goBack();}}>
                <HugeiconsIcon icon={ArrowLeft02Icon} size={20} />
                <Text style={{fontFamily: 'Manrope-Medium', marginHorizontal: 8, fontSize: 15, marginTop: -2}}>Trở về</Text>
            </Pressable>

            <View style={{width: calculatedWidth, alignSelf:'center', backgroundColor: '#FFF6F8', height: 180, padding: 12, borderRadius: 12}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#FF2450', padding: 5, width: 26, borderRadius: 7}}>
                        <HugeiconsIcon icon={FavouriteIcon} color={'#FFFFFF'} size={16} />
                    </View>
                    <Text style={{fontSize: 15, lineHeight: 20, marginLeft: 10, fontFamily:'Manrope-Medium'}}>Nhịp tim hiện tại</Text>
                </View>

                <View>
                    <Text>86 bpm</Text>
                    <Text>Chu kỳ đo: 2 giây</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', gap: 11, alignSelf:'center'}}>
                <View>
                    <View style={{width: calculatedWidthHalf - fixWidth, backgroundColor: '#FFF6F8', height: cardHeightHalf, padding: 12, borderRadius: 12, marginTop: 11}}>

                    </View>

                    <View style={{width: calculatedWidthHalf - fixWidth, backgroundColor: '#FFF6F8', height: cardHeightHalf, padding: 12, borderRadius: 12, marginTop: 11}}>

                    </View>
                </View>

                <View style={{width: calculatedWidthHalf + fixWidth, backgroundColor: '#FFF6F8', height: cardHeight, padding: 12, borderRadius: 12, marginTop: 11}}>
                    <View style={{alignSelf: 'center', justifyContent:'center', bottom: 15}}>
                        <VictoryChart
                            domainPadding={{ x: 5 }}
                            theme={VictoryTheme.clean}
                            height={220}
                            width={280}
                        >
                            <VictoryAxis
                                dependentAxis={false}
                                tickValues={[ 1, 14 ]}
                                tickFormat={(t) => (t === 1 ? '' : '')} // Đổi nhãn
                                tickLabelComponent={
                                    <VictoryLabel

                                    />
                                }
                                offsetY={53}
                                style={{
                                    tickLabels: {fontSize: 12, fontFamily: 'Manrope-Medium'},
                                    axis: {stroke: '#FF2450'},
                                }}
                            />
                            <VictoryCandlestick
                                data={dataHeart}
                                style={{
                                    data: {
                                        fill: '#FF2450',
                                        fillOpacity: 1,
                                    },
                                }}
                                candleWidth={4}
                            />
                        </VictoryChart>
                    </View>
                </View>
            </View>
        </View>

    );
}

export default HRPage;
