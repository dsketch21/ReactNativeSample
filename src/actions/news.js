import { getNewsArticles } from '../services/news'

export const GET_NEWS_ARTICLES = 'GET_NEWS_ARTICLES'
export const SET_CURRENT_ARTICLES = 'SET_CURRENT_ARTICLES'
export const TOGGLE_ARTICLE_FAVORITE = 'TOGGLE_ARTICLE_FAVORITE'

export const loadNewsArticles = () => async dispatch => {
  const articles = await getNewsArticles()
  dispatch({
      type: GET_NEWS_ARTICLES,
      payload: {
        articles
      }
  })
}

export const setCurrentArticleKey = (key) => async dispatch => {
  dispatch({
      type: SET_CURRENT_ARTICLES,
      payload: {
        key
      }
  })
}

export const toggleArticleFavoriteStatus = (key) => async dispatch => {
  dispatch({
      type: TOGGLE_ARTICLE_FAVORITE,
      payload: {
        key
      }
  })
}