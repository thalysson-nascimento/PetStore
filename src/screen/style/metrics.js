import { Platform } from 'react-native';

export default {
    // marginTop: 20,
    ...Platform.select({
        ios:{marginTop: 64},
        android:{marginTop: 40}
    })
}