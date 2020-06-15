/**
 * @flow strict-local
 */
import React, { useEffect } from 'react'
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { loadNewsArticles, setCurrentArticleKey } from '../actions/news'
import NewsCard from './news-card'


const Home: () => React$Node = ({ articles, loadNewsArticles, navigation, setCurrentArticleKey }) => {
  useEffect(() => {
    loadNewsArticles()
  }, [])

  const viewArticleDetails: () => Void = (key) => {
    setCurrentArticleKey(key)
    navigation.navigate('Details')
  }

  const articleList: Array = articles.map((a) => <NewsCard 
    article={a}
    key={a.key}
    viewDetails={viewArticleDetails} />)
  
  return (
    <SafeAreaView>
      <ScrollView>
        { articleList }
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  articles: state.news.articles
})

export default connect(mapStateToProps, { loadNewsArticles, setCurrentArticleKey })(Home)
