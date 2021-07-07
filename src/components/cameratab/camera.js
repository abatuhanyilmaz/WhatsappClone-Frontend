import React, { useEffect, useState, useRef } from 'react';
import { RNCamera } from 'react-native-camera';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Camera = ({ props, navigation }) => {
    // useEffect(() => {
    //     console.log(navigation);
    //     navigation.setOptions({
    //         headerShown: false
    //     });
    // }, []);

    const cameraRef = useRef(null)
    const [flash, setFlash] = useState(true)
    const [cameratype, setCameraType] = useState(true)

    const flashMode = () => {
        setFlash(!flash)
    }
    const cameraType = () => {
        setCameraType(!cameratype)
    }

    const takePicture = async () => {
        if (cameraRef) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            console.log(data.uri);
        }
    };


    return (
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="#2CB9B0"
                translucent={false}
                networkActivityIndicatorVisible={true}
            />
            <View style={styles.container}>
                <RNCamera
                    style={{ flex: 1, alignItems: 'center' }}
                    ref={cameraRef}

                    style={styles.preview}
                    type={cameratype ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
                    flashMode={flash ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    
                >
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            flash ? <TouchableOpacity onPress={flashMode} >
                                <FontAwesome name='flash' size={25} color='white' />
                            </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={flashMode} >
                                    <Ionicons name='flash-off' size={25} color='white' />
                                </TouchableOpacity>

                        }

                        <TouchableOpacity onPress={takePicture} style={styles.capture}>
                            <Entypo name='circle' size={70} color='white' />
                            <Text style={{ marginTop: 10, color: 'white' }}>Hold for video , Tap for picture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={cameraType}>
                            <Feather name='camera' size={25} color='white' />
                        </TouchableOpacity>
                    </View>
                </RNCamera>


            </View>


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },

    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        alignItems: 'center',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },

});

export default Camera;