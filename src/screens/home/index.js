import React, {useState} from 'react';
import {Text, View, ScrollView, Button, Pressable, Alert, Modal, StyleSheet} from 'react-native';
import Transaction from "../../components/transaction";
import {Ionicons} from '@expo/vector-icons';

const CONTENT_HORIZONTAL_PADDING = 20;

const HomeScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>


                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={[styles.button]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>
                                <Ionicons name="times-outline" size={24} color="white"/>
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable style={{
                zIndex: 100,
                height: 50,
                width: 50,
                position: 'absolute',
                bottom: 230,
                right: CONTENT_HORIZONTAL_PADDING,
                borderRadius: 100,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#54b0de'
            }}
                       onPress={() => setModalVisible(true)}
            >
                <Ionicons name="add-outline" size={24} color="white"/>
            </Pressable>

            <View style={{
                backgroundColor: '#7779e8',
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


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    modalView: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '100%',
        height: '100%'
    }
});

export default HomeScreen;