import * as React from 'react';
import {Dimensions, Pressable, Text, View} from 'react-native';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {Moon02Icon} from '@hugeicons/core-free-icons';
import {useBluetooth} from '../BluetoothContext.tsx';

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = windowWidth - 22;

const SettingScreen = () => {
    const {connectionStatus} = useBluetooth();

    return (
        <View>
            <View style={{alignItems:'center', marginBottom: 12}}>
                <Text style={{fontFamily: 'Manrope-Bold', marginBottom: -3, fontSize: 20}}>zeno</Text>
                <Text style={{fontFamily: 'Manrope-Regular', fontSize: 13, color:'#777777'}}>Cài đặt</Text>
            </View>

            <View  style={{width: calculatedWidth, height: 180, backgroundColor: '#FFF5EF', borderRadius: 12, alignSelf:'center', padding: 12, justifyContent:'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#FF7B24', padding: 5, width: 26, borderRadius: 7}}>
                        <HugeiconsIcon icon={Moon02Icon} color={'#FFFFFF'} size={16} />
                    </View>
                    <Text style={{fontSize: 15, lineHeight: 20, marginLeft: 10, fontFamily:'Manrope-Medium'}}>Quản lý kết nối</Text>
                </View>

                <View style={{position: 'absolute', right: 0, marginTop: 12, marginRight: 12, backgroundColor: '#FF7B24', borderRadius: 7}}>
                    <Text style={{fontFamily: 'Manrope-Medium', color: '#FFFFFF', marginVertical: 4, marginHorizontal: 12, bottom: 1}}>{connectionStatus}</Text>
                </View>

                <View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'flex-end'}}>
                        <Text style={{fontSize: 15, fontFamily:'Manrope-Medium', marginBottom: 5}}>Pin</Text>
                        <Text style={{fontSize: 35, fontFamily:'Manrope-SemiBold'}}>80%</Text>
                    </View>

                    <View style={{marginBottom: 10}}> {/*Hiển thị phần trăm*/}
                        <View style={{height: 8, backgroundColor: '#FFC299', borderRadius: 25}} /> {/*Hiển thị background*/}
                        <View style={{height: 8, backgroundColor: '#FF7B24', borderRadius: 25, width:'80%', position:'absolute'}} /> {/*Hiển thị foreground*/}
                    </View>

                    <Pressable style={{alignSelf:'center', backgroundColor: '#E7002E', borderRadius:25}}>
                        <Text style={{color: '#FFFFFF', marginVertical: 10, marginHorizontal: 15, bottom:1, fontFamily: 'Manrope-Medium'}}>Ngắt kết nối</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default SettingScreen;
