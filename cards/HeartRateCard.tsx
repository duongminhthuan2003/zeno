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
import {
  Route01Icon,
  Clock01Icon,
  Fire02Icon,
  Moon02Icon,
  FavouriteIcon,
} from '@hugeicons/core-free-icons';
import {useNavigation} from '@react-navigation/native';
import HRPage from '../pages/HRPage.tsx';

const dataHeart = [
    {
        x: '1',
        open: 52,
        close: 56,
        low: 52,
        high: 56,
    },
    {
        x: '2',
        open: 48,
        close: 53,
        low: 48,
        high: 53,
    },
    {
        x: '3',
        open: 45,
        close: 49,
        low: 45,
        high: 49,
    },
    {
        x: '4',
        open: 46,
        close: 51,
        low: 46,
        high: 51,
    },
    {
        x: '5',
        open: 52,
        close: 56,
        low: 52,
        high: 56,
    },
    {
        x: '6',
        open: 53,
        close: 61,
        low: 53,
        high: 61,
    },
    {
        x: '7',
        open: 55,
        close: 65,
        low: 55,
        high: 65,
    },
    {
        x: '8',
        open: 86,
        close: 97,
        low: 86,
        high: 97,
    },
    {
        x: '9',
        open: 91,
        close: 102,
        low: 91,
        high: 102,
    },
    {
        x: '10',
        open: 75,
        close: 86,
        low: 75,
        high: 86,
    },
    {
        x: '11',
        open: 83,
        close: 89,
        low: 83,
        high: 89,
    },
    {
        x: '12',
        open: 72,
        close: 89,
        low: 72,
        high: 89,
    },
    {
        x: '13',
        open: 87,
        close: 95,
        low: 87,
        high: 95,
    },
    {
        x: '14',
        open: 91,
        close: 102,
        low: 91,
        high: 102,
    },
    {
        x: '15',
        open: 86,
        close: 97,
        low: 86,
        high: 97,
    },
    {
        x: '16',
        open: 84,
        close: 95,
        low: 84,
        high: 95,
    },
    {
        x: '17',
        open: 75,
        close: 95,
        low: 75,
        high: 95,
    },
    {
        x: '18',
        open: 0,
        close: 0,
        low: 0,
        high: 0,
    },
    {
        x: '19',
        open: 0,
        close: 0,
        low: 0,
        high: 0,
    },
    {
        x: '20',
        open: 0,
        close: 0,
        low: 0,
        high: 0,
    },
    {
        x: '21',
        open: 0,
        close: 0,
        low: 0,
        high: 0,
    },
    {
        x: '22',
        open: 0,
        close: 0,
        low: 0,
        high: 0,
    },
    {
        x: '23',
        open: 0,
        close: 0,
        low: 0,
        high: 0,
    },
    {
        x: '24',
        open: 0,
        close: 0,
        low: 0,
        high: 0,
    },
];

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = windowWidth - 22;

function HeartRateCard(){
    const navigation = useNavigation<any>();
    const {heartRate} = useBluetooth();

    return (
        <Pressable onPress={() => {navigation.navigate(HRPage)}}>
            <View style={{alignItems: 'center'}}>
                <Pressable style={{backgroundColor:'#FFF6F8', padding: 12, width: calculatedWidth, height: 180, borderRadius: 12}} onPress={() => {navigation.navigate(HRPage)}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{backgroundColor: '#FF2450', padding: 5, width: 26, borderRadius: 7}}>
                            <HugeiconsIcon icon={FavouriteIcon} color={'#FFFFFF'} size={16} />
                        </View>
                        <Text style={{fontFamily: 'Manrope-Medium', fontSize: 15, lineHeight: 20, marginLeft: 10}}>Nhịp tim</Text>
                    </View>
                    <View>
                        <Text style={{top: 65, fontFamily: 'Manrope-Medium', fontSize: 20}}><Text style={{fontFamily: 'Manrope-SemiBold', fontSize: 50}}>{heartRate}</Text> bpm</Text>
                        <Text style={{fontFamily: 'Manrope-Medium', position: 'absolute', right: 132, top: 110, fontSize: 12}}>24h trước</Text>
                        <Text style={{fontFamily: 'Manrope-Medium', position: 'absolute', right: 0, top: 110, fontSize: 12}}>Hiện tại</Text>
                        <View style={{top: -50, flex: 1, alignItems: 'flex-end', left: 120, position: 'absolute'}}>
                            <VictoryChart
                                domainPadding={{ x: 5 }}
                                theme={VictoryTheme.clean}
                                height={210}
                                width={305}
                            >
                                <VictoryAxis
                                    dependentAxis={false}
                                    tickValues={[ 1, 24 ]}
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
                                    candleWidth={3}
                                />
                            </VictoryChart>
                        </View>
                    </View>
                </Pressable>
            </View>
        </Pressable>
    );
}

export default HeartRateCard;
