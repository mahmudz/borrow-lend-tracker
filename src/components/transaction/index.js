import React from "react";
import {View, Text, Pressable} from "react-native";
import {useNavigation} from '@react-navigation/native';

const Transaction = ({style}) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate({name: 'AddNewTransactionScreen'})}>
            <View
                style={{
                    backgroundColor: '#ffffff',
                    height: 90,
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
                        <View
                            style={{
                                backgroundColor: '#b1b1b1',
                                height: 70,
                                width: 70,
                                borderRadius: 8
                            }}
                        >
                        </View>

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