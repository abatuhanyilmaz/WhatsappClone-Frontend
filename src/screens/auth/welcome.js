import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar, Image, StyleSheet, TextInput, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../actions/auth/auth';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';





const Welcome = ({ props, navigation }) => {

    const [country, setCountry] = useState('');
    const [countryCode, setCountryCode] = useState(null);
    const [valid, setValid] = useState(null);
    const [number, setNumber] = useState(null);


    const loading = useSelector(state => state.auth.loading);
    const registrationstatus = useSelector(state => state.auth.registrationstatus);


    const dispatch = useDispatch();

    const handleNumber = (e) => {
        setValid(false)
        setNumber(e)
    }

    const handleValidation = (e) => {
        let platform = null;
        if (Platform.OS === 'android') {
            platform = 'android';
        }
        else {
            platform = 'ios'
        }

        if (country !== '' && number.toString().length === 10) {
            // setValid(false)
            let countryValue = null;
            let numberValue = null;
            numberValue = number.toString();
            countryValue = country.callingCode[0].toString();
            countryValue = countryValue.concat(numberValue);
            console.log(countryValue);
            dispatch(authActions.registrationService(countryValue, platform))
            // navigation.navigate('verification');
        }
        else {
            setValid(true)
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    const OnSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
        setValid(false)
    }


    const auth = useSelector(state => state.auth.auth);
    let redirect = null;

    
   

    let authRedirect = null;

   
 if(registrationstatus)
   {
        authRedirect =  navigation.navigate('verification');
    } 

    return (
        <View style={styles.container}>
            {authRedirect}
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="#2CB9B0"
                translucent={false}
                networkActivityIndicatorVisible={true}
            />
            <View>
                <Image style={styles.images} source={require('../../assets/images/banner.png')} />
            </View>

            <View style={styles.numberContainer}>
                <View style={styles.country}>
                    <CountryPicker
                        {...{
                            countryCode: countryCode,
                            withFilter: true,
                            withFlag: true,
                            withCountryNameButton: true,
                            withAlphaFilter: true,
                            withCallingCode: true,
                            withEmoji: true,
                            onSelect: OnSelect
                        }}

                    />
                </View>
                <View >
                    <TextInput value={number} onChangeText={handleNumber} placeholder='EX:555555' borderBottomColor='#2CB9B0' maxLength={10} keyboardType='numeric' borderBottomWidth={3} style={styles.country2} />
                </View>
                {
                    valid ? <View >
                        <Text style={{ color: 'red' }}>Please check your infos!</Text>
                    </View> :
                        null
                }
            </View>

            {
                loading ? <ActivityIndicator size="large" color="#2CB9B0" />
                    :
                    <TouchableOpacity onPress={handleValidation}>
                        <View style={styles.buttonStyle}>
                            <Text style={{ fontSize: 20, textAlign: 'center', flexGrow: 2, margin: 8, color: 'white' }}>Next</Text>
                            <AntDesign name='arrowright' color='white' style={{ margin: 8 }} size={20} />
                        </View>
                    </TouchableOpacity>
            }




        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    images: {
        resizeMode: 'contain',
        width: '100%'
    },
    numberContainer: {
        margin: 20
    },
    country: {
        borderBottomColor: '#2CB9B0',
        borderBottomWidth: 3,
        marginTop: -15
    },

    country2: {
        paddingTop: 20,
        fontSize: 18
    },

    buttonStyle: {
        margin: 40,
        flexDirection: 'row',
        backgroundColor: '#2CB9B0',
        alignItems: 'center',

        borderRadius: 20
    },

    buttonStyleNoActiv: {
        margin: 40,
        flexDirection: 'row',
        backgroundColor: '#ccc',
        alignItems: 'center',
        borderRadius: 20
    }

});

export default Welcome;