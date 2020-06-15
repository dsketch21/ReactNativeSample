/**
 * @flow strict-local
 */
import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { toggleArticleFavoriteStatus } from '../actions/news'

const ToggleFavorite: () => React$Node = ({ articleKey, favorites, toggleArticleFavoriteStatus }) => {
  const isFavorited: Number = favorites.indexOf(articleKey) !== -1
  const buttonTitle: String = !isFavorited ? 'Add to Favorites' : 'Remove from Favorites'
  return (
    <View>
      <Button onPress={() => toggleArticleFavoriteStatus(articleKey)} title={buttonTitle} />
    </View>
  )
}

const mapStateToProps = state => ({
  favorites: state.news.favorites
})

export default connect(mapStateToProps, { toggleArticleFavoriteStatus })(ToggleFavorite)

