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
import {ArrowLeft02Icon, RunningShoesIcon, TemperatureIcon, Clock02Icon} from '@hugeicons/core-free-icons';
import {useNavigation} from '@react-navigation/native';
import {useBluetooth} from '../BluetoothContext.tsx';
import {VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryPie} from 'victory-native';
import {useState} from 'react';

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = windowWidth - 22;

function TempPage() {
    return (
        <View>
            <View style={{alignItems:'center', marginBottom: 12}}>
                <Text style={{fontFamily: 'Manrope-Bold', marginBottom: -3, fontSize: 20}}>zeno</Text>
                <Text style={{fontFamily: 'Manrope-Regular', fontSize: 13, color:'#FFB200'}}>Nhiệt độ cơ thể</Text>
            </View>

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

            <View style={{backgroundColor:'#FFF9EB', padding: 12, width: calculatedWidth, height: 180, borderRadius: 12, alignSelf: 'center', marginTop: 11}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#FFB200', padding: 5, width: 26, borderRadius: 7}}>
                        <HugeiconsIcon icon={Clock02Icon} color={'#FFFFFF'} size={16} />
                    </View>
                    <Text style={{fontSize: 15, lineHeight: 20, marginLeft: 10, fontFamily: 'Manrope-Medium'}}>Lịch sử đo</Text>
                </View>
            </View>
        </View>
    );
}

export default TempPage;
