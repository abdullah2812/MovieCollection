import React from "react";
import { View,Text,Image,StyleSheet } from "react-native";
import { interpolate } from "react-native-reanimated";

export const ShowMovie = (props) => {
    const {image,title,viewers, isHome} = props;
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")
    }

    return(
        <View style={[styles.horizontalDataContainer, {flex: isHome ? null : 1 }]}>
            <Image
            style={styles.movieImage}
            source={image}
            />
            <View style={styles.horizontalTitleContainer}>
                <Text style={styles.horizontalTitle}>{title}</Text>
            </View>
            <View style={styles.viewersContainer}>
                <View style={styles.viewerText}>
                    <Text>{numberWithCommas(viewers)}</Text>
                </View>
            </View>
        </View>
    )

}
export const MovieExplanation = (props) => {
    const {name,value,isRating,rating} = props;
    return(
        <View style={styles.mainContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.generalFonSize}>{name}</Text>
            </View>
            <Text style={styles.generalFonSize}>:</Text>
            <View style={styles.valueContainer}>
                {
                    isRating ?
                        rating ===5 ?
                            <Image
                            style={styles.ratingImage}
                            source={require('../../Assets/five-stars.png')}
                            />
                        :
                        rating ===4 ?
                        <Image
                        style={styles.ratingImage}
                        source={require('../../Assets/four-stars.png')}
                        />
                        :
                        rating ===3 ?
                        <Image
                        style={styles.ratingImage}
                        source={require('../../Assets/three-stars.png')}
                        />
                        :
                        rating ===2 ?
                        <Image
                        style={styles.ratingImage}
                        source={require('../../Assets/two-stars.png')}
                        />
                        :
                        <Image
                        style={styles.ratingImage}
                        source={require('../../Assets/star.png')}
                        />
                        :
                        <Text style={styles.textValue}>{value}</Text>
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    horizontalDataContainer:{
        margin:8,
        width:180,
        alignItems:"center",
        borderColor:'#96ceb4',
        borderWidth:2,
        borderRadius:10,
        padding:16
    },
    horizontalTitleContainer:{
        marginTop:8,
        marginBottom:8
    },
    horizontalTitle:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    },
    movieImage:{
        width:130,
        height:200,
        borderRadius:10
    },
    viewersContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    viewerText:{
        marginLeft:8
    },
    mainContainer:{
        flexDirection:'row',
        margin:8
    },
    nameContainer:{
        flex:1
    },
    nameContainer:{
        flex:1
    },
    generalFonSize:{
        fontSize:16
    },
    valueContainer:{
        flex:3
    },
    textValue:{
        textAlign:"justify",
        fontSize:16
    },
    ratingImage:{
        width:100,
        height:20
    }
});