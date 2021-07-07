import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper'

const Chats = ({ props, navigation, gotoChatScreen }) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [checked, setChecked] = useState('first');



    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
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
            <View style={{ margin: 25 }}>
                <Text style={{ color: '#2CB9B0' }}>Display</Text>
            </View>

            <TouchableOpacity onPress={()=> setModalVisible(true)}>
                <View style={styles.viewContainer} >
                    <View>
                        <FontAwesome name='star-half-full' color='#2CB9B0' size={22} />
                    </View>
                    <View style={{ marginLeft: 25 }}>
                        <Text>Theme</Text>
                        <Text style={{ color: '#888' }}>Light</Text>
                    </View>

                </View>
            </TouchableOpacity>


            <View style={styles.viewContainer} >
                <View>
                    <MaterialCommunityIcons name='wallpaper' color='#2CB9B0' size={22} />
                </View>
                <View style={{ marginLeft: 25 }}>
                    <Text>Wallpaper</Text>

                </View>

            </View>
            <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 0.5 }} />

            <View style={styles.viewContainer2} >
                <View>
                    <MaterialIcons name='backup' color='#2CB9B0' size={22} />
                </View>
                <View style={{ marginLeft: 25 }}>
                    <Text>Chat backup</Text>

                </View>

            </View>

            <View style={styles.viewContainer} >
                <View>
                    <FontAwesome name='history' color='#2CB9B0' size={22} />
                </View>
                <View style={{ marginLeft: 25 }}>
                    <Text>Chat History</Text>

                </View>

            </View>

            <Modal isVisible={isModalVisible}
            onBackdropPress={()=>setModalVisible(false)}>
                <View style={{ backgroundColor: 'white', padding:20 }}>
                    <View>
                        <Text style={{fontSize:23}}>Choose theme</Text>
                    </View>

                    <View style={{flexDirection:'row', alignItems:'center',marginTop:10}}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => {setChecked('first')
                        }}
                        />
                        <Text style={{fontSize:20}}> Light</Text>

                    </View>

                    <View style={{flexDirection:'row', alignItems:'center',marginTop:10}}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={{fontSize:20}}>Dark</Text>

                    </View>

                    <View style={{flexDirection:'row', alignItems:'center',marginTop:30, justifyContent:'flex-end'}}>
                       <TouchableOpacity onPress={()=>setModalVisible(false)}>
                       <View style={{marginRight:25}}>
                       <Text style={{color:'#2CB9B0'}}>CANCEL</Text>
                       </View>
                       </TouchableOpacity>
                       
                       <TouchableOpacity onPress={()=>setModalVisible(false)}>
                       <View>
                       <Text style={{color:'#2CB9B0'}}>OK</Text>
                       </View>
                       </TouchableOpacity>
                      

                    </View>

                </View>
            </Modal>

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
        margin: 25,
        alignItems: 'center',
        marginTop: -8,
        marginBottom: 30
    },
    viewContainer2: {
        flexDirection: 'row',
        margin: 25,
        alignItems: 'center',

        marginBottom: 30
    }
})
export default Chats;