import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image , TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Settings = ({ props, navigation, gotoChatScreen }) => {
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
            <TouchableOpacity onPress={()=> navigation.navigate('profile')}>
            <View style={styles.StatusContainer}>
                <View>
                    <Image source={require('../../assets/images/user.png')} style={{width:58, height:58}} />
                </View>
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:20}}>Desire Boutchoue</Text>
                    <Text style={{color:'#888'}}>Protect your peace...</Text>
                </View>

            </View>
            </TouchableOpacity>
           
            <View style={{borderBottomColor:'#ccc', borderBottomWidth:0.5}} />

           <TouchableOpacity onPress={()=> navigation.navigate('account')}>
           <View style={styles.ViewCont}>
                <View>
                  <MaterialCommunityIcons name='account-key' color='#2CB9B0' size={27} />
                </View>
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:17}}>Account</Text>
                    <Text style={{color:'#888'}}>Privacy, security, chat history</Text>
                </View>
            </View>
           </TouchableOpacity>
           
           <TouchableOpacity onPress={()=> navigation.navigate('chat')}>
           <View style={styles.ViewCont}>
                <View>
                  <MaterialCommunityIcons name='android-messages' color='#2CB9B0' size={27} />
                </View>
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:17}}>Chat</Text>
                    <Text style={{color:'#888'}}>Theme, Group, chat history</Text>
                </View>

            </View>
           </TouchableOpacity>
           
           <TouchableOpacity onPress={()=>navigation.navigate('notifications')}>
           <View style={styles.ViewCont}>
                <View>
                  <Ionicons name='notifications' color='#2CB9B0' size={20} />
                </View>
                <View style={{marginLeft:20}} >
                    <Text>Notifications</Text>
                    <Text style={{color:'#888'}}>Message, group & call tones</Text>
                </View>

            </View>

           </TouchableOpacity>
            

            <View style={styles.ViewCont}>
                <View>
                  <Feather name='help-circle' color='#2CB9B0' size={20} />
                </View>
                <View style={{marginLeft:20}}>
                    <Text>Help</Text>
                    <Text style={{color:'#888'}}>FAQ, contact us, privacy policy</Text>
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
    StatusContainer: {
        flexDirection:'row',
        margin:15,
        alignItems:'center'
    },
    ViewCont:{
        flexDirection:'row',
        margin:20,
        alignItems:'center'
    }
});
export default Settings;