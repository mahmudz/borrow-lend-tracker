import React, {useState} from "react";
import {Alert, ImageBackground, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const CONTENT_HORIZONTAL_PADDING = 20;

const FooterSection = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <View style={{
                            flex: 1,
                        }}>
                            <Pressable
                                style={[styles.button]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Ionicons name="close-outline" size={24} color="black"/>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            <ImageBackground
                tintColor={'transparent'}
                source={require('../../../assets/homepage-footer-bg-2.png')}
                style={footerStyles.backgroundImage}
            >
                <View style={[footerStyles.infoContainer]}>
                    <View>
                        <View style={[footerStyles.infoItem]}>
                            <Text style={[footerStyles.infoItemText]}>SENT: </Text>
                            <Text style={[footerStyles.infoItemAmountText]}>$100.00</Text>
                        </View>
                        <View>
                            <Text style={[footerStyles.infoItemText]}>3 ITEMS</Text>
                        </View>
                    </View>

                    <View>
                        <View style={[footerStyles.infoItem]}>
                            <Text style={[footerStyles.infoItemText]}>SENT: </Text>
                            <Text style={[footerStyles.infoItemAmountText]}>$100.00</Text>
                        </View>
                        <View>
                            <Text style={[footerStyles.infoItemText]}>3 ITEMS</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={[footerStyles.btnContainer]}
                >
                    <Pressable
                        onPress={() => setModalVisible(true)}
                        style={[footerStyles.btn, footerStyles.btnLend]}>
                        <Text
                            style={[footerStyles.btnText]}
                        >
                            Lend
                        </Text>

                        <Ionicons name="arrow-up-outline" size={22} color="white"/>
                    </Pressable>

                    <Pressable
                        style={[footerStyles.btn, footerStyles.btnBorrow]}>
                        <Text
                            style={[footerStyles.btnText]}
                        >
                            Borrow
                        </Text>

                        <Ionicons name="arrow-down-outline" size={22} color="white"/>
                    </Pressable>
                </View>
            </ImageBackground>
        </>
    )
}

const footerStyles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: CONTENT_HORIZONTAL_PADDING,
        paddingVertical: 10,
        justifyContent: "space-between",
    },
    infoItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoItemText: {
        fontSize: 14,
        color: '#9c9dab'
    },
    infoItemAmountText: {
        fontSize: 18,
        color: '#121B33'
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: CONTENT_HORIZONTAL_PADDING
    },
    btn: {
        borderRadius: 8,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: '900',
        fontSize: 18
    },
    btnLend: {
        backgroundColor: '#4749A1',
        marginRight: 10
    },
    btnBorrow: {
        backgroundColor: '#FF7F5D',
        marginLeft: 10
    }
});


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    modalView: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '100%',
        height: '100%'
    }
});
export default FooterSection;