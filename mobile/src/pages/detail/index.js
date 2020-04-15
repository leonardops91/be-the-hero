import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as mailComposer from 'expo-mail-composer';
import { Linking } from 'react-native'

import style from './style';
import logoImg from '../../assets/logo.png';

export default function Detail() {
    const route = useRoute();
    const incident = route.params.incident;
    const navigation = useNavigation();
    const message = `Olá ${incident.name}, desejo contribuir com o caso da "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency:'BRL'})
                        .format(incident.value)}.`;
    
    
    function navigateToIncidents(){
        navigation.navigate('Incidents');
    };

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?text=${message}&phone=${incident.whatsapp}`);
    };

    function sendEmail() {
        mailComposer.composeAsync({
        subject: `Herói do caso: ${incident.title}`,
        recipients: [incident.email],
        body: message,
        })
    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg}/>
                <TouchableOpacity style={style.btBack} onPress={navigateToIncidents}>
                    <Feather name='arrow-left' size={24} color="#e02041"/> 
                </TouchableOpacity>

            </View>
            <View style={style.incident}>
                <Text style={style.incidentProperty, {marginTop: 0}}>ONG:</Text>
                <Text style={style.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={style.incidentProperty}>Caso:</Text>
                <Text style={style.incidentValue}>{incident.title}</Text>

                <Text style={style.incidentProperty}>Descrição:</Text>
                <Text style={style.incidentValue}>{incident.description}</Text>
                
                <Text style={style.incidentProperty}>Valor:</Text>
                <Text style={style.incidentValue}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'})
                        .format(incident.value)}
                </Text>

            </View>
            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia!</Text>
                <Text style={style.heroTitle}>Seja herói desse caso.</Text>

                <Text style={style.heroDescription}>Entre em contato:</Text>
                <View style={style.actions}>
                    <TouchableOpacity style={style.action} 
                    onPress={sendWhatsapp}>
                        <Text style={style.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.action} 
                    onPress={sendEmail}>
                        <Text style={style.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}