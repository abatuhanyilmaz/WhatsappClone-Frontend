import React,{useEffect} from 'react';
import {SafeAreaView,StyleSheet,ScrollView, View,Text,StatusBar, Button} from 'react-native';

const Chat =  ({ props, navigation, gotoChatScreen }) => {
    // useEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false
    //     });
    // }, []);
    return(
        <View>
            <Text>Hello from Chat</Text>
            <Button  onPress={gotoChatScreen} title='go to chatScrrenn '/>
        </View>
    )
};
export default Chat;