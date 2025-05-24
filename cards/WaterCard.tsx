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
import { MilkBottleIcon } from '@hugeicons/core-free-icons';

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = (windowWidth - 11 * 3) / 2;

function WaterCard() {
    return (
        <View style={{backgroundColor:'#E6FEFF', padding: 12, width: calculatedWidth, height: 125, borderRadius: 12, justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{backgroundColor: '#009BA0', padding: 5, width: 26, borderRadius: 7}}>
                    <HugeiconsIcon icon={MilkBottleIcon} color={'#FFFFFF'} size={16} />
                </View>
                <Text style={{fontSize: 15, lineHeight: 20, marginLeft: 10, fontFamily: 'Manrope-Medium'}}>Uống nước</Text>
            </View>

            <View>
                <Text style={{fontSize: 30, fontFamily: 'Manrope-SemiBold', marginBottom: -5}}>1g 16ph</Text>
                <Text style={{fontFamily: 'Manrope-Medium'}}>Lặp lại trong 1g 30ph</Text>
            </View>
        </View>
    );
}

export default WaterCard;
