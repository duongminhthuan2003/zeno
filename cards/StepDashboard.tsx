import * as React from 'react';
import {Pressable, Text, View} from 'react-native';
import {VictoryPie} from 'victory-native';
import {useBluetooth} from '../BluetoothContext.tsx';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {Route01Icon, Clock01Icon, Fire02Icon} from '@hugeicons/core-free-icons';
import {useNavigation} from '@react-navigation/native';

function formatSmartDecimal(num: number): string {
    if (Number.isInteger(num)) {
        return num.toString();
    }

    const decimalPart = num.toString().split(',')[1] || '';
    const precision = decimalPart.length === 1 ? 1 : 2;

    return num.toFixed(precision);
}

// function formatDistance(meters: number): string {
//     if (meters < 50) {
//         return `${Math.round(meters)} m`;
//     } else {
//         const km = meters / 1000;
//         return `${formatSmartDecimal(km)} km`;
//     }
// }

function StepDashboard() {
    const { stepCount } = useBluetooth();
    let stepTarget = 5000;
    let stepRemaining = stepTarget - stepCount;

    let distance = stepCount * 0.7; //A step's length = 0.7m
    let time = (distance / 70); //Average human pace is 70m/min
    let kcal = time * ((4.2 * 3.5 * 58) / 200);

    const navigation = useNavigation<any>();

    if (stepRemaining <= 0) {
        stepRemaining = 0;
    }
    return (
        <View>
            <View style={{alignItems:'center', marginBottom: 12}}>
                <Text style={{fontFamily: 'Manrope-Bold', marginBottom: -3, fontSize: 20}}>zeno</Text>
                <Text style={{fontFamily: 'Manrope-Regular', fontSize: 13, color:'#777777'}}>Trang chủ</Text>
            </View>
            <View style={{backgroundColor: '#FFFFFF', justifyContent:'center', marginBottom: -15, alignItems:'center'}}>
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
                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 16, fontFamily: 'Manrope-Medium'}}>Bước chân</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                        <Text style={{fontSize: 50, lineHeight: 45, fontFamily:'Manrope-Bold'}}>{stepCount}</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 16, fontFamily: 'Manrope-Medium'}}>/{stepTarget}</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', gap: 11, marginBottom:11}}>
                <Pressable style={{backgroundColor:'#EFF6FF', padding: 12, width: '29%', borderRadius: 12}} onPress={() => navigation.navigate('StepPage')}>
                    <View style={{backgroundColor: '#006AFF', padding: 5, width: 26, borderRadius: 7}}>
                        <HugeiconsIcon icon={Route01Icon} color={'#FFFFFF'} size={16} />
                    </View>
                    <Text style={{fontSize: 24, marginTop:20, fontFamily: 'Manrope-SemiBold', marginBottom: -5}}>{distance > 50 ? formatSmartDecimal(distance/1000) : formatSmartDecimal(distance)}</Text>
                    <Text style={{fontFamily: 'Manrope-Medium'}}>{distance > 50 ? 'km' : 'm'}</Text>
                </Pressable>

                <Pressable style={{backgroundColor:'#EFF6FF', padding: 12, width: '29%', borderRadius: 12}} onPress={() => navigation.navigate('StepPage')}>
                    <View style={{backgroundColor: '#006AFF', padding: 5, width: 26, borderRadius: 7}}>
                        <HugeiconsIcon icon={Clock01Icon} color={'#FFFFFF'} size={16} />
                    </View>
                    <Text style={{fontSize: 24, marginTop:20, fontFamily: 'Manrope-SemiBold', marginBottom: -5}}>{formatSmartDecimal(time)}</Text>
                    <Text style={{fontFamily: 'Manrope-Medium'}}>phút</Text>
                </Pressable>

                <Pressable style={{backgroundColor:'#EFF6FF', padding: 12, width: '29%', borderRadius: 12}} onPress={() => navigation.navigate('StepPage')}>
                    <View style={{backgroundColor: '#006AFF', padding: 5, width: 26, borderRadius: 7}}>
                        <HugeiconsIcon icon={Fire02Icon} color={'#FFFFFF'} size={16} />
                    </View>
                    <Text style={{fontSize: 24, marginTop:20, fontFamily: 'Manrope-SemiBold', marginBottom: -5}}>{formatSmartDecimal(kcal)}</Text>
                    <Text style={{fontFamily: 'Manrope-Medium'}}>kcal</Text>
                </Pressable>
            </View>
        </View>

    );
}

export default StepDashboard;
