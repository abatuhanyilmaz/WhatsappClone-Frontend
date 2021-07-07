import React, { useEffect, useRef, useState } from 'react';
import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, ImageBackground, TextInput, KeyboardAvoidingView,
    Dimensions, FlatList, Platform, Keyboard, KeyboardEvent, TouchableOpacity
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as homeActions from '../../actions/home/home';
import jwt_decode from "jwt-decode";
import socketIOClient from 'socket.io-client';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';



import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider
} from 'react-native-popup-menu';



// export const useKeyboard = (didShow?: (keyboardHeight?:number) => void, didHide?: () => void): [number] => {
//     const [keyboardHeight, setKeyboardHeight] = useState(0);

//     const onKeyboardDidShow = (e) => {
//       setKeyboardHeight(e.endCoordinates.height);
//       if (typeof didShow === "function") {
//         didShow(e.endCoordinates.height);
//       }
//     }

//     const onKeyboardDidHide = () => {
//       setKeyboardHeight(0);
//       if (typeof didHide === "function") {
//         didHide(0);
//       }
//     }

//     useEffect(() => {
//       Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
//       Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
//       return () => {
//         Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
//         Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
//       };
//     }, []);

//     return [keyboardHeight];
//   };


const ChatScreen = ({ props, navigation }) => {
  

    const [keyboardHeight, setKeyboardHeight] = useState(0);

    const [messagesText, setMessageText] = useState('');
    const [messageBouton, setMessageBouton] = useState(false);
    const screenuserdetail = useSelector(state => state.home.screenuserdetail);

 
    const data = useSelector(state => state.home.data);
    const token = useSelector(state => state.auth.token)

    const dispatch = useDispatch();

    let socket = socketIOClient('https://whatssapclone.herokuapp.com/');
   
    useEffect(() => {
        scrollEnd()
        
        navigation.setOptions({
            headerShown: false
        });
        let decodedToken = jwt_decode(token);
        socket.emit('user_connected', decodedToken.userdata.id)

        socket.on('new_message', (message) => {
           console.log(message)
            dispatch(homeActions.sendMessage(message));
        })
       
    }, []);

    
  

    const refList = useRef(data)

    const handleMessage = (e) => {
        setMessageText(e)
        console.log(messagesText)
    }


    const sendMessage = () =>{ 
        let decodedToken = jwt_decode(token);
        const message = { id: decodedToken.userdata.id, senderId:decodedToken.userdata.id, receiverId:screenuserdetail.id,  message: messagesText}

        socket.emit('send_message', message)

        console.log(decodedToken.userdata.id)
        dispatch(homeActions.sendMessage(message));
        scrollEnd()
        setMessageText('');
    }

    // const data = [{ id: 1, message: "hehellohellohellohellohellohellohellohellohellohellohellohellohellohellollo" }, { id: 2, message: "helqweqweqweqweqweqweqweqwelo" },
    // { id: 1, message: "hello" }, { id: 2, message: "hehellohellohellohellohellohellohellohellohellohellohellohellohellohellollo" },
    // { id: 1, message: "hello" }, { id: 2, message: "hehellohellohellohellohellohellohellohellohellohellohellohellohellohellollo" }
    //     , { id: 1, message: "fatih" },
    // { id: 1, message: "fatih" },
    // { id: 2, message: "fatih" }
    // ]

    const renderChat = ({ item, goToChatUserDetail }) => {
        let decodedToken = jwt_decode(token);
        console.log(item)
        if (item.id !== decodedToken.userdata.id) {

            return (
                <View style={{ alignItems: "flex-start", marginLeft: 10, marginTop: 15 }}>
                    <View style={{ backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 10, borderTopStartRadius: 15, borderTopEndRadius: 15, borderBottomEndRadius: 15 }}>
                        <Text style={{ color: "gray", fontWeight: "bold", letterSpacing: 0.5, maxWidth: Dimensions.get("window").width * 0.42 }}>{item.message}</Text>
                        <View style={{ alignItems: "flex-end", marginTop: 5 }}>
                            <Text style={{ fontSize: 10, color: "#888" }}>12:30</Text>
                        </View>
                    </View>

                </View>
            )
        } else {

            return (
                <View style={{ alignItems: 'flex-end', marginRight: 10, marginTop: 15 }}>
                    <View style={{ backgroundColor: "#2CB9B0", paddingHorizontal: 20, paddingVertical: 10, borderTopStartRadius: 15, borderTopEndRadius: 15, borderBottomStartRadius: 15 }}>
                        <Text style={{ color: "white", fontWeight: "bold", letterSpacing: 0.5, maxWidth: Dimensions.get("window").width * 0.42 }}>{item.message}</Text>
                        <View style={{ alignItems: "flex-end", marginTop: 5 }}>
                            <Text style={{ fontSize: 10, color: "white" }}>12:30</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }

    const scrollEnd = () => {
        refList.current.scrollToEnd({ animated: true })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>


            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../assets/images/wallpaper7.jpg')}>
                <MenuProvider>
                    <View style={styles.container}>
                        <View style={{ backgroundColor: '#2CB9B0', height: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                            <TouchableOpacity onPress={() => { navigation.navigate('userchatdetail') }}>
                                <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>

                                    <AntDesign {...props} name='arrowleft' size={25} onPress={() => navigation.goBack()} color='white' />
                                    <Image source={require('../../assets/images/user.png')} style={{ width: 30, height: 30, marginLeft: 10 }} />
                                    <View style={{ marginTop: 15 }}>
                                        <Text style={{ color: 'white', fontSize: 20, marginLeft: 10 }}>{screenuserdetail.name}</Text>
                                        <Text style={{ color: 'white', fontSize: 15, marginLeft: 10 }}>Online</Text>

                                    </View>
                                </View>
                            </TouchableOpacity>




                            <View style={{ flexDirection: 'row', margin: 0, alignItems: 'center' }}>
                                <FontAwesome {...props} name='video-camera' style={{ marginRight: 20 }} size={25} onPress={() => alert('This is a!')} color='white' />

                                <Ionicons {...props} name='call' style={{ marginRight: 20 }} size={25} onPress={() => alert('This is a!')} color='white' />
                                <Menu>
                                    <MenuTrigger>
                                        <Entypo {...props} name='dots-three-vertical' style={{ marginRight: 10 }} size={20} color='white' />
                                    </MenuTrigger>

                                    <MenuOptions>
                                        <MenuOption style={{ height: 35 }} onSelect={() => alert(`Save`)} text='New group' />
                                        <MenuOption style={{ height: 35 }} onSelect={() => alert(`Not called`)} text='New brodcast' />
                                        <MenuOption style={{ height: 35 }} onSelect={() => alert(`Not called`)} text='Starred messages' />
                                        <MenuOption style={{ height: 35 }} onSelect={() => alert(`Not called`)} text='Settings' />
                                    </MenuOptions>


                                </Menu>

                            </View>


                        </View>


                        <View style={{ flex: 1, paddingBottom: 10 }}>
                            {/* {console.log(keyboardHeight , "selam")}
                        <KeyboardAvoidingView 
                            behavior="padding"
                            keyboardVerticalOffset={Platform.select({
                                ios : 0,
                                android  : -keyboardHeight + 115
                            })}

                           > */}

                            {/* <View style={{width: Dimensions.get('window').width}}>
                                <Text style={{ backgroundColor: 'red', position: 'absolute', maxWidth: '50%', padding: 10, flexWrap: 'wrap', flex: 1, borderRadius: 10, marginBottom:20 }}>hghfbhjkhwfur</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ backgroundColor: 'red', position: 'absolute', maxWidth: '50%', padding: 10, flexWrap: 'wrap', flex: 1, borderRadius: 10 }}>hello</Text>
                            </View> */}

                            <View style={{ flex: 1 }}>
                                <FlatList
                                    ref={refList}
                                    style={{ flex:1, marginBottom:15}}
                                    contentContainerStyle={{ width: Dimensions.get("window").width }}
                                    data={data}
                                    keyExtractor={(_, index) => index.toString()}
                                    renderItem={renderChat}
                                    onContentSizeChange={()=>refList.current.scrollToEnd()}
                                

                                />
                            </View>


                            <View style={{ width: '95%', alignSelf: "center" }}>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <View style={{ width: '65%' }}>
                                        <TextInput value={messagesText} onChangeText={handleMessage} backgroundColor='white' style={{ borderColor: '#ccc', borderRadius: 60, padding: 15, height: 45, fontSize: 18 }} />
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View>
                                            <Entypo {...props} name='attachment' style={{ marginRight: 13, fontWeight: 'bold' }} size={20} color='#888' />
                                        </View>

                                        <View>
                                            <Entypo {...props} name='camera' style={{ marginRight: 13 }} size={20} color='white' color='#888' />
                                        </View>
                                        {
                                            messagesText.length > 0 ?
                                                <TouchableOpacity onPress={sendMessage}>
                                                    <View style={{ backgroundColor: '#2CB9B0', borderRadius: 50, width: 45, height: 45 }}>
                                                        <Ionicons {...props} name='send' style={{ margin: 12, marginLeft: 17 }} size={20} color='white' />
                                                    </View>
                                                </TouchableOpacity>

                                                :
                                                <View style={{ backgroundColor: '#2CB9B0', borderRadius: 50, width: 45, height: 45 }}>
                                                    <Foundation {...props} name='microphone' style={{ margin: 12, marginLeft: 17 }} size={20} color='white' />
                                                </View>

                                        }


                                    </View>

                                </View>
                            </View>


                            {/* </KeyboardAvoidingView> */}

                        </View>


                    </View>
                </MenuProvider>
            </ImageBackground>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

});

export default ChatScreen;