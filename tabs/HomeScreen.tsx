import * as React from 'react';
import {Text, View, ScrollView, Dimensions} from 'react-native';
import {BluetoothContext, useBluetooth} from '../BluetoothContext.tsx';
import StepDashboard from '../cards/StepDashboard.tsx';
import SleepCard from '../cards/SleepCard';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
    return (
        <ScrollView style={{height:Dimensions.get('window').height}}>
            <StepDashboard />
            <SleepCard />
        </ScrollView>
    );
};

export default HomeScreen;
