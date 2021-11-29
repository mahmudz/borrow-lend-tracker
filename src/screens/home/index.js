import React from 'react';
import {Text, View, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import Transaction from "../../components/transaction";
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <View style={{
                backgroundColor: '#7779e8',
                paddingHorizontal: 20,
                height: 200,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={{
                        color: '#ffffff',
                        fontSize: 28,
                        fontWeight: 'bold'
                    }}>
                        Allie Collins
                    </Text>
                </View>

                <TouchableOpacity>
                    <Ionicons name="settings-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={{
                backgroundColor: '#e7e7e7',
                height: '100%',
                paddingHorizontal: 20,
            }}>
                    <View
                        style={{
                            marginTop: -40
                        }}
                    >

                        <ScrollView>
                            {
                                [...Array(10)].map((el, index) => {
                                    return (
                                        <Transaction key={index}/>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
            </View>
        </View>
    );
}

export default HomeScreen;