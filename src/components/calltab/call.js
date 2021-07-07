import React,{useEffect} from 'react';
import {SafeAreaView,StyleSheet,ScrollView, View,Text,StatusBar} from 'react-native';

const Status =  ({ props, navigation }) => {
    // useEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false
    //     });
    // }, []);
    return(
        <View>
            <Text>Hello from Status</Text>
        </View>
    )
};
export default Status;