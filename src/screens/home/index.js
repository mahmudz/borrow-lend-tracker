import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Pressable, Alert, Modal, StyleSheet} from 'react-native';
import Transaction from "../../components/transaction";
import {Ionicons} from '@expo/vector-icons';

import FooterSection from "./FooterSection";
import UserPopupMenu from "../../components/ui/UserPopupMenu";
import {Touchable} from "react-native-web";

const CONTENT_HORIZONTAL_PADDING = 20;

const entries = [1, 2, 3, 5, 6, 7, 9, 1, 2, 3, 5];

const HomeScreen = ({navigation}) => {
    const [openPopupMenu, setOpenPopupMenu] = useState(false);

    return (
        <>
            {openPopupMenu &&
            <>
                <TouchableOpacity style={{
                    backgroundColor: 'rgba(0,0,0, 0.1)',
                    opacity: 0.2,
                    height: '100%',
                    width: '100%'
                }}
                onPress={() => setOpenPopupMenu(false)}
                />

                <UserPopupMenu/>
            </>
            }


            <View
                style={{
                    height: '100%'
                }}
            >

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

                    <Pressable
                        onPress={() => setOpenPopupMenu(!openPopupMenu)}
                    >
                        <Ionicons name="settings-outline" size={24} color="white"/>
                    </Pressable>
                </View>

                <View style={{
                    backgroundColor: '#e7e7e7',
                    paddingHorizontal: 20,
                }}>
                    <View
                        style={{
                            marginTop: -40,
                            paddingBottom: 150
                        }}
                    >

                        <ScrollView>
                            {
                                entries.map((el, index) => {
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
                    alignItems: 'center',
                    backgroundColor: 'transparent'
                }}>
                    <FooterSection/>
                </View>
            </View>
        </>
    );
}


export default HomeScreen;