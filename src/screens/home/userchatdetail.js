import React,{useEffect} from 'react';
import {SafeAreaView,StyleSheet,ScrollView, View,Text,StatusBar, Button, ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const UserChatDetails =  ({ props, navigation, gotoChatScreen }) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);
    return(
        <View>
            <ImageBackground style={{width:'100%',  height:300}} source={require('../../assets/images/user.png')}>
               <View style={styles.ViewCont}>
                   <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                      <AntDesign name='arrowleft' color='#2CB9B0' size={25} onPress={()=>navigation.goBack()} style={{fontWeight:'bold'}} />
                      <Entypo name='dots-three-vertical' color='#2CB9B0' size={22} style={{fontWeight:'bold'}} />
                   </View>
                   <View style={{marginTop:235}}>
                       <Text style={{color:'black', fontWeight:'bold', fontSize:25}}>Desire</Text>
                   </View>
               </View>
            </ImageBackground>

            <View style={{backgroundColor:'#e8e9eb'}}>

                <View style={{backgroundColor:'white', marginTop:10,  padding:10}}>
                  <Text style={{color:'#2CB9B0'}}>About and phone number</Text>
                  <Text style={{marginTop:10,fontSize:17 }}>Hey am using whatssap</Text>
                  <Text style={{color:'#888'}}>25 august</Text>
                </View>
                <View style={{borderBottomColor:'#ccc', borderBottomWidth:0.5}} />

                <View style={{backgroundColor:'white', elevation:2, borderColor:'#888', padding:10, flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontSize:17}}>+90 539 246 2904</Text>
                        <Text style={{color:'#888'}}>Mobile</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <MaterialCommunityIcons  name="android-messages" color='#2CB9B0' style={{marginRight:20}} size={22} />
                      <Ionicons name='call' color='#2CB9B0' style={{marginRight:20}} size={20} />
                      <FontAwesome name='video-camera' style={{marginRight:10}} color='#2CB9B0' size={20} />
                    </View>
                </View>

            </View>
            
            <View style={{flexDirection:'row', marginTop:15, alignItems:'center', backgroundColor:'white', elevation:2, borderColor:'#888', padding:10,}}>
                <Entypo name='block' color='red' size={22} />
                <Text style={{color:'red', fontSize:18, marginLeft:20 }}>Block</Text>
                
            </View>
           
            <View style={{flexDirection:'row', marginTop:15, alignItems:'center', backgroundColor:'white', elevation:2, borderColor:'#888', padding:10,}}>
                <AntDesign name='dislike1' color='red' size={22} />
                <Text style={{color:'red', fontSize:18, marginLeft:20 }}>Report contact </Text>
                
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
    ViewCont:{
       margin:15,
       flexDirection:'column'
    }



})
export default UserChatDetails;