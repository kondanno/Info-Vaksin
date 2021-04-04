import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Card} from 'react-native-elements';
const InfoKasus = () =>{
    const [dataCovid, setDataCovid] = useState([{name: [], positif: [], sembuh: [], meninggal: [], dirawat: []}]);
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const date = new Date().getDate().toString() + ' ' +  months[new Date().getMonth()] + ' ' + new Date().getFullYear().toString();
    const [fetched, setFetched] = useState(false);
    useEffect(() => {
      fetch('https://api.kawalcorona.com/indonesia/')
        .then((response) => response.json())
        .then((json) => setDataCovid(json))
        .catch((error) => console.error(error))
    }, []);
    async function getDataCovid() {
          await fetch('https://api.kawalcorona.com/indonesia/')
          .then((response) => response.json())
          .then((json) => setDataCovid(json))
          .catch((error) => console.error(error));
          setFetched(true);
      }
    useEffect(() => {
        getDataCovid();
       
    });
    useEffect(() => {
        if(fetched == true){
       SplashScreen.hide();
        }
    })
    return(
        <View>
            <Card containerStyle={{borderWidth: 0, elevation: 0}}> 
                <Card.Title style={styles.title}>Data Kasus COVID-19 di Indonesia sampai tanggal {date}</Card.Title>
                <Card containerStyle={{margin: 0, borderWidth: 0, elevation: 0}}>
                    <Card.Title>Positif</Card.Title>
                    <Text style = {{textAlign: "center", color:'black', fontSize: 20}}>{dataCovid[0].positif} ORANG</Text>
                </Card>
                <View style={styles.cardContainer}>
                <Card containerStyle = {styles.cardStyle}>
                    <Card.Title>Sembuh</Card.Title>
                    <Text style = {{textAlign: "center", color: 'green', fontSize: 18}}>{dataCovid[0].sembuh} {"\n"}ORANG</Text>
                </Card>
                <Card containerStyle = {styles.cardStyle}>
                    <Card.Title>Meninggal:</Card.Title>
                    <Text style = {{textAlign: "center", color: 'red', fontSize: 18}}>{dataCovid[0].meninggal}{"\n"} ORANG</Text>
                </Card>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'piersans-regular'
    },
    cardContainer:{
        flexDirection: "row",
    },
   cardStyle:{
       width: "50%",
       margin: 0,
       borderWidth: 0,
       elevation: 0
   },
 
});

export default InfoKasus;