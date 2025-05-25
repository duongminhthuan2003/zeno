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
    {
        x: '15',
        open: 76,
        close: 87,
        low: 76,
        high: 87,
    },
    {
        x: '16',
        open: 82,
        close: 94,
        low: 82,
        high: 94,
    },
    {
        x: '17',
        open: 81,
        close: 90,
        low: 81,
        high: 90,
    },
    {
        x: '18',
        open: 82,
        close: 108,
        low: 82,
        high: 108,
    },
    {
        x: '19',
        open: 84,
        close: 93,
        low: 84,
        high: 93,
    },
    {
        x: '20',
        open: 78,
        close: 87,
        low: 78,
        high: 87,
    },
    {
        x: '21',
        open: 75,
        close: 91,
        low: 75,
        high: 91,
    },
    {
        x: '22',
        open: 80,
        close: 85,
        low: 80,
        high: 85,
    },
    {
        x: '23',
        open: 76,
        close: 84,
        low: 76,
        high: 84,
    },
    {
        x: '24',
        open: 73,
        close: 81,
        low: 73,
        high: 81,
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
