import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Button} from 'react-native';
import Dot from '../../component/Dot';
import Sizebuttom from '../../component/Sizebuttom';
import Botton from '../../component/botton';

export default function Detail({navigation}) {

    navigation.setOptions({
        headerTitle: 'Nike Sport Darwin'
    })
 return (
   <ScrollView style={styles.container}>
   
    <Image
    source={require('../../assets/detail.png')}
    style={styles.image}
    resizeMode="cover"
    />
     <View>
      <View>
          <Text style={[styles.title, {fontSize:24}]}>R$460,99</Text>

      </View> 
      
      <View opacity={0.4}>
          <Text style={[styles.title, {fontSize:30}]}>Nike Sport Darwin</Text>

      </View> 
      <View style={styles.dotContainer}>
      
      <Dot color="#2379f4"/>
      <Dot color="#fb6e53"/>
      <Dot color="#ddd"/>
      <Dot color="#000"/>


      </View>

      <View style={{flexDirection:'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           
            <Sizebuttom bgColor='#17181a' color='#FFF'> 40 </Sizebuttom>
            <Sizebuttom > 37 </Sizebuttom>
            <Sizebuttom > 39 </Sizebuttom>
            <Sizebuttom > 42 </Sizebuttom>




          </ScrollView>

      </View>

          <View style={styles.textContet}>
              <Text style={styles.textTitle}>
                   Nike Sport Darwin
              </Text>
              <Text style={styles.textContent}>                 
               Com o mesmo design ondulado do original inspirado em trens-bala japoneses, o Nike Sport Darwin permite que você aumente a velocidade do seu estilo. Com a revolucionária unidade Air de comprimento total da Nike, que abala as estruturas do mundo da corrida e adiciona cores novas e detalhes nítidos, ele permite que você corra com conforto de primeira classe.
              </Text>
              <Text style={styles.textList}>
                  -Categoria: Amortecimento
              </Text>
              <Text style={styles.textList}>
                  -Material: Mesh
              </Text>

          </View>
            
              <Botton/>
              <View style={styles.line}/> 

     </View>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  width:'100%',
  backgroundColor:'#FFF'

},
image:{
  width:'100%'

},
title:{
    fontFamily:'Anton_400Regular',
    paddingHorizontal: '2%'
    
},
dotContainer:{
    flexDirection:'row',
    marginVertical:'7%'
},
textContent:{
    fontSize:16,
       lineHeight: 25,
       marginVertical: '2%',
       paddingHorizontal: '2%'

},
 textTitle:{
     fontSize:22,
     marginVertical:'2%'
    },
 
    textList:{
     fontSize:17,
     lineHeight:25
 },

  line:{
      borderWidth: 1,
      borderBottomColor: '#DDD',
      marginVertical: '2%'
  },

})
