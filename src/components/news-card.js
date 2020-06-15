/**
 * @flow strict-local
 */
import React from 'react'
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import moment from 'moment'
import ToggleFavorite from './toggle-favorite'

const NewsCard: () => React$Node = ({ article, viewDetails }) => {
  const publishedDate = moment(article.publishedAt).format('lll')
  return (
    <View style={styles.newsCard}>
      <Image
      style={styles.imageSize}
        source={{
          uri: article.urlToImage,
        }}
      />
      <Text style={styles.title}>{article.title}</Text>
      <Text>Published: {publishedDate}</Text>
      <View style={styles.buttonContainer}>
        <ToggleFavorite articleKey={article.key} />
        <Button onPress={() => viewDetails(article.key)} title='Read More' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 15
  },
  imageSize: {
    height: 200,
    resizeMode: 'stretch',
    width: '100%',
  },
  newsCard: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 5
  }
})

export default NewsCard
