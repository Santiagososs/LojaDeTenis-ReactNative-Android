import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import Shoes from '../../component/Shoes';
import {useNavigation } from '@react-navigation/native';
export default function Home() {
    const navigation= useNavigation();
 return (
   <View style={styles.container}>
   
   <View style={styles.header}>
      <Image
      source={require('../../assets/banner.png')}
      style={styles.image}
      />

      <View style={styles.textContainer}>
       <Text style={styles.text}>TENIS</Text>
       <Text style={[styles.text,{color: '#CFCFCE'}]}>•</Text>
       <Text style={[styles.text,{color: '#CFCFCE'}]}>MASCULINO</Text>
       <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
           <MaterialIcons
               name="filter-list"
               size={24}
               color="0000"
                />
           
       </TouchableOpacity>



      </View>

   </View>
  
    <View  style={styles.line} />

    <ScrollView>
        <Text style={styles.text}>NOVOS MODELOS</Text>
      
        <View style={ {flexDirection:'row', justifyContent: 'space-around'}}>
         <Shoes img={require('../../assets/1.png')} cost="R$460,99" onClick={()=> navigation.navigate('Detail')}> 
           Nike Sport Tesla
           </Shoes>
           
         <Shoes img={require('../../assets/2.png')} cost="R$499,99" onClick={()=> navigation.navigate('Detail')} > 
           Nike Sport Darwin
         </Shoes>
         </View>
         <View style={ {flexDirection:'row', justifyContent: 'space-around'}}>
         <Shoes img={require('../../assets/3.png')} cost="R$249,99" onClick={()=> navigation.navigate('Detail')} > 
           Nike Sport Wayne
         </Shoes>
         
         <Shoes img={require('../../assets/4.png')} cost="R$300,00" onClick={()=>navigation.navigate('Detail')} > 
           Nike Sport Tesla
         </Shoes>
           
          </View>
          
          <View style={ {flexDirection:'row', justifyContent: 'space-around'}}>
         <Shoes img={require('../../assets/5.png')} cost="R$599,99" onClick={()=> navigation.navigate('Detail')}> 
           Nike Sport Darwin
           </Shoes>
           
         <Shoes img={require('../../assets/6.png')} cost="R$540,00" onClick={()=> navigation.navigate('Detail')}> 
           Nike Sport Tesla
         </Shoes>
         </View>
          
          
    
    </ScrollView>

    

   </View>
  );

 }
const styles = StyleSheet.create({
 container:{
     flex:1,
     width: '100%',
     backgroundColor: '#FFF'


 },

  header:{
      marginBottom: 8

  },

  image:{
      width: '100%'
  
    },

    textContainer:{
     flexDirection: 'row',
     marginVertical: '5%',
     marginHorizontal: '5%'
    },
     
     text:{
         fontFamily: 'Anton_400Regular',
         fontSize: 26,
         marginHorizontal:'1%'
     },

     line:{
         borderBottomColor: '#D8D8D8',
         borderBottomWidth: 2

   },

});