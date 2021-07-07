import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';


const Profile = ({ props, navigation, gotoChatScreen }) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2CB9B0',
            },

        });
    }, []);
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', marginTop: 45 }}>
                <Image source={require('../../assets/images/user.png')} style={{ width: 110, height: 110 }} />
            </View>


            <View style={styles.viewCont}>

                <View>
                    <FontAwesome name='user' color='#2CB9B0' size={25} />
                </View>

                <View style={{ flex: 2, marginLeft: 30 }}>
                    <Text style={{ color: '#888' }}>Name</Text>
                    <Text style={{ fontSize: 20 }}>Desire Boutchoue</Text>
                </View>

                <View style={{ marginRight: 0 }}>
                    <MaterialIcons name='edit' color='#2CB9B0' size={25} />
                </View>

            </View>
            <View style={{ marginTop: -30, marginLeft: 40, marginRight: 40 }}>
                <Text style={{ color: '#888', textAlign: 'center' }}>This is not your username or pin. This name will be visible to your whatssap contacts.</Text>
            </View>

            <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 0.5, marginTop: 15 }} />

            <View style={styles.viewCont2}>

                <View>
                    <Feather name='info' color='#2CB9B0' size={25} />
                </View>

                <View style={{ flex: 2, marginLeft: 30 }}>
                    <Text style={{ color: '#888' }}>About</Text>
                    <Text style={{ fontSize: 20 }}>Protect your peace...</Text>
                </View>

                <View style={{ marginRight: 0 }}>
                    <MaterialIcons name='edit' color='#2CB9B0' size={25} />
                </View>

            </View>
            <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 0.5 }} />

            <View style={styles.viewCont2}>

                <View>
                    <FontAwesome name='phone' color='#2CB9B0' size={25} />
                </View>

                <View style={{ flex: 2, marginLeft: 30 }}>
                    <Text style={{ color: '#888' }}>Phone</Text>
                    <Text style={{ fontSize: 20 }}>+90 539 246 29 04</Text>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    viewCont: {
        flexDirection: 'row',
        margin: 40,
        alignItems: 'center',

    },
    viewCont2: {
        flexDirection: 'row',
        margin: 40,
        alignItems: 'center',
        marginTop: 20
    }
})
export default Profile;