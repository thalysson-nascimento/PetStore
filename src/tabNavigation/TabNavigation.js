import { createMaterialTopTabNavigator } from 'react-navigation';

import ListPetsScreen from '../screen/pets/listPets';
import ChatScreen from '../screen/chat'
import ProfileScreen from '../screen/user/profile';

const TabNavigationScreen = createMaterialTopTabNavigator({
    Pets : {
        screen: ListPetsScreen
    },
    Chat:{
        screen: ChatScreen
    },
    Perfil:{
        screen: ProfileScreen
    }
},{
    tabBarOptions:{
        upperCaseLabel: false,
    }
});

TabNavigationScreen.navigationOptions = {
    title: 'PetsStore'
}

export default TabNavigationScreen;