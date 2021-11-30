import React, {useState} from "react";
import {View, Pressable} from "react-native";
import {CONTENT_HORIZONTAL_PADDING} from "../../styles";

const UserPopupMenu = () => {
    return (
        <>


            <View style={{
                backgroundColor: 'rgba(255,255,255, 0.8)',
                height: 80,
                width: 200,
                position: 'absolute',
                right: CONTENT_HORIZONTAL_PADDING,
                top: 86,
                borderRadius: 8,
                zIndex: 30
            }}/>
        </>
    )
}

export default UserPopupMenu;