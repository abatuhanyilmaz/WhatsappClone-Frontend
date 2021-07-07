import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, PermissionsAndroid, FlatList, ActivityIndicator } from 'react-native';
import Contacts from 'react-native-contacts';
import { useDispatch, useSelector } from 'react-redux';
import * as userAction from '../../actions/home/home';
import jwt_decode from "jwt-decode";
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider
} from 'react-native-popup-menu';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SelectContact = ({ props, navigation, gotoChatScreen }) => {

    const [contacts, setContacts] = useState([])
    const [contactCount, setContactCount] = useState(0);
    const token = useSelector(state => state.auth.token)

    const dispatch = useDispatch();

    const contact = useSelector(state => state.home.contact);
    const redirecttochat = useSelector(state => state.home.redirecttochat);

    let decodedToken = jwt_decode(token);


    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });

        dispatch(userAction.getContactUserService())

        // const permission = PermissionsAndroid.request(
        //     PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        //     {
        //         'title': 'Contacts',
        //         'message': 'This app would like to view your contacts.',
        //         'buttonPositive': 'Please accept bare mortal'
        //     }
        // )

        // if (permission) {
        //     Contacts.getAll()
        //         .then(data => {
        //             setContacts(data)
        //             console.log(data)
        //         })
        //         .then(()=>{
        //             return Contacts.getCount()
        //         })
        //         .then((count)=>{
        //            setContactCount(count)
        //         })
        // }
    }, []);


    let redirect = null;
    if(redirecttochat)
    {
        redirect = navigation.navigate('chatscreen')
    }

    return (
        <MenuProvider>

               {redirect}
            <View style={styles.container}>
                <View style={{ backgroundColor: '#2CB9B0', height: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign {...props} name='arrowleft' size={25} onPress={() => navigation.goBack()} color='white' />

                        <View style={{ marginTop: 15, marginLeft: 20 }}>
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 10 }}>Select contact</Text>
                            <Text style={{ color: 'white', fontSize: 15, marginLeft: 10 }}>{contact.length - 1} contacts</Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 0, alignItems: 'center' }}>
                        <EvilIcons {...props} name='search' style={{ marginRight: 20 }} size={27} onPress={() => alert('This is a!')} color='white' />


                        <Menu>
                            <MenuTrigger>
                                <Entypo {...props} name='dots-three-vertical' style={{ marginRight: 10 }} size={20} color='white' />
                            </MenuTrigger>

                            <MenuOptions>
                                <MenuOption style={{ height: 35 }} onSelect={() => alert(`Save`)} text='Invite a friend' />
                                <MenuOption style={{ height: 35 }} onSelect={() => alert(`Not called`)} text='Contacts' />
                                <MenuOption style={{ height: 35 }} onSelect={() => alert(`Not called`)} text='Refresh' />
                                <MenuOption style={{ height: 35 }} onSelect={() => alert(`Not called`)} text='Help' />
                            </MenuOptions>


                        </Menu>

                    </View>


                </View>

                <ScrollView>


                    <View style={{ flexDirection: 'row', margin: 15, alignItems: 'center' }}>

                        <View style={{ backgroundColor: '#2CB9B0', borderRadius: 50, width: 45, height: 45 }}>
                            <FontAwesome color='white' style={{ alignSelf: 'center', marginTop: 10, }} size={20} name='users' />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 18 }}>New group</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', margin: 15, alignItems: 'center', marginTop: 5 }}>

                        <View style={{ backgroundColor: '#2CB9B0', borderRadius: 50, width: 45, height: 45 }}>
                            <FontAwesome color='white' style={{ alignSelf: 'center', marginTop: 10, }} size={20} name='users' />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 18 }}>New contact</Text>
                        </View>
                    </View>


                    {
                        contact.length > 0 ?
                            contact.map((item, index) => {

                                // console.log(item.phoneNumbers)
                                if (item) {

                                    if (item.id !== decodedToken.userdata.id) {
                                        return (

                                            <TouchableOpacity key={index} onPress={ ()=>dispatch(userAction.getChatScreenUserDetail(item)) }>
                                                <View  style={{ flexDirection: 'row', margin: 15, alignItems: 'center', marginTop: 5 }}>

                                                    <View style={{ backgroundColor: '#2CB9B0', borderRadius: 50, width: 45, height: 45 }}>
                                                        <Image source={require('../../assets/images/user.png')} style={{ width: 50, height: 50 }} />
                                                    </View>
                                                    <View style={{ marginLeft: 20 }}>
                                                        <Text style={{ fontSize: 18 }}>{item.name}</Text>
                                                        {/* <Text style={{ fontSize: 15, color:'#888' }}>{item.phoneNumbers.length >0 ? item.phoneNumbers[0].number : 'null' }</Text>   */}
                                                    </View>
                                                </View>

                                            </TouchableOpacity>

                                        )
                                    }
                                    else {
                                        return null;
                                    }

                                }
                                else {
                                    <ActivityIndicator size="large" color="#2CB9B0" />
                                }

                            })
                            :
                            <ActivityIndicator size="large" color="#2CB9B0" />
                    }




                </ScrollView>

            </View>

        </MenuProvider>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

});
export default SelectContact;