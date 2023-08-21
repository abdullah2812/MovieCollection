import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { useEffect } from 'react';
import React from 'react'
import { MovieExplanation } from '../components/MovieComponent';

const DetailMovieScreen = (props) => {
    const {route} = props;
    const movie = route.params.item;
    useEffect(() => {
        console.log(movie);
    }, []);
  return (
    <ScrollView style={styles.mainContainer}>
        <View style={styles.movieContainer}>
            <View style={styles.middle}>
                <Image
                style={styles.image}
                source={{uri:movie.imageLink}}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            <MovieExplanation
            name="year"
            value={movie.year}
            />
            <MovieExplanation
            name="starring"
            value={movie.starring}
            />
            <MovieExplanation
            name="description"
            value={movie.description}
            />
            <MovieExplanation
            name="image"
            isRating={true}
            rating={movie.rating}
            />
            <MovieExplanation
            name="viewers"
            value={movie.viewers}
            />
        </View>
    </ScrollView>
  )
}
 const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    movieContainer:{
        margin:8,
        padding:8
    },
    middle:{
        alignItems:'center'
    },
    image:{
        width:200,
        height:300,
        borderRadius:10,
        borderWidth:3,
        borderColor:'#ffbe7bff'
    },
    titleContainer:{
        marginTop:8,
        marginBottom:8,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        padding:8,
        backgroundColor:'salmon',
        borderRadius:10,
        color:'white'
    }
 });
export default DetailMovieScreen