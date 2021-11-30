import React, {useState} from 'react';
import {Text, View, ScrollView, ImageBackground, Pressable, Alert, Modal, StyleSheet} from 'react-native';
import Transaction from "../../components/transaction";
import {Ionicons} from '@expo/vector-icons';

import FooterSection from "./FooterSection";

const CONTENT_HORIZONTAL_PADDING = 20;

const entries = [1, 2, 3, 5, 6, 7, 9];

const HomeScreen = ({navigation}) => {
    return (
        <View
            style={{
                height: '100%'
            }}
        >


            {/*<Pressable style={{*/}
            {/*    zIndex: 100,*/}
            {/*    height: 50,*/}
            {/*    width: 50,*/}
            {/*    position: 'absolute',*/}
            {/*    bottom: 230,*/}
            {/*    right: CONTENT_HORIZONTAL_PADDING,*/}
            {/*    borderRadius: 100,*/}
            {/*    flex: 1,*/}
            {/*    justifyContent: 'center',*/}
            {/*    alignItems: 'center',*/}
            {/*    backgroundColor: '#54b0de'*/}
            {/*}}*/}
            {/*           onPress={() => setModalVisible(true)}*/}
            {/*>*/}
            {/*    <Ionicons name="add-outline" size={24} color="white"/>*/}
            {/*</Pressable>*/}

            <View style={{
                backgroundColor: '#4749A1',
                paddingHorizontal: CONTENT_HORIZONTAL_PADDING,
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

                <Pressable>
                    <Ionicons name="settings-outline" size={24} color="white"/>
                </Pressable>
            </View>

            <View style={{
                backgroundColor: '#e7e7e7',
                height: '55%',
                paddingHorizontal: 20,
            }}>
                <View
                    style={{
                        marginTop: -40
                    }}
                >

                    <ScrollView>
                        {
                            entries.map((el, index) => {

                                if (entries.length === (index + 1)) {
                                    return (
                                        <Transaction key={index} style={{marginBottom: 80}}/>
                                    )
                                }

                                return (
                                    <Transaction key={index}/>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>


            <View style={{
                width: '100%',
                height: 180,
                position: 'absolute',
                bottom: 0,
                flex: 1,
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <FooterSection />
            </View>
        </View>
    );
}


export default HomeScreen;