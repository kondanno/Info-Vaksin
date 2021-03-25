import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CheckBox, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
const PertanyaanVaksin = () =>{
    const questions = 
    [
    "Apakah anda pernah terpapar COVID-19?", 
    "Apakah anda sudah sembuh >3 bulan?", 
    "Apakah ada anggota keluarga anda yang sedang positif COVID-19?",
    "Apakah anda berusia >18 tahun?",
    "Apakah anda sedang hamil?",
    "Apakah tekanan darah anda di atas 180/110 mmHg?",
    "Apakah anda mengidap penyakit kronis, seperti penyakit jantung, autoimun, ginjal kronis, rematik autoimun, penyakit saluran pencernaan kronis, hipertiroid atau hipotiroid, serta penyakit kanker?",
    "Apakah anda memiliki penyakit paru, seperti asma, PPOK, atau TBC dan sedang dalam keadaan yang akut?",
    "Apakah anda mengidap diabetes tipe 2 dan HbA1C di atas 58 mmol/mol atau 7,5 persen?",
    "Apakah anda sedang dalam perawatan TBC?",
    "Apakah anda sudah melakukan perawatan lebih dari dua minggu?",
    "Anda boleh divaksin",
    "Anda tidak boleh divaksin"
    ]
    const tempAnswers = [];
    for (let index = 0; index < questions.length-2; index++) {
        tempAnswers.push(false);
    }
    const [answers, setAnswers] = useState(tempAnswers);
    const [flag, setFlag] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(0);
    
    const onChangeAnswer = (answer: string) =>{
        const tempArray = answers.slice();
        if(answer == "Ya"){
        tempArray[questionNumber] = true;
        }
        else{
            tempArray[questionNumber] = false;
        }
        setAnswers(tempArray);
        setFlag(true);
    }
  
    const onChangePrev = () =>{
         if(questionNumber == 2 && answers[1] == false){
             setQuestionNumber(questionNumber-2);
         }
         else{
            setQuestionNumber(questionNumber-1);
         }
    }
    useEffect(() => {
        if(flag == true){
            if((questionNumber == 0 && answers[0] == false) || (questionNumber == 9 && answers[9] == false)){
            setQuestionNumber(questionNumber + 2);
            }
            else if((questionNumber == 1 || questionNumber == 10 || questionNumber == 3) && answers[questionNumber] == false){
                setQuestionNumber(12);
            }
            else if((questionNumber != 1 && questionNumber != 10 && questionNumber != 0 && questionNumber != 9 && questionNumber != 3) && answers[questionNumber] == true){
                setQuestionNumber(12);
            }
            else{
                setQuestionNumber(questionNumber + 1);
            }
        }
    }, [answers])
    
   
    
    if(questionNumber == 11 || questionNumber == 12){
    return(
        <View style = {styles.containerStyle}>
            <Text style ={styles.questionStyle}>
                {questions[questionNumber]}
            </Text>
        </View>
    );
}
else{ 
    return(
        <View style = {styles.containerStyle}>
            <Text style ={styles.questionStyle}>
                {questions[questionNumber]}
            </Text>
            <View style={{flexDirection:'row'}}>
            <CheckBox
                containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                center
                title='Ya'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={answers[questionNumber]}
                onPress = {() => onChangeAnswer("Ya")}
            />
               <CheckBox
                containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                center
                title='Tidak'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={answers[questionNumber]}
                onPress = {() => onChangeAnswer("Tidak")}
            />
            </View>
            <Button icon={<Icon name = "angle-left" size= {25} color = 'white' style={{marginRight: 10}}/>} 
                    title = "Pertanyaan sebelumnya" buttonStyle ={{marginTop: 20, backgroundColor: '#6181ff'}}
                    onPress = {() => onChangePrev()} disabled={questionNumber ==0}
            />
        </View>
    );
}
}

const styles = StyleSheet.create({
   questionStyle:{
       fontSize: 22
   },
   containerStyle:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'white'
   }
   
});

export default PertanyaanVaksin;