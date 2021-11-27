import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import Transaction from "../../components/transaction";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <View style={{
                backgroundColor: '#4749A1',
                paddingHorizontal: 10,
                height: 200,
                justifyContent: 'center'
            }}>
                <Text style={{
                    color: '#ffffff',
                    fontSize: 22,
                    fontWeight: 'bold'
                }}>
                    Allie Collins
                </Text>
            </View>

            <View style={{
                backgroundColor: '#d28686',
                height: '100%',
                paddingHorizontal: 10,
            }}>
                    <View
                        style={{
                            backgroundColor: '#d28686',
                        }}
                    >

                        <Transaction
                            style={{
                                marginTop: -40,
                            }}>

                        </Transaction>


                        {
                            [...Array(10)].map((el, index) => {
                                return (
                                    <Transaction key={index}/>
                                )
                            })
                        }
                    </View>
            </View>
        </View>
    );
}

export default HomeScreen;