import React, { useEffect, useState } from 'react';
import {Card, Button} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

 const JenisVaksin = () => {
   const [modal1, setModal1] = useState(false);
   const [modal2, setModal2] = useState(false);
   const [modal3, setModal3] = useState(false);
   const [modal4, setModal4] = useState(false);
   const [modal5, setModal5] = useState(false);
   const [modal6, setModal6] = useState(false);
   return (
    <View style={{marginTop: 20}}>
        <Text style ={{fontSize: 18, textAlign: 'center'}}>
            Jenis vaksin yang digunakan di Indonesia
        </Text>
        <View style = {styles.containerStyle}>
        <Pressable style={styles.pressableStyle} onPress = {() =>setModal1(true)}>
        <Card containerStyle = {styles.cardStyle1}>
            <Text style = {styles.textStyle}>Merah Putih</Text>
        </Card>
        </Pressable>
        <Pressable style = {styles.pressableStyle} onPress = {() =>setModal2(true)}>
        <Card containerStyle = {styles.cardStyle2}>
        <Text style={styles.textStyle}>Astrazeneca</Text>
        </Card>
        </Pressable>
        </View>
        <View style = {styles.containerStyle}>
        <Pressable style={styles.pressableStyle} onPress = {() =>setModal3(true)} >
        <Card containerStyle = {styles.cardStyle3}>
            <Text style = {styles.textStyle}>Sinovac</Text>
        </Card>
        </Pressable>
        <Pressable style = {styles.pressableStyle} onPress = {() =>setModal4(true)}>
        <Card containerStyle = {styles.cardStyle4}>
        <Text style={styles.textStyle}>Sinopharm</Text>
        </Card>
        </Pressable>
        </View>
        <View style = {styles.containerStyle} >
        <Pressable style={styles.pressableStyle} onPress = {() =>setModal5(true)}>
        <Card containerStyle = {styles.cardStyle5}>
            <Text style = {styles.textStyle}>Pfizer</Text>
        </Card>
        </Pressable>
        <Pressable style = {styles.pressableStyle} onPress = {() =>setModal6(true)}>
        <Card containerStyle = {styles.cardStyle6}>
        <Text style={styles.textStyle}>Moderna</Text>
        </Card>
        </Pressable>
        </View>

        <Modal visible = {modal1} animationType = 'slide' onRequestClose = {() => setModal1(false)} >
            <Button buttonStyle={styles.buttonStyle} icon = {<Icon name = "angle-left" size= {23} color = 'black'/>} onPress = {()=>setModal1(false)}></Button>
            <View style ={{justifyContent: 'center', alignItems: 'center', height: '80%'}}>
            <Text style={{fontSize: 25}}>Vaksin Merah Putih</Text>
            <Text style = {{fontSize: 18, marginTop: 10, width: '70%', textAlign: 'center'}} >Vaksin Merah Putih dikembangkan oleh PT Bio Farma. Vaksin ini ditargetkan 
            akan rampung pada 2021 dan didistribusikan pada awal 2022, setelah vaksin melalui seluruh tahap uji klinis 1-3. Vaksin ini dikembangkan oleh sejumlah universitas dan
            lembaga penelitian terkemuka di Indonesia.</Text>
            </View>
        </Modal>
        <Modal visible = {modal2} animationType = 'slide' onRequestClose = {() => setModal2(false)} >
            <Button buttonStyle={styles.buttonStyle} icon = {<Icon name = "angle-left" size= {23} color = 'black'/>} onPress = {()=>setModal2(false)}></Button>
            <View style ={{justifyContent: 'center', alignItems: 'center', height: '80%'}}>
            <Text style={{fontSize: 25}}>Astrazeneca</Text>
            <Text style = {{fontSize: 18, marginTop: 10, width: '70%', textAlign: 'center'}} >Vaksin Astrazeneca dikembangkan oleh universitas Oxford yang bekerja sama dengan 
            perusahaan Inggris-Swedia, Astrazeneca. Vaksin ini dikembangkan dari virus flu simpanse (adenovirus) yang dapat menyampaikan instruksi ke sel tubuh manusia agar melawan virus penyebab Covid-19.
            Mengutip keterangan WHO, vaksin AstraZeneca yang diberikan 2 dosis dengan interval 8-12 pekan memiliki tingkat efikasi (kemanjuran) 63,09 persen untuk menangkal infeksi Covid-19.
            </Text>
            </View>
        </Modal>
        <Modal visible = {modal3} animationType = 'slide' onRequestClose = {() => setModal3(false)} >
            <Button buttonStyle={styles.buttonStyle} icon = {<Icon name = "angle-left" size= {23} color = 'black'/>} onPress = {()=>setModal3(false)}></Button>
            <View style ={{justifyContent: 'center', alignItems: 'center', height: '80%'}}>
            <Text style={{fontSize: 25}}>Sinovac</Text>
            <Text style = {{fontSize: 18, marginTop: 10, width: '70%', textAlign: 'center'}} >Vaksin Sinovac dikembangkan oleh Sinovac Biotech Ltd asal Tiongkok. 
            Vaksin ini sudah melewati uji klinis fase ketiga yang dilakukan di Brazil, Turki, dan Indonesia. 
            Vaksin Sinovac merupakan vaksin yang mengandung virus SARS-CoV-2 yang sudah tidak aktif. Penyuntikan vaksin Sinovac akan memicu sistem kekebalan tubuh untuk mengenali 
            virus yang sudah tidak aktif ini dan memproduksi antibodi untuk melawannya sehingga tidak terjadi infeksi COVID-19.
            Uji klinis fase ketiga di Indonesia menunjukkan nilai efikasi vaksin, yaitu efek perlindungan terhadap COVID-19, sebesar 65,3%.</Text>
            </View>
        </Modal>
        <Modal visible = {modal4} animationType = 'slide' onRequestClose = {() => setModal4(false)} >
            <Button buttonStyle={styles.buttonStyle} icon = {<Icon name = "angle-left" size= {23} color = 'black'/>} onPress = {()=>setModal4(false)}></Button>
            <View style ={{justifyContent: 'center', alignItems: 'center', height: '80%'}}>
            <Text style={{fontSize: 25}}>Sinopharm</Text>
            <Text style = {{fontSize: 18, marginTop: 10, width: '70%', textAlign: 'center'}} >The Beijing Institute of Biological Products mengembangkan vaksin corona dari virus yang sudah 
            dilemahkan(platform inactivated viruses). Kandidat vaksin itu lalu diuji klinis oleh salah satu perusahaan milik negara di Cina, Sinopharm. Pada 30 Desember 2020 lalu, Sinopharm mengumumkan bahwa hasil uji klinisnya menyimpulkan 
            bahwa vaksin bernama resmi BBIBP-CorV tersebut memiliki efikasi 79,34 persen.</Text>
            </View>
        </Modal>
        <Modal visible = {modal5} animationType = 'slide' onRequestClose = {() => setModal5(false)} >
            <Button buttonStyle={styles.buttonStyle} icon = {<Icon name = "angle-left" size= {23} color = 'black'/>} onPress = {()=>setModal5(false)}></Button>
            <View style ={{justifyContent: 'center', alignItems: 'center', height: '80%'}}>
            <Text style={{fontSize: 25}}>Pfizer</Text>
            <Text style = {{fontSize: 18, marginTop: 10, width: '70%', textAlign: 'center'}} >Vaksin Pfizer dikembangkan oleh perusahaan farmasi terbesar di Amerika Serikat, Pfizer.
            Vaksin Pfizer dikembangkan menggunakan teknologi rekayasa genetika yang bertujuan melihat genom RNA virus. Vaksin Pfizer-BioNTech memiliki tingkat efikasi 95 persen setelah mendapat dua suntikan.
            </Text>
            </View>
        </Modal>
        <Modal visible = {modal6} animationType = 'slide' onRequestClose = {() => setModal6(false)} >
            <Button buttonStyle={styles.buttonStyle} icon = {<Icon name = "angle-left" size= {23} color = 'black'/>} onPress = {()=>setModal6(false)}></Button>
            <View style ={{justifyContent: 'center', alignItems: 'center', height: '80%'}}>
            <Text style={{fontSize: 25}}>Moderna</Text>
            <Text style = {{fontSize: 18, marginTop: 10, width: '70%', textAlign: 'center'}} >Vaksin Moderna dikembangkan oleh perusahaan bioteknologi yang berbasis di Boston, AS, yakni Moderna.
            Vaksin ini dikembangkan dengan metoda mRNA. Uji klinis fase 3 vaksin Moderna telah dimulai pada Juli 2020 dengan melibatkan 30 ribu relawan. Dengan tingkat efikasi mencapai 94,5 persen, vaksin Moderna telah mendapatkan izin penggunaan darurat dari 
            Badan Pengawas Obat dan Makanan AS (FDA) pada 18 Desember 2020.</Text>
            </View>
        </Modal>
    </View>
   );
 };

 const styles = StyleSheet.create({
    containerStyle:{
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 20
    },
    pressableStyle:{
        width: "45%",
        margin: 0,
        
    },
  
    cardStyle1:{
        margin: 5,
        borderWidth: 0,
        elevation: 0,
        backgroundColor: '#f74548',
        borderRadius: 10,
        
    },
    cardStyle2:{
        margin: 5,
        borderWidth: 0,
        elevation: 0,
        backgroundColor: '#3f43b0',
        borderRadius: 10
    },
    cardStyle3:{
        margin: 5,
        borderWidth: 0,
        elevation: 0,
        backgroundColor: '#fcce95',
        borderRadius: 10
    },
    cardStyle4:{
        margin: 5,
        borderWidth: 0,
        elevation: 0,
        backgroundColor: '#d599f7',
        borderRadius: 10
    },
    cardStyle5:{
        margin: 5,
        borderWidth: 0,
        elevation: 0,
        backgroundColor: '#6ade9c',
        borderRadius: 10
    },
    cardStyle6:{
        margin: 5,
        borderWidth: 0,
        elevation: 0,
        backgroundColor: '#64c4ed',
        borderRadius: 10
    },
    textStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'white'
    },
    buttonStyle: {
        backgroundColor: 'white',
        width: '10%'
    }
 });

 export default JenisVaksin;
