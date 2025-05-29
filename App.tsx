import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Button,
  Platform,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { BleManager, Device } from 'react-native-ble-plx';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolateColor,
} from 'react-native-reanimated';
import { useAndroidPermissions } from './useAndroidPermission';
import { atob } from 'react-native-quick-base64';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BaseButton, GestureHandlerRootView } from 'react-native-gesture-handler';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Home05Icon, WaterfallUp01Icon, Settings01Icon } from '@hugeicons/core-free-icons';
import HomeScreen from './tabs/HomeScreen.tsx';
import DetailScreen from './tabs/DetailScreen.tsx';
import SettingScreen from './tabs/SettingScreen.tsx';
import StepPage from './pages/StepPage.tsx';
import HRPage from './pages/HRPage';
import TempPage from './pages/TempPage';
import { BluetoothContext } from './BluetoothContext';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const bleManager = new BleManager();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'rgb(255, 255, 255)',
        primary: 'rgb(255, 255, 255)',
    },
};

const TAB_BAR_WIDTH = 252;
const TAB_COUNT = 3;
const SINGLE_TAB_WIDTH = TAB_BAR_WIDTH / TAB_COUNT;

function Tabs() {
    return (
        <Tab.Navigator tabBar={(props) => <NavBar {...props} />} screenOptions={{ headerShown: false, animation: 'shift'}}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="DetailScreen" component={DetailScreen} />
            <Tab.Screen name="SettingScreen" component={SettingScreen} />
        </Tab.Navigator>
    );
}

function NavBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const activeIndex = useSharedValue(state.index);

    // Cập nhật activeIndex khi state.index thay đổi
    React.useEffect(() => {
        activeIndex.value = withTiming(state.index, { duration: 200 });
    }, [activeIndex, state.index]);

    // Tạo animated style cho thanh trượt
    const slideAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: activeIndex.value * SINGLE_TAB_WIDTH }],
        };
    });

    return (
        <View style={styles.container}>
            {/* Thanh trượt với animated style */}
            <Animated.View
                style={[
                    styles.slide,
                    slideAnimatedStyle,
                ]}
            />

            {/* Các tab */}
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = (state.index === index);
                // Xác định icon dựa trên tên route
                let iconName;
                if (route.name === 'HomeScreen') {
                    iconName = Home05Icon;
                } else if (route.name === 'DetailScreen') {
                    iconName = WaterfallUp01Icon;
                } else if (route.name === 'SettingScreen') {
                    iconName = Settings01Icon;
                }

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <BaseButton
                        key={index}
                        onPress={onPress}
                        rippleColor={'transparent'}
                        style={{ width: SINGLE_TAB_WIDTH, alignItems: 'center', zIndex: 2 }}
                    >
                        <Animated.View>
                            <HugeiconsIcon icon={iconName} size={22} color={isFocused ? '#FFFFFF' : '#000000'} />
                        </Animated.View>
                    </BaseButton>
                );
            })}
        </View>
    );
}

const DEVICE_NAME = 'ESP32_Watch';
const SERVICE_UUID = '0000180D-0000-1000-8000-00805F9B34FB';
const STEPCOUNT_CHARACTERISTIC_UUID = '00002A37-0000-1000-8000-00805F9B34FB';
//
// const DEVICE_NAME = 'ESP32_Fall_Step_BLE';
// const SERVICE_UUID = '12345678-1234-1234-1234-123456789abc';
// const STEPCOUNT_CHARACTERISTIC_UUID = 'abcd1234-1234-1234-1234-abcdef123456';

function App() {
  const [hasPermissions, setHasPermissions] = useState<boolean>(Platform.OS == 'ios');
  const [waitingPerm, grantedPerm] = useAndroidPermissions();
  const [fallDetected, setFallDetected] = useState(false);

  const [connectionStatus, setConnectionStatus] = useState('Searching...');
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const [device, setDevice] = useState<Device | null>(null);

  const [stepCount, setStepCount] = useState(0);
  const [heartRate, setHeartRate] = useState<number | null>(103);

  useEffect(() => {
      if (!(Platform.OS == 'ios')){
          setHasPermissions(grantedPerm);
      }
  }, [grantedPerm]);

  useEffect(() => {
      if(hasPermissions){
          searchAndConnectToDevice();
      }
  }, [hasPermissions]);

  const searchAndConnectToDevice = () =>
      bleManager.startDeviceScan(null, null, (error, device) => {
          if (error) {
              console.error(error);
              setIsConnected(false);
              setConnectionStatus('Error searching for devices');
              return;
          }
          if (device?.name === DEVICE_NAME) {
              bleManager.stopDeviceScan();
              setConnectionStatus('Connecting...');
              connectToDevice(device);
          }
      });

  const connectToDevice = async (device: Device) => {
      try {
          const _device = await device.connect();
          // require to make all services and Characteristics accessable
          await _device.discoverAllServicesAndCharacteristics();
          setConnectionStatus('Connected');
          setIsConnected(true);
          setDevice(_device);
      } catch (error){
          setConnectionStatus('Error in Connection');
          setIsConnected(false);
      }
  };

  useEffect(() => {
      if (!device) {
          return;
      }

      const subscription = bleManager.onDeviceDisconnected(
          device.id,
          (error, device) => {
              if (error) {
                  console.log('Disconnected with error:', error);
              }
              setConnectionStatus('Disconnected');
              setIsConnected(false);
              console.log('Disconnected device');
              if (device) {
                  setConnectionStatus('Reconnecting...');
                  connectToDevice(device)
                      .then(() => {
                          setConnectionStatus('Connected');
                          setIsConnected(true);
                      })
                      .catch((error) => {
                          console.log('Reconnection failed: ', error);
                          setConnectionStatus('Reconnection failed');
                          setIsConnected(false);
                          setDevice(null);
                      });
              }
          }
      );

      return () => subscription.remove();
  }, [device]);

  useEffect(() => {
      if (!device || !device.isConnected) {
          return;
      }

      const sub = device.monitorCharacteristicForService(
          SERVICE_UUID,
          STEPCOUNT_CHARACTERISTIC_UUID,
          (error, char) => {
              if (error || !char?.value) {
                  return;
              }

              const decoded = atob(char.value);
              console.log('BLE message:', decoded);

              if (decoded.includes('Steps:')) {
                  const match = decoded.match(/Steps:(\d+)/);
                  if (match) {
                      setStepCount(parseInt(match[1], 10));
                      setFallDetected(false); // reset nếu không có té ngã
                  }
              } else if (decoded.includes('FALL')) {
                  setFallDetected(true);
              } else if (decoded.includes('HR:')) {
                  const match = decoded.match(/HR:(\d+)/);
                  if (match) {
                      setHeartRate(parseInt(match[1], 10));
                  }
              }
          }
      );

      return () => sub.remove();
  }, [device]);

  SystemNavigationBar.setNavigationColor('white', 'light', 'navigation');

    return (
      <SafeAreaView
          style={styles.safeArea}
      >
          <GestureHandlerRootView style={{flex: 1}}>
              <StatusBar
                  animated={true}
                  backgroundColor="#FFFFFF"
                  barStyle="dark-content"
              />

              <BluetoothContext.Provider
                  value={{ device, stepCount, fallDetected, connectionStatus, heartRate }}
              >
                  <NavigationContainer theme={MyTheme}>
                        <Stack.Navigator screenOptions={{headerShown: false}}>
                            <Stack.Screen name="Tabs" component={Tabs} />
                            <Stack.Screen name="StepPage" component={StepPage} />
                            <Stack.Screen name="HRPage" component={HRPage} />
                            <Stack.Screen name="TempPage" component={TempPage} />
                        </Stack.Navigator>
                  </NavigationContainer>
              </BluetoothContext.Provider>
          </GestureHandlerRootView>

          {/*
              !hasPermissions && (
                  <View>
                      <Text>Looks like you have not enabled Permission for BLE</Text>
                  </View>
              )
          }
          {hasPermissions &&(
              <View>
                  <Text>BLE Premissions enabled!</Text>
                  <Text>The connection status is: {connectionStatus}</Text>
                  <Button
                      disabled={!isConnected}
                      onPress={() => {}}
                      title={`The button is ${isConnected ? "enabled" : "disabled"}`}
                  />
                  <Text>Step count: {stepCount}</Text>

                  {fallDetected && (
                      <Text style={{ color: 'red', fontWeight: 'bold', marginTop: 10 }}>
                          ⚠️ Fall Detected!
                      </Text>
                  )}
              </View>
          )
          */}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        width: 252,
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 'auto',
        borderRadius: 25,
        backgroundColor: '#FFF5EF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        position: 'relative',
    },
    slide: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FF7B24',
        width: SINGLE_TAB_WIDTH,
        borderRadius: 100,
    },
    safeArea: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
});

export default App;
