import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import StepCard from '../cards/StepCard.tsx';
import SleepCard from '../cards/SleepCard.tsx';
import HeartRateCard from '../cards/HeartRateCard.tsx';

const DetailScreen = () => {
    return (
        <SafeAreaView>
            <View style={{alignItems:'center', marginBottom: 12}}>
                <Text style={{fontFamily: 'Manrope-Bold', marginBottom: -3, fontSize: 20}}>zeno</Text>
                <Text style={{fontFamily: 'Manrope-Regular', fontSize: 13, color:'#777777'}}>Thống kê</Text>
            </View>

            <StepCard />
            <HeartRateCard/>
            <View style={{marginTop:11}} />
            <SleepCard />
        </SafeAreaView>
    );
};

export default DetailScreen;
