import React, { createContext, useContext } from 'react';
import { Device } from 'react-native-ble-plx';

interface BluetoothContextType {
    device: Device | null;
    stepCount: number;
    fallDetected: boolean;
    connectionStatus: string;
}

export const BluetoothContext = createContext<BluetoothContextType>({
    device: null,
    stepCount: 0,
    fallDetected: false,
    connectionStatus: 'Searching...',
});

export const useBluetooth = () => useContext(BluetoothContext);
