import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Image, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../actions/auth/auth';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';


const BigStack = ({ props, navigation }) => {

    const dispatch = useDispatch();

//    const getLocalData = async key => {
//         let value = '';
//         try {
//             value = await AsyncStorage.getItem(key);
//         } catch (e) {
//             console.log('AsyncStorage Error', e);
//         }
//         return value;
//     };

    const _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('userData');
          if (value !== null) {

            dispatch(authActions.getUserData(value));
            // We have data!!
            navigation.navigate('homestack');
          }
          else{
            navigation.navigate('authstack');
          }
        } catch (error) {
           console.log(error)
        }
      };

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
        // let data = null;
        // getLocalData("userData").then((res) => {
        //     if (res) {
        //         data = JSON.parse(res);
        //         if (data.token !== null) {
        //             dispatch(authActions.getUserData());
        //         }
        //     }
        // })

      _retrieveData();

    }, []);

    const auth = useSelector(state => state.auth.auth);
    let redirect = null;

    // if (auth) {
    //     redirect = navigation.navigate('homestack');
    // }
    // else {
    //     redirect = navigation.navigate('authstack');
    // }

    // console.log(auth)

    return (
        <View style={{alignItems:'center', flex:1,justifyContent:'center' }}>
           <ActivityIndicator size="large" color="#2CB9B0"  />
        </View>
    )
};
export default BigStack