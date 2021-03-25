import React from 'react';
import InfoKasus from './InfoKasus'
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { Button, Divider } from 'react-native-elements';
import JenisVaksin from './JenisVaksin';
import BeritaVaksin from './BeritaVaksin';

export interface HomeScreenProps {
    navigation: any;
  }
 const HomeScreen = ({navigation}:HomeScreenProps) => {
  
   return (
    <ScrollView style={{backgroundColor: 'white'}}>
     <InfoKasus/>

    <Divider style={{backgroundColor: 'black', height: 1}}/>
    <Text style ={styles.textStyle}>Cek apakah anda bisa mendapatkan dosis vaksin</Text>
    <Button title = "Cek sekarang" buttonStyle = {styles.questionButtonStyle} onPress = {() =>navigation.navigate('Pertanyaan')}>

    </Button>
    <JenisVaksin/>
    <BeritaVaksin/>
    </ScrollView>
   );
 };

 const styles = StyleSheet.create({
    textStyle:{
        fontSize: 25,
        textAlign: 'center',
        margin: 15
    },
    questionButtonStyle:{
        width: '50%',
        backgroundColor: '#6181ff',
        alignSelf: 'center'
    }
 });

 export default HomeScreen;
