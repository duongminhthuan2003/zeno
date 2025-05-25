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
    ArrowLeft02Icon,
    FavouriteIcon
} from '@hugeicons/core-free-icons';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const calculatedWidth = windowWidth - 22;
const calculatedWidthHalf = (windowWidth - 11 * 3) / 2;
const fixWidth = 15;
const cardHeight = 220;
const cardHeightHalf = (cardHeight - 11) / 2;

function SleepPage() {
    const navigation = useNavigation<any>();

    return (
        <View>
            <View style={{alignItems:'center', marginBottom: 12}}>
                <Text style={{fontFamily: 'Manrope-Bold', marginBottom: -3, fontSize: 20}}>zeno</Text>
                <Text style={{fontFamily: 'Manrope-Regular', fontSize: 13, color:'#6865FF'}}>Giấc ngủ</Text>
            </View>

            <Pressable style={{position:'absolute', flexDirection:'row', marginHorizontal: 11, marginTop: 17}} onPress={() => {navigation.goBack();}}>
                <HugeiconsIcon icon={ArrowLeft02Icon} size={20} />
                <Text style={{fontFamily: 'Manrope-Medium', marginHorizontal: 8, fontSize: 15, marginTop: -2}}>Trở về</Text>
            </Pressable>

            <View style={{width: calculatedWidth, alignSelf:'center', backgroundColor: '#F7F6FF', height: 180, padding: 12, borderRadius: 12}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#7371FF', padding: 5, width: 26, borderRadius: 7}}>
                        <HugeiconsIcon icon={FavouriteIcon} color={'#FFFFFF'} size={16} />
                    </View>
                    <Text style={{fontSize: 15, lineHeight: 20, marginLeft: 10, fontFamily:'Manrope-Medium'}}>Thời gian ngủ</Text>
                </View>

                <View style={{alignItems: 'center', alignContent:'center', marginTop: 15}}>
                    <Text style={{fontFamily:'Manrope-SemiBold', fontSize: 40}}>7 giờ 15 phút</Text>
                </View>
            </View>
        </View>
    )
}

export default SleepPage;
