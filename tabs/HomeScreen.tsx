import * as React from 'react';
import {Text, View, ScrollView, Dimensions} from 'react-native';
import {BluetoothContext, useBluetooth} from '../BluetoothContext.tsx';
import StepDashboard from '../cards/StepDashboard.tsx';
import SleepCard from '../cards/SleepCard.tsx';
import HeartRateCard from "../cards/HeartRateCard.tsx";
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
    return (
        <ScrollView style={{height:Dimensions.get('window').height}}>
            <View style={{alignItems:'center', marginBottom: 12}}>
                <Text style={{fontFamily: 'Manrope-Bold', marginBottom: -3, fontSize: 20}}>zeno</Text>
                <Text style={{fontFamily: 'Manrope-Regular', fontSize: 13, color:'#777777'}}>Trang chủ</Text>
            </View>

            <StepDashboard />
            <SleepCard />
            <HeartRateCard />
        </ScrollView>
    );
};

export default HomeScreen;
