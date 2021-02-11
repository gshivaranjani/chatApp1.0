import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
// import { DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

export default class SidePage extends Component{
  render(){
    return(
      <View style={{flex:1}}>
       
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}>
       
            <Text style={{fontSize:25}}> Yhis is side page</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 30,
    fontWeight:'bold'
  }
})