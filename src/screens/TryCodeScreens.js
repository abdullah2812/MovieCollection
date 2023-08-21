import React from "react";
import { View,Text,Image,FlatList,StyleSheet } from "react-native";
import {userData} from '../../Data/TryCodeData';
const TryCodeScreen = ()=>{
    return(
        <View style={{flex:1}}>
            <FlatList
            contentContainerStyle={{padding:8}}
            data={userData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return(
                    <View style={
                        [styles.containerAnItem,{
                            backgroundColor:
                            item.gender.toLowerCase()=== 'male' ?
                            'moccasin'
                            :
                            'lavender'
                        }  
                        ]
                        
                    }>
                        <Image
                        style={styles.containerImage}
                        source={{uri:item.imageLink}}
                        />
                        <Text>{item.name}</Text>
                    </View>
                )
            }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    containerAnItem:{
        margin:8,
        borderWidth:8,
        alignItems:"center"
    },
    containerImage:{
        width:100,
        height:100
    }
});
export default TryCodeScreen;