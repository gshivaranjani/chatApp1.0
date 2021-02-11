import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import FrendsList from './FriendsList';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : AppTabNavigator
    },
},
{
    contentComponent : FrendsList
},
{
    initialRouteName : 'Home'
})