import React, { useEffect, useState } from 'react';
import {
 Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Tile} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';



 const BeritaVaksin = () => {
     const [berita, setBerita] = useState({status: "", totalResults: 0, articles: [{source : {id : "", name: ""}, title: "", url:"", urlToImage: ""}]});
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?q=vaccine&language=en&apiKey=9e9c200a4f4c45479492fadd47fbdf90')
          .then((response) => response.json())
          .then((json) => setBerita(json))
          .catch((error) => console.error(error))
      }, []);
      const datas = [{image: "", desc: "", url: ""}];
      var flag = false;

    berita.articles.map((article, index)=>{

        if(datas.length < 15){
        article.urlToImage? datas.push({
            image: article.urlToImage,
            desc: article.title,
            url: article.url
        }): flag = true;
    }
    
    })
    const images = datas.slice(1);
    const _renderItem = ({item, index}) =>{
        return(
            <View>
                <Tile imageSrc = {{uri : item.image}} title = {item.desc} onPress = {()=>Linking.openURL(item.url)}/>
            </View>
        );
    };
   
   return (
        <View style ={{marginTop: 20}}>
            <Text style = {{ fontSize: 18, textAlign: 'center', marginBottom: 20}}>Berita Tentang Vaksin</Text>
            <Carousel data = {images} renderItem = {_renderItem} sliderWidth = {600} itemWidth = {600} autoplay = {true} loop = {true}/>
        </View>
   );
 };

 const styles = StyleSheet.create({

 });

 export default BeritaVaksin;
