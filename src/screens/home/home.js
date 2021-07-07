import React, { useEffect } from 'react';
import { Dimensions, ScrollView, View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider
} from 'react-native-popup-menu';


//IMPORT COMPONENT
import CameraTab from '../../components/cameratab/camera';
import ChatTab from '../../components/chattab/chat';
import StatusTab from '../../components/statustab/status';
import CallTab from '../../components/calltab/call';

const FirstRoute = () => {
    return (
        <CameraTab />
    )
};


const Home = ({ props, navigation }) => {


   

    const SecondRoute = () => (
        <View>
            <ChatTab gotoChatScreen={() => navigation.navigate('chatscreen')} />
        </View>
    );

    const ThirdRoute = () => (
        <View>
            <StatusTab />
        </View>
    );

    const ForthRoute = () => (
        <View >
            <CallTab />
        </View>
    );





    const initialLayout = { width: Dimensions.get('window').width };
    const [index, setIndex] = React.useState(1);



    const [routes] = React.useState([
        { key: 'first', title: 'camera' },
        { key: 'second', title: 'Chat', },
        { key: 'third', title: 'Status' },
        { key: 'forfh', title: 'Call' },
    ]);

    useEffect(() => {

        navigation.setOptions({
            headerShown: false,
            headerTintColor: '#fff',
            title: 'Whatssap Clone',
            headerStyle: {
                backgroundColor: '#2CB9B0',
                elevation: 0,
            },
            headerRight: (props) => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                    <EvilIcons {...props} name='search' style={{ marginRight: 10 }} size={27} onPress={() => alert('This is a!')} color='white' />
                    <Entypo {...props} name='dots-three-vertical' style={{ marginRight: 10 }} onPress={() => alert('This is a button!')} size={20} color='white' />
                </View>
            ),
        });
    }, []);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        forfh: ForthRoute,
    });
    const renderLabel = ({ route, focused }) => {
        if (route.title === 'camera')
            return (
                <FontAwesome name='camera' size={18} color='white' />
            )
        else if (route.title === 'Chat')
            return (
                <View><Text style={{ color: 'white', fontSize: 20 }}>Chat</Text></View>
            )
        else if (route.title === 'Status')
            return (
                <View><Text style={{ color: 'white', fontSize: 20 }}>Status</Text></View>
            )
        else if (route.title === 'Call')
            return (
                <View><Text style={{ color: 'white', fontSize: 20 }}>Call</Text></View>
            )
    }



    return (
        <MenuProvider>
            <View style={styles.scene}>
                <View style={{ backgroundColor: '#2CB9B0', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Whatssap Clone</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 0, alignItems: 'center' }}>
                        <EvilIcons {...props} name='search' style={{ marginRight: 10 }} size={27} onPress={() => alert('This is a!')} color='white' />
                        <Menu>
                            <MenuTrigger>
                                <Entypo {...props} name='dots-three-vertical' style={{ marginRight: 10 }} size={20} color='white' />
                            </MenuTrigger>
                            {index === 1 ?
                                <MenuOptions>
                                    <MenuOption style={{ height: 35 }} onSelect={() => alert(`Save`)} text='New group' />
                                    <MenuOption style={{ height: 35 }} onSelect={() => alert(`Not called`)} text='New brodcast' />
                                    <MenuOption style={{ height: 35 }} onSelect={() => alert(`Not called`)} text='Starred messages' />
                                    <MenuOption style={{ height: 35 }} onSelect={() => navigation.navigate('settings')} text='Settings' />
                                </MenuOptions>
                                :
                                index === 2 ?
                                    <MenuOptions>
                                        <MenuOption style={{ height: 35 }} onSelect={() => alert(`Save`)} text='Status privacy' />
                                        <MenuOption style={{ height: 35 }} onSelect={() => alert(`Not called`)} text='Settings' />
                                    </MenuOptions>
                                    :
                                    index === 3 ?
                                        <MenuOptions>
                                            <MenuOption style={{ height: 35 }} onSelect={() => alert(`Save`)} text='Clear call log' />
                                            <MenuOption style={{ height: 35 }} onSelect={() => alert(`Not called`)} text='Settings' />
                                        </MenuOptions>
                                        :
                                        <MenuOptions>
                                            <MenuOption style={{ height: 50 }} onSelect={() => alert(`Not called`)} text='Settings' />
                                        </MenuOptions>
                            }


                        </Menu>

                    </View>


                </View>
                <StatusBar
                    barStyle="light-content"
                    hidden={false}
                    backgroundColor="#2CB9B0"
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />

                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}

                    initialLayout={initialLayout}
                    renderTabBar={props => (

                        <TabBar

                            {...props}
                            renderLabel={renderLabel}

                            getLabelText={({ route: { title } }) => title}
                            indicatorStyle={{
                                backgroundColor: 'white',
                                borderBottomWidth: 3,
                                borderBottomColor: 'white'
                            }}
                            inactiveColor={{
                                backgroundColor: 'red'
                            }}
                            style={{
                                backgroundColor: '#2CB9B0'
                            }}

                        />
                    )}

                />
               

            </View>

            {
                    index === 0 ? null :
                        <View style={{ backgroundColor: 'transparent', flex:1}}>
                            {/* Rest of the app comes ABOVE the action button component !*/}
                            <ActionButton onPress={() => navigation.navigate('selectcontact')} buttonColor="#2CB9B0" style={{ marginTop: -80 }}
                                renderIcon={() => {
                                    if (index === 1) {
                                        return (<TouchableOpacity onPress={() => navigation.navigate('selectcontact')} >
                                            <MaterialCommunityIcons  name="android-messages" style={styles.actionButtonIcon} />
                                        </TouchableOpacity>)
                                    }
                                    else if (index === 2) {
                                        return (<Entypo name="camera" style={styles.actionButtonIcon} />)
                                    }
                                    else if (index === 3) {
                                        return (<MaterialIcons name="add-call" style={styles.actionButtonIcon} />)
                                    }

                                }

                                }
                            >
                            </ActionButton>

                        </View>
                }
        </MenuProvider>


    )

}

const styles = StyleSheet.create({
    scene: {
        flex: 8,
        width: '100%',
        height: '100%'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',

    },
});
export default Home;

