import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Image, TouchableOpacity, Button , ActivityIndicator} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../actions/auth/auth';
import Modal from 'react-native-modal';


const Verification = ({ props, navigation }) => {

    const refValue1 = useRef('input_1');
    const refValue2 = useRef('input_2');
    const refValue3 = useRef('input_3');
    const refValue4 = useRef('input_4');


    const [value1, setValue1] = useState(null)
    const [value2, setValue2] = useState(null)
    const [value3, setValue3] = useState(null)
    const [value4, setValue4] = useState(null)
    const [valid, setValid] = useState(null);
    const [validd, setValidd] = useState(null);

    const [isModalVisible, setModalVisible] = useState(false);
    const [nom, setNom] = useState('');
    const [surname, setSurname] = useState('');



    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const loading = useSelector(state => state.auth.loading);
    const auth = useSelector(state => state.auth.auth);

    const registrationdata = useSelector(state => state.auth.registrationdata);


    const dispatch = useDispatch();



    useEffect(() => {
        navigation.setOptions({
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2CB9B0'
            },
        });
        dispatch(authActions.cancelRegistrationSuccess())

    }, []);

    let code = null;
    const handleValue1 = (e) => {

        refValue2.current.focus();
        setValue1(e);
    }
    const handleValue2 = (e) => {

        refValue3.current.focus();
        setValue2(e);

    }
    const handleValue3 = (e) => {

        refValue4.current.focus();
        setValue3(e);

    }
    const handleValue4 = (e) => {

        setValue4(e);
        let code = value1 + value2 + value3 + e

        console.log(registrationdata)

        if (code.toString() === registrationdata.code) {
            //dispatch(authActions.verificationService(registrationdata.id,registrationdata.code,nom, surname))
            setModalVisible(true);
        }
        else {
            setValid(true)
        }
        console.log(code)
    }


    const handleNom = (e) => {
        setValidd(false)
        setNom(e)
    }

    const handleSurname = (e) => {
        setValidd(false)
        setSurname(e)
    }

    const handleSubmit = () => {
        if(nom!=='' && nom.trim() !=='' && surname !=='' && surname.trim()!=='')
        {
            setModalVisible(false);
            dispatch(authActions.verificationService(registrationdata.id,registrationdata.code,nom, surname))

          
           
        }
        else{
            setValidd(true)
           
        }

    }



    let authRedirect = null ;

    if(auth){
       
        navigation.navigate('homestack') 
       
    }
    
  

  

    return (
        <View style={styles.container} >
            {authRedirect}
            <View>
                <Image style={styles.images} source={require('../../assets/images/verification.png')} />
            </View>
            <View style={styles.sousContainer}>

                <View style={styles.textStyles}>
                    <Text style={styles.text}>
                        Please type the number you received by SMS
                    </Text>
                </View>

                <View style={styles.inputContainer}>

                    <TextInput ref={refValue1} onChangeText={handleValue1} value={value1} borderBottomColor='#ccc' color='#2CB9B0' returnKeyType='next' style={{ fontWeight: 'bold', fontSize: 25 }} borderBottomWidth={3} maxLength={1} keyboardType='numeric' />

                    <TextInput ref={refValue2} onChangeText={handleValue2} value={value2} borderBottomColor='#ccc' color='#2CB9B0' returnKeyType='next' style={{ fontWeight: 'bold', fontSize: 25 }} borderBottomWidth={3} maxLength={1} keyboardType='numeric' />

                    <TextInput ref={refValue3} onChangeText={handleValue3} value={value3} borderBottomColor='#ccc' color='#2CB9B0' returnKeyType='next' style={{ fontWeight: 'bold', fontSize: 25 }} borderBottomWidth={3} maxLength={1} keyboardType='numeric' />

                    <TextInput ref={refValue4} onChangeText={handleValue4} value={value4} borderBottomColor='#ccc' color='#2CB9B0' returnKeyType='done' style={{ fontWeight: 'bold', fontSize: 25 }} borderBottomWidth={3} maxLength={1} keyboardType='numeric' />

                </View>

               { loading ?  <ActivityIndicator size="large" color="#2CB9B0" />: null}

                {
                    valid ? <View >
                        <Text style={{ color: 'red' }}>Please check your infos!</Text>
                    </View> :
                        null
                }

            </View>
            {/* <TouchableOpacity >
                <View style={styles.buttonStyle}>
                    <Text style={{ fontSize: 20, textAlign: 'center', flexGrow: 2, margin: 8, color: 'white' }}>Next</Text>
                    <AntDesign name='arrowright' color='white' style={{ margin: 8 }} size={20} />
                </View>
            </TouchableOpacity> */}


            <View  >
                {/* <Button title="Show modal" onPress={toggleModal} /> */}

                <Modal isVisible={isModalVisible} animationInTiming={800} >
                    <View style={{ backgroundColor: 'white' }} >

                        <View style={{ margin: 20 }}>
                            <View >
                                <TextInput placeholder='your Name' value={nom} onChangeText={handleNom} style={{ fontSize: 20 }} borderBottomColor='#2CB9B0' borderBottomWidth={3} />
                            </View>

                            <View >
                                <TextInput placeholder='your Surname' value={surname} onChangeText={handleSurname} style={{ fontSize: 20 }} borderBottomColor='#2CB9B0' borderBottomWidth={3} />
                            </View>
                        </View> 
                        {
                            validd ? <View style={{marginLeft:20}}><Text style={{color:'red'}}>Check your infos!</Text></View>: null
                        }
  
                      {
                          loading ? <ActivityIndicator style={{marginTop:20}} size="large" color="#2CB9B0" />: 
                          <TouchableOpacity onPress={handleSubmit} >
                          <View style={styles.buttonStyle}>
                              <Text style={{ fontSize: 20, textAlign: 'center', flexGrow: 2, margin: 8, color: 'white' }}>Next</Text>
                              <AntDesign name='arrowright' color='white' style={{ margin: 8 }} size={20} />
                          </View>
                      </TouchableOpacity>
                      }
                       
                      
                    </View>
                </Modal>
            </View>

        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    sousContainer: {
        margin: 20
    },
    textStyles: {
        alignItems: 'center',
        marginTop: 35
    },
    text: {
        color: '#2CB9B0',
        fontSize: 25,
        textAlign: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    images: {
        resizeMode: 'contain',
        height: 230,
        width: '100%'
    },
    buttonStyle: {
        margin: 40,
        flexDirection: 'row',
        backgroundColor: '#2CB9B0',
        alignItems: 'center',

        borderRadius: 20
    },
})
export default Verification;