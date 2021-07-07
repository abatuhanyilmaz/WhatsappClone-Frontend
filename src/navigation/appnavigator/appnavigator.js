import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../actions/auth/auth';

import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// IMPORT SCREENS
import Welcome from '../../screens/auth/welcome';
import Home from '../../screens/home/home';
import Verification from '../../screens/auth/verification';
import Wrapper from '../../screens/stack/bigstack';
import ChatTab from '../../components/chattab/chat';
import ChatScreen from '../../components/chattab/chatscreen';
import Settings from '../../screens/home/settings';
import Profile from '../../screens/home/profile';
import Account from '../../screens/home/account';
import Chat from '../../screens/home/chat';
import Notifications from '../../screens/home/notifications';
import Privacy from '../../screens/home/privacy';
import SelectContact from '../../screens/home/selectcontact';
import UserChatDetail from '../../screens/home/userchatdetail';



const stackNav = createStackNavigator();

const AuthStack = () => (
    <stackNav.Navigator
        initialRouteName='welcome'>
        <stackNav.Screen name='welcome' component={Welcome}></stackNav.Screen>
        <stackNav.Screen name='verification' component={Verification}></stackNav.Screen>
    </stackNav.Navigator>
)


const ChatStack = () => (
    <stackNav.Navigator
        initialRouteName='chat'>
        <stackNav.Screen name='chat' component={ChatTab}></stackNav.Screen>
        <stackNav.Screen name='chatscreen' component={ChatScreen}></stackNav.Screen>
    </stackNav.Navigator>
)




const HomeStack = ({ props }) => (
    <stackNav.Navigator
        initialRouteName='home'>
        <stackNav.Screen name='home' component={Home}></stackNav.Screen>
        <stackNav.Screen name='chatscreen' component={ChatScreen}></stackNav.Screen>
        <stackNav.Screen name='settings' component={Settings}></stackNav.Screen>
        <stackNav.Screen name='profile' component={Profile}></stackNav.Screen>
        <stackNav.Screen name='account' component={Account}></stackNav.Screen>
        <stackNav.Screen name='chat' component={Chat}></stackNav.Screen>
        <stackNav.Screen name='notifications' component={Notifications}></stackNav.Screen>
        <stackNav.Screen name='privacy' component={Privacy}></stackNav.Screen>
        <stackNav.Screen name='selectcontact' component={SelectContact}></stackNav.Screen>
        <stackNav.Screen name='userchatdetail' component={UserChatDetail}></stackNav.Screen>

    </stackNav.Navigator>
)

const BigStack = ({props}) => (
    <stackNav.Navigator
     screenOptions={{
    headerShown: false
  }}
        initialRouteName='bigstack'>
             <stackNav.Screen name='bigstack' component={Wrapper}></stackNav.Screen>
        <stackNav.Screen name='homestack' component={HomeStack}></stackNav.Screen>
        <stackNav.Screen name='authstack' component={AuthStack}></stackNav.Screen>
    </stackNav.Navigator>
)



const NavContainer = ({ navigation }) => {
  

    return (
        <NavigationContainer>
           <BigStack/>
        </NavigationContainer>
    )
}

export default NavContainer;









