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
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = windowWidth - 22;

function TempCard() {
    const navigation = useNavigation<any>();
    const {temp} = useBluetooth();
    return (
        <Pressable style={{backgroundColor:'#FFF9EB', padding: 12, width: calculatedWidth, height: 180, borderRadius: 12, alignSelf: 'center'}} onPress={() => {navigation.navigate('TempPage');}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{backgroundColor: '#FFB200', padding: 5, width: 26, borderRadius: 7}}>
                    <HugeiconsIcon icon={TemperatureIcon} color={'#FFFFFF'} size={16} />
                </View>
                <Text style={{fontSize: 15, lineHeight: 20, marginLeft: 10, fontFamily: 'Manrope-Medium'}}>Nhiệt độ cơ thể</Text>
            </View>

            <View style={{marginTop: 0, alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                    <Text style={{fontSize: 50, fontFamily: 'Manrope-SemiBold'}}>{temp}</Text>
                    <Text style={{fontSize: 30, fontFamily: 'Manrope-Bold', lineHeight: 40}}>°</Text>
                    <Text style={{fontSize: 50, fontFamily: 'Manrope-SemiBold'}}>C</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default TempCard;
