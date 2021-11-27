import React from "react";
import {View, Text} from "react-native";

const Transaction = (props) => {
    return (
        <View
            style={{
                backgroundColor: '#ffffff',
                height: 90,
                marginBottom: 10,
                borderRadius: 8,
                paddingHorizontal: 10
                , ...props.style
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
                        paddingLeft: 10
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: '#424460'
                        }}>Lelia Castro</Text>

                        <Text style={{
                            fontSize: 14,
                            color: '#424460'
                        }}>Borrowed</Text>
                    </View>
                </View>

                <View style={{
                    alignItems: 'center'
                }}>
                    <Text>20, Nov 2021</Text>
                </View>
            </View>
        </View>
    )
}

export default Transaction;