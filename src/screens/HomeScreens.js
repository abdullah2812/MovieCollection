import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { version } from "react/cjs/react.production.min";
import { movieData } from '../../Data/MovieData';
import { ShowMovie } from "../components/MovieComponent";
import ButtonComponent from "../components/ButtonComponent";
const HomeScreen = (props) => {
    const {navigation} = props;
    const [recommended, setRecommended] = useState([]);
    const [allMostViewed, setAllMostViewed] = useState([]);
    const [viewers, setViewers] = useState([]);
    const [allRecommended, setAllRecommended] = useState([]);
    const compareViewers = (a, b) => {
        const viewersA = a.viewers;
        const viewersB = b.viewers;

        if (viewersA > viewersB) {
            return -1;
        } else if (viewersA < viewersB) {
            return 1;
        } else {
            return 0;
        }
    }
    const compareRating = (a, b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;

        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }
    
    }
    useEffect(() => {
        const threeMostViewed = [];
        const threeRecommended = [];
        const sortedRecommended = [...movieData].
            sort(compareRating);
        setRecommended(sortedRecommended);
        const sortedViewers = [...movieData].
            sort(compareViewers);
        setViewers(sortedViewers);
        setAllMostViewed(sortedViewers);
        setAllRecommended(sortedRecommended)
        for (let i = 0; i < 3; i++) {
            threeRecommended.push(sortedRecommended[i]);
        };
        setRecommended(threeRecommended);
        for (let i = 0; i < 3; i++) {
            threeMostViewed.push(sortedRecommended[i]);
        };
        setViewers(threeMostViewed)
    }, []);
    return (
        <View style={styles.mainContainer}>
            
            <FlatList
                data={recommended}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.FlatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.dataContainer}>
                            <Image
                                style={styles.movieImage}
                                source={{ uri: item.imageLink }}
                            />
                            <View style={styles.movieDescriptionContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.yearContainer}>
                                    <Text style={styles.year}>{item.year}</Text>
                                </View>
                                {
                                    item.rating === 5 ?
                                        <Image
                                            style={styles.itemrating}
                                            source={require('../../Assets/five-stars.png')}
                                        />
                                        :
                                        item.rating === 4 ?
                                            <Image
                                                style={styles.itemrating}
                                                source={require('../../Assets/four-stars.png')}
                                            />
                                            :
                                            item.rating === 3 ?
                                                <Image
                                                    style={styles.itemrating}
                                                    source={require('../../Assets/three-stars.png')}
                                                />
                                                :
                                                item.rating === 2 ?
                                                    <Image
                                                        style={styles.itemrating}
                                                        source={require('../../Assets/two-stars.png')}
                                                    />
                                                    :
                                                    <Image
                                                        style={styles.itemrating}
                                                        source={require('../../Assets/star.png')}
                                                    />

                                }
                                <ButtonComponent
                                onPress={() => navigation.navigate('DetailMovie',{item})}
                                />
                            </View>
                        </View>

                    )
                }}
                ListHeaderComponent={
                    <View>
                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>Most Viewed</Text>
                            </View>
                            <View style={styles.seeAllContainer}>
                                <TouchableOpacity
                                onPress={
                                    () => navigation.navigate('MostViewed',{allMostViewed})
                                }
                                >
                                    <Text style={styles.seeAllText}>See All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            horizontal
                            data={viewers}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <ShowMovie
                                        image={{ uri: item.imageLink }}
                                        title={item.title}
                                        viewers={item.viewers}
                                        isHome={true}
                                    />
                                )
                            }}

                        />
                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>Recommended</Text>
                            </View>
                            <View style={styles.seeAllContainer}>
                                <TouchableOpacity 
                                onPress={() => navigation.navigate('Recommended',{allRecommended})}
                                >
                                    <Text style={styles.seeAllText}>See All</Text> 
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }
            />
        </View>
    )
};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    FlatListContainer: {
        padding: 8,

        margin: 16,
    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    },
    dataContainer: {
        padding: 8,
        margin: 8,
        flexDirection: "row",
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
    },
    mainContainer: {
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    movieDescriptionContainer: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 8
    },
    yearContainer: {
        marginTop: 8,
        marginBottom: 8
    },
    mainCategoryContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8
    },
    categoryContainer: {
        flex: 1,
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemrating:{
        width:100,
        height:20
    },
    seeAllContainer:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    seeAllText:{
        color:'#009688',
        textDecorationLine:'underline'
    }
});
export default HomeScreen;