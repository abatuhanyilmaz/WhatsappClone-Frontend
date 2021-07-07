import React,{useEffect} from 'react';
import {SafeAreaView,StyleSheet,ScrollView, View,Text,StatusBar, Button} from 'react-native';

const Notifications =  ({ props, navigation, gotoChatScreen }) => {
    // useEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false
    //     });
    // }, []);
    return(
        <View>
            <Text>Hello from Notifications</Text>
            {/* <Button  onPress={gotoChatScreen} title='go to chatScrrenn '/> */}
        </View>
    )
};
export default Notifications;