import * as React from 'react';
import {Button, Dimensions, Pressable, Text, View} from 'react-native';
import {VictoryBar,
    VictoryChart,
    VictoryPie,
    VictoryTheme,
    VictoryAxis,
    VictoryLabel,
    VictoryCandlestick} from 'victory-native';
import {useBluetooth} from '../BluetoothContext.tsx';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {BloodPressureIcon, TemperatureIcon} from '@hugeicons/core-free-icons';

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = windowWidth - 22;

function TempCard() {
    return (
        <View style={{backgroundColor:'#FFF9EB', padding: 12, width: calculatedWidth, height: 180, borderRadius: 12, alignSelf: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{backgroundColor: '#FFB200', padding: 5, width: 26, borderRadius: 7}}>
                    <HugeiconsIcon icon={TemperatureIcon} color={'#FFFFFF'} size={16} />
                </View>
                <Text style={{fontSize: 15, lineHeight: 20, marginLeft: 10, fontFamily: 'Manrope-Medium'}}>Nhiệt độ cơ thể</Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 20, justifyContent:'space-between', alignItems:'center'}}>
                <View style={{alignContent:'flex-end'}}>
                    <Text style={{fontSize: 40, fontFamily: 'Manrope-SemiBold', marginBottom: -3}}>36.8
                        <View><Text style={{fontSize: 32, fontFamily: 'Manrope-Bold'}}>o</Text></View>
                        C</Text>
                    <Text style={{fontFamily: 'Manrope-Medium'}}>Đo gần nhất: 10:30 - Hôm nay</Text>
                </View>
                <Pressable style={{backgroundColor:'#FFB200', height:'auto', borderRadius: 25}}>
                    <Text style={{color:'#FFFFFF', marginVertical: 8, marginHorizontal:12, fontFamily: 'Manrope-Medium', top: -1}}>Cập nhật nhiệt độ</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default TempCard;
