import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import StepCard from '../cards/StepCard.tsx';
import SleepCard from '../cards/SleepCard.tsx';
import HeartRateCard from '../cards/HeartRateCard.tsx';
import SpO2Card from '../cards/SpO2Card.tsx';
import WaterCard from '../cards/WaterCard.tsx';
import TempCard from '../cards/TempCard';
const DetailScreen = () => {
    return (
        <ScrollView>
            <View style={{alignItems:'center', marginBottom: 12}}>
                <Text style={{fontFamily: 'Manrope-Bold', marginBottom: -3, fontSize: 20}}>zeno</Text>
                <Text style={{fontFamily: 'Manrope-Regular', fontSize: 13, color:'#777777'}}>Thống kê</Text>
            </View>

            <StepCard />
            <HeartRateCard/>
            <View style={{marginTop:11}} />
            <View style={{flexDirection:'row', alignSelf: 'center', gap: 11}}>
                <SpO2Card />
                <WaterCard />
            </View>
            <View style={{marginTop:11}} />
            <SleepCard />
            <TempCard />
        </ScrollView>
    );
};

export default DetailScreen;
