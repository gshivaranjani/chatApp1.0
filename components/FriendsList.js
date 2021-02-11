import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

export default class FrendsList extends Component {
    render() {
        return(
            <View style={{flex:1}}>
                <Text style={{fontSize:20, marginTop:30}}>friends list</Text>
            </View>
        ) 
    }
}