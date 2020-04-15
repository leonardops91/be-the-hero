import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 26,
        marginTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 36,
    },
    btBack: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },
    incidentValue: {
        fontSize: 15,
        color: '#737380',
        textAlign: 'justify',
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30
    },
    heroDescription: {
        color: 'gray',
        marginTop: 15
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        width: '48%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    actionText: {
        color: 'white',
        fontWeight: 'bold',
    }
})
