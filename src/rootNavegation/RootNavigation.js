import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../screen/login'
import RegisterUserScreen from '../screen/registerUser'

const RootNavigation = createStackNavigator(
    {
        Login: LoginScreen,
        RegisterUser: RegisterUserScreen
    }
);

export default createAppContainer(RootNavigation);