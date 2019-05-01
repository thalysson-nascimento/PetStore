import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../screen/login';
import RegisterUserScreen from '../screen/registerUser';
import AddPetsScreeen from '../screen/pets/addPets';
import TabNavigation from '../tabNavigation/TabNavigation';
import Exit from '../components/button/Exit/exit';

const RootNavigation = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        RegisterUser: {
            screen: RegisterUserScreen
        },
        AddPets:{
            screen: AddPetsScreeen
        },
        MainNavigation:{
            screen: TabNavigation,
            header: null,
            navigationOptions: {
                // headerTitle: <TitleAppWithUserName />,
                headerRight: <Exit/>,
                headerLeft: null,
                gestureEnabled: false,
                headerStyle: {
                    backgroundColor: '#2196F3',
                    elevation: 0,
                    shadowRadius: 0,
                },
                headerTintColor: '#fff',
            },
        }
    },{
        initialRouteName: 'Login'
    }
);

export default createAppContainer(RootNavigation);