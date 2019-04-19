import { createStackNavigator, createAppContainer } from 'react-navigation';

// import LoginScreen from '../screen/user/LoginScreen';
import RegisterUserScreen from '../screen/user/RegisterUserScreen';
import LoginScreen from '../screen/login'

const RootNavigation = createStackNavigator(
    {
        Login: LoginScreen,
        RegisterUser: RegisterUserScreen
    }
);

export default createAppContainer(RootNavigation);