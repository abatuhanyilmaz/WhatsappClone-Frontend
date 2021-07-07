import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper'

const Privacy = ({ props, navigation, gotoChatScreen }) => {
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
            <View style={styles.ViewContainer}>
                <Text style={{ color: '#2CB9B0' }}>Who can see my personal info</Text>

                <Text style={{ color: '#888' }}>if you don't share your last seen, you won't be able to see othwe people's last seen</Text>
            </View>
            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                <View style={styles.ViewContainer2}>
                    <Text style={{ fontSize: 16 }}>Last seen</Text>
                    <Text style={{ color: '#888' }}>Nobody</Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setModalVisible(true)}>
            <View style={styles.ViewContainer2}>
                <Text style={{ fontSize: 16 }}>Profile photo</Text>
                <Text style={{ color: '#888' }}>My contacts</Text>

            </View>
            </TouchableOpacity>
           
         <TouchableOpacity onPress={()=>setModalVisible(true)}>
         <View style={styles.ViewContainer2}>
                <Text style={{ fontSize: 16 }}>About</Text>
                <Text style={{ color: '#888' }}>My contacts</Text>

            </View>

         </TouchableOpacity>
           
            <Modal isVisible={isModalVisible}
            onBackdropPress={()=>setModalVisible(false)}>
                <View style={{ backgroundColor: 'white', padding:20 }}>
                    <View>
                        <Text style={{fontSize:23}}>Last seen</Text>
                    </View>

                    <View style={{flexDirection:'row', alignItems:'center',marginTop:10}}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => {setChecked('first')
                        }}
                        />
                        <Text style={{fontSize:20}}> Everyone</Text>

                    </View>

                    <View style={{flexDirection:'row', alignItems:'center',marginTop:10}}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={{fontSize:20}}>My contacts</Text>

                    </View>

                    <View style={{flexDirection:'row', alignItems:'center',marginTop:10}}>
                        <RadioButton
                            value="third"
                            status={checked === 'third' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('third')}
                        />
                        <Text style={{fontSize:20}}>Nobody</Text>

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
    ViewContainer: {
        margin: 20
    },
    ViewContainer2: {
        marginTop: 10,
        margin: 20
    }
})
export default Privacy;