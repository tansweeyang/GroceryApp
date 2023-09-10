import React, { useEffect } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { myColors } from '../Utils/MyColors';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const nav = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            nav.replace('Cart')
        }, 2000)
    }, [])

    return (
        <View style={{backgroundColor: myColors.primary, flex:1, justifyContent:'center'}}>
            <StatusBar style='auto'/>
            <View style={{backgroundColor:myColors.primary, height:100}}>

                <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../assets/groceryicon.png')}/>
                    <Text style={{fontSize:30, color:myColors.secondary, fontWeight:'bold', fontFamily:'times'}}>Happy Groceries</Text>
                </View>
            </View>
        </View>
    );
}

export default Splash;
