import React from "react";
import {View, Text, Pressable, Image} from "react-native";
import {useNavigation} from '@react-navigation/native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';

const Transaction = ({style}) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate({name: 'Home'})}>
            <View
                style={{
                    backgroundColor: '#ffffff',
                    height: 80,
                    marginBottom: 10,
                    borderRadius: 8,
                    paddingHorizontal: 10
                    , ...style
                }}>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}>
                        <Image
                            source={{uri: `https://i.pravatar.cc/60?u=${(new Date()).getTime()}`}}
                            style={{
                                height: 60,
                                width: 60,
                                borderRadius: 8
                            }}
                        >
                        </Image>

                        <View style={{
                            paddingLeft: 10,
                            paddingVertical: 8,
                            flex: 1,
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{
                                fontSize: 18,
                                color: '#424460'
                            }}>Lelia Castro</Text>

                            <Text style={{
                                fontSize: 14,
                                color: '#424460',
                            }}>Borrowed $100.00</Text>
                        </View>
                    </View>

                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text>20, Nov 2021</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default Transaction;