import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';



const Account = ({ props, navigation, gotoChatScreen }) => {
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
        <View style={styles.Container}>
           
           <TouchableOpacity onPress={()=> navigation.navigate('privacy')}>
           <View style={styles.viewContainer}>
                <View>
                    <Fontisto name='locked' size={22} color='#2CB9B0' />
                </View>
                <View style={{ marginLeft: 25 }}>
                    <Text style={{ fontSize: 18 }}>Privacy</Text>
                </View>
            </View>

           </TouchableOpacity>
           
            <View style={styles.viewContainer2}>
                <View>
                    <MaterialCommunityIcons name='security' size={22} color='#2CB9B0' />
                </View>
                <View style={{ marginLeft: 25 }}>
                    <Text style={{ fontSize: 18 }}>Security</Text>
                </View>
            </View>

            <View style={styles.viewContainer2}>
                <View>
                    <Feather name='edit' size={22} color='#2CB9B0' />
                </View>
                <View style={{ marginLeft: 25 }}>
                    <Text style={{ fontSize: 18 }}>Change Number</Text>
                </View>
            </View>

            <View style={styles.viewContainer2}>
                <View>
                    <Feather name='file-text' size={22} color='#2CB9B0' />
                </View>
                <View style={{ marginLeft: 25 }}>
                    <Text style={{ fontSize: 18 }}>Request Account Info</Text>
                </View>
            </View>

            <View style={styles.viewContainer2}>
                <View>
                    <MaterialCommunityIcons name='delete' size={22} color='#2CB9B0' />
                </View>
                <View style={{ marginLeft: 25 }}>
                    <Text style={{ fontSize: 18 }}>Delete my account</Text>
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
    viewContainer: {
        flexDirection: 'row',
        margin: 30,
        alignItems: 'center'
    },
    viewContainer2:{
        flexDirection: 'row',
        margin: 30,
        alignItems: 'center',
        marginTop:10
    }
})
export default Account;