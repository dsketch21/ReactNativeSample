/**
 * @flow strict-local
 */
import React from 'react'
import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'
import { currentArticle } from '../selectors/news'
import ToggleFavorite from './toggle-favorite'

const Details: () => React$Node = ({ article }) => {
  const publishedDate = moment(article.publishedAt).format('lll')
  return (
    <View style={styles.detailWrapper}>
      <Image
        style={styles.imageSize}
          source={{
            uri: article.urlToImage,
          }}
        />
      <Text style={styles.title}>{ article.title }</Text>
      <Text>Published: {publishedDate}</Text>
      <Text style={styles.content}>{ article.content }</Text>
      <View style={styles.buttonContainer}>
        <ToggleFavorite articleKey={article.key} />
        <Button onPress={() => Linking.openURL(article.url)} title='Read Full Article' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center'
  },
  content: {
    fontSize: 16,
    marginTop: 15
  },
  detailWrapper: {
    margin: 20
  },
  imageSize: {
    height: 200,
    marginBottom: 15,
    resizeMode: 'stretch',
    width: '100%'
  },
  title: {
    fontSize: 20,
    marginBottom: 5
  }
})

const mapStateToProps = state => ({
  article: currentArticle(state)
})

export default connect(mapStateToProps, {})(Details)

