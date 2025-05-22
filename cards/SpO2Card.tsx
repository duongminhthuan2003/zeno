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
import { BloodPressureIcon } from '@hugeicons/core-free-icons';

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = (windowWidth - 11 * 3) / 2;

function SpO2Card() {
    return (
        <View style={{backgroundColor:'#F0FFED', padding: 12, width: calculatedWidth, height: 125, borderRadius: 12, justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{backgroundColor: '#1FBB00', padding: 5, width: 26, borderRadius: 7}}>
                    <HugeiconsIcon icon={BloodPressureIcon} color={'#FFFFFF'} size={16} />
                </View>
                <Text style={{fontSize: 15, lineHeight: 20, marginLeft: 10, fontFamily: 'Manrope-Medium'}}>SpO<Text style={{fontSize: 11, lineHeight: 18, textAlignVertical: 'bottom'}}>2</Text></Text>
            </View>

            <View style={{alignContent:'flex-end'}}>
                <Text style={{fontSize: 30, fontFamily: 'Manrope-SemiBold', marginBottom: -3}}>98%</Text>
                <Text style={{fontFamily: 'Manrope-Medium'}}>Bình thường</Text>
            </View>
        </View>
    );
}

export default SpO2Card;
