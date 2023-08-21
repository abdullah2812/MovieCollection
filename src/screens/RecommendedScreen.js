import { View, Text ,FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler/lib/typescript/components/touchables'
import { ShowMovie } from '../components/MovieComponent'

const RecommendedScreen = (props) => {
    const {route} = props;
    const  sortedRecommended = RecommendedScreen.params.allRecommended;
  return (
  <View>
      <FlatList
    data={sortedRecommended}
    contentContainerStyle={styles.mainContainer}
    numColumns={2}
    key={2}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => {
        return (
            <ShowMovie
            image={{uri: item.imageLink}}
            title={item.title}
            viewers={item.viewers}
            />
        )
    }}
    />
  </View>
  )
  const styles = StyleSheet.create({
    mainContainer:{
        padding:8
    }
  })
}

export default RecommendedScreen