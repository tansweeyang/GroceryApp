import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { responsiveHeight, responsiveScreenWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Icon } from '@rneui/themed';

const Cart = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, backgroundColor: 'white', gap: 15 }}>
            <Text style={{ textAlign:'center',fontSize: 25,fontWeight: "500",color: "black",fontFamily:"times",fontWeight:"800",marginVertical:10}}>My Cart</Text>

            {/* Parent Container */}
            <View style={{ 
                height: responsiveHeight(20),
                borderTopColor: '#E3E3E3',
                borderTopWidth: 2,
                borderBottomColor: '#E3E3E3', 
                flexDirection: 'row', 
                borderBottomWidth:2,
                gap:10, 
                marginVertical:10,
                justifyContent:'space-evenly'
                }}>

                {/* Child 1 Container */}
                <View style={{flex:0.3, alignItems:'center', justifyContent:'center'}}> 
                    <Image 
                        style={{height:100, width:100, resizeMode:"contain"}}
                        source={require('../assets/apple.jpg')}
                    />
                </View>
                {/* Child 1 Container */}

                {/* Child 2 Container */}
                <View style={{flex:0.7, paddingHorizontal:10, paddingVertical:20, justifyContent:'center'}}>
                    <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between', paddingHorizontal:10}}>
                        <Text style={{fontSize:20,fontWeight:'800',color:'black', fontFamily:'times'}}>Red Apple</Text> 
                        <Icon name='close' color='black' type='antdesign' size={25} onPress={
                            ()=>{
                                console.log('Pressed remove')
                            }
                        }/> 
                    </View>

                    <View style={{paddingHorizontal:10}}>
                        <Text style={{fontSize:16, color:'dark-grey', fontFamily:'times'}}>1kg, Price</Text>
                    </View>

                    <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                        <View style={{flexDirection:'row',alignItems:'center',gap:10,marginTop:10,paddingHorizontal:10,justifyContent:'space-between'}}>
                            <Icon name='minussquareo' color='green' type='antdesign' size={24} style={{marginHorizontal:2}} onPress={
                                ()=>{
                                    console.log('Pressed minus')
                                }
                            }/> 
                            <Text style={{marginHorizontal:2}}>1</Text>
                            <Icon name='plussquareo' color='green' type='antdesign' size={24} style={{marginHorizontal:2}} onPress={
                                ()=>{
                                    console.log('Pressed plus')
                                }
                            }/> 
                        </View>

                        <View style={{paddingHorizontal:10, marginTop:10}}>
                            <Text style={{color:'black',fontFamily:'times',fontSize:16, fontWeight:'700'}}>RM20</Text>
                        </View>
                    </View>

                </View>
                {/* Child 2 Container */}

            </View>
            {/* Parent Container */}

        </SafeAreaView>
    );
}

export default Cart;